
import Paginated from "../../Components/Paginated/Paginated";
import { useEffect, useState } from "react";
import { useDispatch,useSelector} from "react-redux"; //mis hooks
import {getProducts} from "../../Redux/actions"
import CardsProducts from "../../Components/CardsProducts/CardsProducts"
import  "../../index.css"
import NavBar from "../../Components/NavBar/NavBar";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";
import Footer from "../../Components/Footer/Footer";
import Category from "../../Components/Category/Category";
import { BsFillSunFill,BsFillMoonFill } from 'react-icons/bs';
import { Switch, Space } from 'antd';


const Home= ()=>{

  const dispatch= useDispatch();
  const allProducts= useSelector(state=> state.products) ;
  const[productsViews, setProductsViews]= useState (9);
  
  // const allProductsCategory = useSelector(state=> state.allProductsCategory) ; 
  const[pageActual, setPageActual]= useState (1); //numero de pagina donde estoy
  const lastIndex= pageActual * productsViews; //segundo parametro
  const firstIndex= lastIndex - productsViews; //primer parameto
  const maximumPage= Math.ceil(allProducts.length/productsViews); //nose si sera par o inpar
  const newStateProducts= allProducts.slice(firstIndex,lastIndex);
  
  const pagin=(pageNumber)=>{ //rendirizamos
    setPageActual(pageNumber); //pasamos los numero de las paginas para modificar el estado local
  }
  
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch]);
/****************************Modo nocturno y claro */
const [theme, setTheme] = useState("light")

useEffect(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches){
    setTheme('dark');
  }
  else {setTheme('light')
}
},[])

useEffect(() => {
  if (theme === "dark"){
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
},[theme])

const handleTHemeSwitch = () =>{
  setTheme(theme === "dark" ? "light" : "dark")
}
/****************************Modo nocturno y claro */
  return (


    
    <div className="flex flex-col bg-slate-200 dark:bg-zinc-800">
        <div class="relative">
        <NavBar pagin={pagin} />
          <space className="absolute bottom-[30px] left-16 w-36 ml-4" onClick={handleTHemeSwitch}>
    <Switch className="bg-purple-700 dark:bg-purple-700" checkedChildren={<BsFillMoonFill className="mt-[5px] " />} unCheckedChildren={< BsFillSunFill className="w-full text-purple-300 mt-[10px]"/>}/>
        </space>
        </div>
          {/* <br /><br /> */}
        {/* <Jumbotron/> */}
        {/* <br /> */}
        <Category/>
        <br />
        <CardsProducts newStateProducts ={newStateProducts} />
        <br />
        <Paginated maximumPage={maximumPage} pagin={pagin} />
        <br />
        <Footer/>
        {/* <p>Pagina {pageActual}</p> */}
    </div>


  )
};

export default Home;

