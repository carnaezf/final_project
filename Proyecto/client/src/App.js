import "./App.css"; //solo al inicio
import Home from "./Views/Home/Home";
import Details from "./Views/Details/Details";
import Products from "./Views/Products/Products";
// import { Route, useLocation } from "react-router-dom"; //para poder usar el useLocation //asi venia
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import NavBar from './Components/NavBar/NavBar';
import ShoppingBag from "../src/Components/ShoppingBag/ShoppingBag.jsx";
import createProduct from "../src/Views/AdminForm/CreateProducts";

function App() {
  //const location =useLocation();
  // console.log(location);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/home" component={Home} />
          {/*   <Route exact path="/home/products" component={Products} /> */}
          <Route exact path="/home/products/:id" component={Details} />
          <Route exact path="/products" component={Products} />
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
          <Route exact path="*" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
