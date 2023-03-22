import { useEffect, useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { getCategory } from "../../Redux/actions";
import NavBar from "../../Components/NavBar/NavBar";
import CardsProducts from "../../Components/CardsProducts/CardsProducts";
import Paginated from "../../Components/Paginated/Paginated";

const Shoes=()=>{

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getCategory("shoes"))
    },[dispatch]);

    const productsCategory= useSelector(state=> state.productsCategory) ;
    const[pageActual, setPageActual]= useState (1); //numero de pagina donde estoy
    const[productsViews, setProductsViews]= useState (9);
    const lastIndex= pageActual * productsViews; //segundo parametro
    const firstIndex= lastIndex - productsViews; //primer parameto
    const maximumPage= Math.ceil(productsCategory.length/productsViews); //nose si sera par o inpar
    const newStateProducts= productsCategory.slice(firstIndex,lastIndex);
  
    const pagin=(pageNumber)=>{ //rendirizamos
      setPageActual(pageNumber); //pasamos los numero de las paginas para modificar el estado local
    }

    return(
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

export default Shoes;