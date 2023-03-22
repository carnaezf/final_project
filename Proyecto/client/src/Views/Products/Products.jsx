import { useEffect, useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { getProducts } from "../../Redux/actions";
import NavBar from "../../Components/NavBar/NavBar";
import CardsProducts from "../../Components/CardsProducts/CardsProducts"
import Paginated from "../../Components/Paginated/Paginated"

const Products=()=>{
    const dispatch= useDispatch();
    useEffect(()=>{
      dispatch(getProducts())
    },[dispatch]);
  
   
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
        <br />
        <CardsProducts newStateProducts ={newStateProducts} />
        <br />
        <Paginated maximumPage={maximumPage} pagin={pagin} />
        <br />
  
        {/* <p>Pagina {pageActual}</p> */}
      </div>
  
    )
}

export default Products;
