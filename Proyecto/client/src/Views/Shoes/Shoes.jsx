import { useEffect, useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { getCategory } from "../../Redux/actions";
import NavBar from "../../Components/NavBar/NavBar";
import CardsProducts from "../../Components/CardsProducts/CardsProducts";
import Paginated from "../../Components/Paginated/Paginated";
import Filter from "../../Components/Filter/FilterShoes"
import Footer from"../../Components/Footer/Footer.jsx"

const Shoes=()=>{

  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(getCategory("shoes"))
  },[dispatch]);

  const productsCategory= useSelector(state=> state.filterPrice);
  const[pageActual, setPageActual]= useState (1); //numero de pagina donde estoy
  const[productsViews, setProductsViews]= useState (8);
  const lastIndex= pageActual * productsViews; //segundo parametro
  const firstIndex= lastIndex - productsViews; //primer parameto
  const maximumPage= Math.ceil(productsCategory.length/productsViews); //nose si sera par o inpar
  const newStateProducts= productsCategory.slice(firstIndex,lastIndex);
  
  const pagin=(pageNumber)=>{ //rendirizamos
    setPageActual(pageNumber); //pasamos los numero de las paginas para modificar el estado local
  }



  return(
    <div className="flex flex-col bg-slate-200 dark:bg-zinc-800">
      <div >
        <div>
          <h1 >No Eliminar</h1>
        </div>

      </div>
        
      <div class="fixed top-0 z-50 w-full">
        <NavBar pagin={pagin} />
      </div>
      <br /><br /><br />

      <div className="flex justify-between text-4xl  h-full w-full  dark:bg-zinc-700 bg-clip-padding dark:bg-clip-padding backdrop-filter dark:backdrop-filter backdrop-blur-lg dark:backdrop-blur-lg bg-opacity-10 dark:bg-opacity-10">
        <div >
          <h1 className="btn  font-normal  text-m  text-sky-400 animate-bounce">SHOES</h1>
        </div>

      </div>

      <Filter pagin={pagin}/>
      <br />
  
      <CardsProducts newStateProducts ={newStateProducts} />
      <br />
      <Paginated maximumPage={maximumPage} pagin={pagin} />
      <br />
      <Footer/>
      {/* <p>Pagina {pageActual}</p> */}
    </div>
  )
}

export default Shoes;