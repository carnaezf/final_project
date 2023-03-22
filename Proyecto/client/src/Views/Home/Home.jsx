
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


const Home= ()=>{

  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch]);

  const allProductsCategory = useSelector(state=> state.allProductsCategory) ; 
  const allProducts= useSelector(state=> state.products) ;
  const[pageActual, setPageActual]= useState (1); //numero de pagina donde estoy
  const[productsViews, setProductsViews]= useState (9);
  const lastIndex= pageActual * productsViews; //segundo parametro
  const firstIndex= lastIndex - productsViews; //primer parameto
  const maximumPage= Math.ceil(allProducts.length/productsViews); //nose si sera par o inpar
  const newStateProducts= allProducts.slice(firstIndex,lastIndex);

  const pagin=(pageNumber)=>{ //rendirizamos
    setPageActual(pageNumber); //pasamos los numero de las paginas para modificar el estado local
  }
  
  return (

    <div className="flex flex-col">
    
      <NavBar pagin={pagin} />
      <br /><br />
      <Jumbotron/>

    <br />
    



      {/* <Paginated maximumPage={maximumPage} pagin={pagin}/> */}

      <div>
        <CardsProducts newStateProducts ={newStateProducts} />
      </div>
      <div></div>
      <div>
        <Paginated maximumPage={maximumPage} pagin={pagin} />
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        <Footer/>
      </div>
      
      
      
      


      <br />
      <Category/>
      <br />
      <CardsProducts newStateProducts ={newStateProducts} />
      <br />
      <Paginated maximumPage={maximumPage} pagin={pagin} />
      <br />


      {/* <p>Pagina {pageActual}</p> */}
    </div>

  )
};

export default Home;

