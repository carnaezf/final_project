import React from "react";
import Administrador from "./TableProducts";
import { Link, NavLink } from 'react-router-dom';

export default function MenuAdmin(){
    return(
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello Administrator!</h1>
                        <p className="py-6">Choose any of these operations to perform</p>
                        <Link to ={"/tableproduct"}><button className="btn btn-primary">Products</button></Link>
                        <Link to ={"/tableusers"}><button className="btn btn-primary">Users</button></Link>
                        <Link to ={"/tableorder"}><button className="btn btn-primary">Orders</button></Link>
                        <Link to ={"/createProduct"}><button className="btn btn-primary">Create Product</button></Link>
                     </div>
                </div>
            </div>
        </div>
    )
}