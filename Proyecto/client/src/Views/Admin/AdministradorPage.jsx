import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import SideMenu from "../../Components/Administrador/SideMenu/SideMenu";
import ProductAdmin from "../../Components/Administrador/Pages/ProductAdmin";
import CreateProduct from "../AdminForm/CreateProducts";
import Users from "../../Components/Administrador/Pages/Users";
import { Route } from "react-router";
import Orders from "../../Components/Administrador/Pages/Orders";
import Dashboard from "../../Components/Administrador/Pages/Dashboard";
import Logout from "../../Components/Administrador/Pages/Logout";

export default function AdministradorPage() {
  return (
    <div>
      <NavBar />
      <div className="flex w-full">
        <div>
          <SideMenu />
        </div>
        <div className="flex w-full justify-start">
          <Route path="/products" exact component={ProductAdmin} />
          <Route path="/users" exact component={Users} />
          <Route path="/createProduct" exact component={CreateProduct} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/admin" exact component={Dashboard} />
          <Route path="/logout" exact component={Logout} />
        </div>
      </div>
    </div>
  );
}
