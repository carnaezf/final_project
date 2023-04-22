import Paginated from "../../Components/Paginated/Paginated";
import { useEffect, useState,useContext } from "react";
import { useDispatch, useSelector } from "react-redux"; //mis hooks
import { getProducts } from "../../Redux/actions";
import CardsProducts from "../../Components/CardsProducts/CardsProducts";
import "../../index.css";
import NavBar from "../../Components/NavBar/NavBar";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";
import Footer from "../../Components/Footer/Footer";
import Category from "../../Components/Category/Category";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Switch, Space } from "antd";
import SearchBar from "../../Components/SearchBar/SearchBar";
// import { themeContext} from "../../Contexts/themeContext"

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const [productsViews, setProductsViews] = useState(8);

  // const allProductsCategory = useSelector(state=> state.allProductsCategory) ;
  const [pageActual, setPageActual] = useState(1); //numero de pagina donde estoy
  const lastIndex = pageActual * productsViews; //segundo parametro
  const firstIndex = lastIndex - productsViews; //primer parameto
  const maximumPage = Math.ceil(allProducts.length / productsViews); //nose si sera par o inpar
  const newStateProducts = allProducts.slice(firstIndex, lastIndex);

  // const t = useContext(themeContext)
  const pagin = (pageNumber) => {
    //rendirizamos
    setPageActual(pageNumber); //pasamos los numero de las paginas para modificar el estado local
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col bg-slate-200 dark:bg-zinc-800">
      <div class="fixed top-0 z-50 w-full">
        {/* *****Nav***** */}
        <NavBar pagin={pagin} />
      </div>

      <br />
      {/* <Jumbotron/> */}
      <Category />
      <br />
      <Jumbotron />
      <br />
      <SearchBar pagin={pagin} />
      <br />
      <CardsProducts newStateProducts={newStateProducts} />
      <br />
      <Paginated maximumPage={maximumPage} pagin={pagin} />
      <br />
      <Footer />
      {/* <p>Pagina {pageActual}</p> */}
    </div>
  );
};

export default Home;
