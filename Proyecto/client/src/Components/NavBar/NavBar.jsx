

import { ShoppingBagContext } from '../../Contexts/ShoppingBagContext'


import React, { useState, useContext } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { BsPersonFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import SearchBar from "../SearchBar/SearchBar"
import logo from "./Haal.png"




export default function NavBar(props) {
  const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContext)

  const quantity = shoppingBag.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);




  return (
    <div className="navbar  h-full w-full bg-neutral-400 dark:bg-zinc-700 bg-clip-padding dark:bg-clip-padding backdrop-filter dark:backdrop-filter backdrop-blur-lg dark:backdrop-blur-lg bg-opacity-10 dark:bg-opacity-10">   
      <div className="flex-1 "> 
       <Link to={"/home"}>
       <img className="ml-[px] w-[11rem] text-white "src={logo} alt = "Haal"></img>
      </Link>
        <div className="dropdown">

          <div className='flex ml-[10rem] mt-4 content-center ' >
            <ul className='content-center mb-2'>
              <Link  to ={"/accessories"}><li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-400"> Acessories</li></Link>
              <Link to ={"/shoes"}><li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-400">  Shoes</li></Link>
              <Link  to ={"/clothing"}><li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-400">Clothing</li></Link>
              <Link to="/allproducts"><li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-400"> All Products</li></Link>
              <Link to="/testing"><li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-400">Testing</li></Link>
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

      <nav>
          <label tabIndex={0} className="btn btn-ghost btn-circle dark:hover:border-purple-200">
            <div className="indicator">
              <Link to='/shoppingBag'className='w-10 rounded-full border-trasparent '>
                <AiFillShopping className='text-current hover:text-purple-700 dark:text-slate-300 dark:hover:text-purple-600 justify-center w-full mt-2 mb-2 text-xl'/>
                <span className="transition rounded-full indicator-item mt-[9px] mr-[8px] border-none bg-purple-700 px-2 py-[4px] text-white text-[7pt] opacity-70 ">{quantity}</span>
              </Link>
            </div>
          </label>
      </nav>    

    </div>



    <div className="dropdown dropdown-end">

        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

          <li className="justify-between"> <Link to='/login-form'> Login</Link></li>
          <li className="justify-between"> <Link to='/createProduct'> Check in</Link></li>
        </ul>
      </div>
  </div>

        

        <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-14 dark:hover:border-purple-200">
        <div className="w-10 rounded-full border-trasparent ">

          <BsPersonFill className='transition text-current hover:text-purple-700 dark:text-slate-300 dark:hover:text-purple-600 justify-center w-full mt-[11px] text-xl'/>
        </div>
        <div>

      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-roboto normal-case">

    
        <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300"> <Link to='/formLogin'> Login </Link></li>
        {/* <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300"> <Link to='/createProduct'> Shopping Cart</Link></li>
        <li className="justify-between"> <Link to='/login-form'> Log </Link></li> */}


      </ul>
        </div>
      </label>
        </div>
            </div>
{/* /****************************************** */ }

    </div>
    // </div>

    
  )
}
 
