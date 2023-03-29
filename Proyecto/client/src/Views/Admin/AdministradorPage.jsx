import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Administrador from "../../Components/Administrador/TableProducts";
import MenuAdmin from "../../Components/Administrador/MenuAdmin";

export default function AdministradorPage (){
    return(
        <div>
            <NavBar/>
            <MenuAdmin/>
            {/* <Administrador/> */}
        </div>
    )
}