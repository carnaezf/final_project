import { useEffect, useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { getProducts } from "../../Redux/actions";
import NavBar from "../../Components/NavBar/NavBar";
import CardsProducts from "../../Components/CardsProducts/CardsProducts"
import Paginated from "../../Components/Paginated/Paginated"
import Footer from"../../Components/Footer/Footer.jsx"
import Filter from "../../Components/Filter/FilterAllProducts"


const Products=()=>{
    const dispatch= useDispatch();
    useEffect(()=>{
      dispatch(getProducts())
    },[dispatch]);
  
   
    const allProducts= useSelector(state=> state.filterPriceAllProducts) ;
    const[pageActual, setPageActual]= useState (1); //numero de pagina donde estoy
    const[productsViews, setProductsViews]= useState (8);
    const lastIndex= pageActual * productsViews; //segundo parametro
    const firstIndex= lastIndex - productsViews; //primer parameto
    const maximumPage= Math.ceil(allProducts.length/productsViews); //nose si sera par o inpar
    const newStateProducts= allProducts.slice(firstIndex,lastIndex);
  
    const pagin=(pageNumber)=>{ 
      setPageActual(pageNumber);
    }
  
    return (
  
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
            <h1 className="btn  font-normal  text-m  text-sky-400 animate-bounce">ALL PRODUCTS</h1>
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

export default Products;
