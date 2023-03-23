import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch, BsFillCartFill, BsPersonFill } from "react-icons/bs";
import SearchBar from "../SearchBar/SearchBar"
import Testing from '../Testing/Testing';

// import style from './NavBar.module.css'

export default function NavBar(props) {



  return (
    <div className="navbar bg-base-100 navbar bg-neutral text-neutral-content ">   
      <div className="flex-1">  
        <h1 className="case text-xl ml-4"> Haal </h1>
        <div className="dropdown">

          <div className='flex ml-[10rem] mt-4 content-center ' >
            <ul className='content-center'>
              <li className="btn btn-ghost normal-case text-xl"> <Link  to ={"/accessories"}>Acessories</Link></li>
              <li className="btn btn-ghost normal-case text-xl"><Link  to ={"/shoes"}>Shoes</Link></li>
              <li className="btn btn-ghost normal-case text-xl"><Link  to ={"/clothing"}>Clothing</Link></li>
              <li className="btn btn-ghost normal-case text-xl"><Link to="/allproducts"> All Products</Link></li>
              <li className="btn btn-ghost normal-case text-xl"><Link to="/testing">Testing</Link></li>
            </ul>
          </div>
          
        </div>
      </div>
  
      <div className="flex-none gap-2"> 
        <div className="form-control">
          <SearchBar className='flex justify-end' pagin={props.pagin}/>
        </div>

      
      
        <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
        <Link to='/shoppingBag'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </Link>
        </div>
      </label>
      
    </div>
    <div className="dropdown dropdown-end">

        {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-4 mr-4">
          <div className="w-10 rounded-full border-trasparent hover:border">
            <BsPersonFill className='justify-center w-full mt-2 text-xl'/>
          </div>
        </label> */}
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

          <li className="justify-between"> <Link to='/login-form'> Login</Link></li>
          <li className="justify-between"> <Link to='/createProduct'> Check in</Link></li>
        </ul>
      </div>
  </div>
        

        <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full border-trasparent ">

          <BsPersonFill className='justify-center w-full mt-2 text-xl'/>
        </div>
        <div>

        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

        <li className="justify-between"> <Link to='/login-form'> Login </Link></li>
        <li className="justify-between"> <Link to='/createProduct'> Shopping Cart</Link></li>

      </ul>
        </div>
            </div>
    </div>
    

    
  )
}
 
