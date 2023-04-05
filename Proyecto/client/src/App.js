import "./App.css"; //solo al inicio
import Home from "./Views/Home/Home";
import Details from "./Views/Details/Details";
import Products from "./Views/Products/Products";
// import Category from "./Components/Category/Category";
// import { Route, useLocation } from "react-router-dom"; //para poder usar el useLocation //asi venia
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import NavBar from './Components/NavBar/NavBar';
// import createProduct from "../src/Views/AdminForm/CreateProducts";
import Testing from "./Components/Testing/Testing";
import Accessories from "./Views/Accessories/Accessories";
import AdministradorPage from "./Views/Admin/AdministradorPage";
import Clothing from "./Views/Clothing/Clothing";
import React from "react";

import Shoes from "./Views/Shoes/Shoes";
import ShoppingBag from "../src/Components/ShoppingBag/ShoppingBag.jsx";

import { ShoppingBagProvider } from "../src/Contexts/ShoppingBagContext";
import { SelectedSizeSizeProvider } from  "../src/Contexts/SelectedSizeContext";

import Register from "./Views/Register/Register";
import { AuthProvider } from "./Contexts/authContext.jsx";
import Login from "./Views/Login/Login";
import CheckoutForm from "../src/Components/ShoppingBag/CheckoutForm";
import { useSelector } from "react-redux";
import ProfileUser from "./Components/ProfileUser/ProfileUser";

// // Deploy
// import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:3001/'
axios.defaults.baseURL='https://finalproject-production-58fc.up.railway.app'

function App() {
  //const location =useLocation();
  const userlogin = useSelector((state) => state.user);
  return (
    <AuthProvider>
      <SelectedSizeSizeProvider>
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
                {/* <Route exact path="/createProduct" component={createProduct} /> */}
                <Route exact path="/testing" component={Testing} />
                <Route exact path="/allproducts" component={Products} />
                <Route
                exact
                path={[
                  "/admin",
                  "/users",
                  "/createProduct",
                  "/orders",
                  "/logout",
                  "/products",
                ]}
                  component={AdministradorPage}
                />
                <Route exact path="/checkoutform" component={CheckoutForm} />
                <Route exact path="/accessories" component={Accessories} />
                <Route exact path="/clothing" component={Clothing} />
                <Route exact path="/shoes" component={Shoes} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile" component={ProfileUser} />
                <Route exact path="*" component={Home} />
              </Switch>
            </div>
          </BrowserRouter>
        </ShoppingBagProvider>
      </SelectedSizeSizeProvider>
    </AuthProvider>
  );
}

export default App;
