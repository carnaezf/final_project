
import Paginated from "../../Components/Paginated/Paginated";
import { useEffect, useState } from "react";
import { useDispatch,useSelector} from "react-redux"; //mis hooks
import {getProducts} from "../../Redux/actions"
import { Link } from "react-router-dom";
import CardsProducts from "../../Components/CardsProducts/CardsProducts"
import  "../../index.css"
import NavBar from "../../Components/NavBar/NavBar";

import Jumbotron from "../../Components/Jumbotron/Jumbotron";

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
    
      {/* <h1 className="text-3xl font-bold underline">home</h1> */}
      {/* <Link to= "/products"><button>products</button></Link> */}
      <NavBar pagin={pagin} />
        {/* <div>
          <Link to='shoppingBag'>
            <button>ShoppingBag</button>
          </Link>
        </div> */}
      
      <div className="Testing Components">
        <div>
          <Link to='createProduct'>
            <button>Create Product Form</button>
          </Link>
        </div>
      </div>
      <Jumbotron/>
    <br />




      {/* <Paginated maximumPage={maximumPage} pagin={pagin}/> */}

      <div>
        <CardsProducts newStateProducts ={newStateProducts} />
      </div>
      <div>
        <div>
          <Paginated maximumPage={maximumPage} pagin={pagin} />
        </div>
      </div>
      
      
      
      


      {/* <p>Pagina {pageActual}</p> */}
  </div>

  )
};

export default Home;

