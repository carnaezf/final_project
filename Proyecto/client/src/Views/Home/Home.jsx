import React from "react";
import {Link} from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";


// import { useEffect, useState } from "react";


export default function Home(){
   return (
        <div> 
            <NavBar/>
            <h1>Home</h1>
            <Link to = "home/products">
            <button>
                Productos
            </button>
         </Link>
        </div>
               
           
    )
}