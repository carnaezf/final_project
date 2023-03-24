import "./App.css"; //solo al inicio
import Home from "./Views/Home/Home";
import Details from "./Views/Details/Details";
import Products from "./Views/Products/Products";
import Category from "./Components/Category/Category";
// import { Route, useLocation } from "react-router-dom"; //para poder usar el useLocation //asi venia
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import NavBar from './Components/NavBar/NavBar';
import createProduct from "../src/Views/AdminForm/CreateProducts";
import LoginForm from "../src/Views/LoginForm/LoginForm";
import Testing from "./Components/Testing/Testing";
import Accessories from "./Views/Accessories/Accessories";
import Clothing from "./Views/Clothing/Clothing";

import Shoes from "./Views/Shoes/Shoes"
import ShoppingBag from "../src/Components/ShoppingBag/ShoppingBag.jsx";
import { ShoppingBagProvider } from "../src/Contexts/ShoppingBagsContext";




function App() {
  //const location =useLocation();
  // console.log(location);
  return (

   <ShoppingBagProvider>
    <BrowserRouter forceRefresh={true}>
      <div className="App">
        <Switch>
          <Route exact path="/home" component={Home} />
          {/*   <Route exact path="/home/products" component={Products} /> */}
          <Route exact path="/products/:id" component={Details} />

          {/* <Route exact path="/home/:category" component={Category} /> */}
          {/* <Route path="/results/:name" component={SearchBar} /> */}
          {/*   <Route exact path="/home/men" component={Men} />
          <Route exact path="/home/women" component={Women} />
          <Route exact path="/home/kids" component={Kids} />
          <Route exact path="/home/order" component={Order} />
          <Route exact path="/home/account" component={Account} />
          <Route exact path="/home/shoppingBag" component={ShoppingBag} /> */}
          <Route exact path="/shoppingBag" component={ShoppingBag} />
          <Route exact path="/createProduct" component={createProduct} />
          <Route exact path="/login-form" component={LoginForm} />
          <Route exact path="/testing" component={Testing} />
          <Route exact path="/allproducts" component={Products} />
            <Route exact path="/accessories" component={Accessories} />
            <Route exact path="/clothing" component={Clothing} />
            <Route exact path="/shoes" component={Shoes} />
            <Route exact path="*" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </ShoppingBagProvider>
  );
}


export default App;
