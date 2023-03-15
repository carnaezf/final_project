import "./App.css"; //solo al inicio
import Home from "./Views/Home/Home";
import Landing from "./Views/Landing/Landing";
import Detail from "./Views/Detail/Detail";
import Form from "./Views/Form/Form";
import { Route, useLocation } from "react-router-dom"; //para poder usar el useLocation
//import NavBar from './Components/NavBar/NavBar';

function App() {
  //const location =useLocation();
  // console.log(location);
  return (
    <div className="App">
      {/* {/* {/* {location.pathname !=="/" && <NavBar/>}  /} */}
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/products" component={Products} />
      <Route exact path="/home/products/detail/:id" component={Detail} />
      <Route exact path="/home/men" component={Men} />
      <Route exact path="/home/women" component={Women} />
      <Route exact path="/home/kids" component={Kids} />
      {/* <Route exact path="/home/category" component={Category} /> */}
      <Route exact path="/home/order" component={Order} />
      <Route exact path="/home/account" component={Account} />
      <Route exact path="/home/shoppingBag" component={ShoppingBag} />
      <Route exact path="*" component={Home} />
    </div>
  );
}

export default App;
