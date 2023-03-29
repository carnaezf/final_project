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
import AdministradorPage from "./Views/Admin/AdministradorPage";
import Clothing from "./Views/Clothing/Clothing";
import React from "react";

import Shoes from "./Views/Shoes/Shoes";
import ShoppingBag from "../src/Components/ShoppingBag/ShoppingBag.jsx";

import { ShoppingBagProvider } from "../src/Contexts/ShoppingBagContext";
import FormLogin from "./Views/LoginForm/FomLogin";

import FormLogin2 from "./Views/LoginForm/FormLogin2.jsx";
import Register from "./Views/LoginForm/Register";
import { AuthProvider } from "./Contexts/authContext.jsx";

function App() {
  //const location =useLocation();
  // console.log(location);
  return (
    <AuthProvider>
      <ShoppingBagProvider>
        <BrowserRouter>
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
              <Route exact path="/formLogin" component={FormLogin} />
              <Route exact path="/formLogin2" component={FormLogin2} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/testing" component={Testing} />
              <Route exact path="/allproducts" component={Products} />
              <Route exact path="/admin" component={AdministradorPage} />
              <Route exact path="/accessories" component={Accessories} />
              <Route exact path="/clothing" component={Clothing} />
              <Route exact path="/shoes" component={Shoes} />
              <Route exact path="*" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </ShoppingBagProvider>
    </AuthProvider>
  );
}

export default App;
