import React from "react";
import {Link} from "react-router-dom"

// import { useEffect, useState } from "react";


export default function Home(){
   
    

    
    return (
        <>
        <h1>Home</h1>
        <Link to = "home/products">
            <button>
                Productos
            </button>
        </Link>
        </>
               
           
    )
}