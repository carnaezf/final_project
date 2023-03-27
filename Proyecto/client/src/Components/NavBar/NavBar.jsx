
import style from './NavBar.module.css'
import { ShoppingBagContex } from '../../Contexts/ShoppingBagsContext'

import React, { useState, useContext } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { BsPersonFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import SearchBar from "../SearchBar/SearchBar"




export default function NavBar(props) {
  const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContex)

  const quantity = shoppingBag.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);




  return (
    <div className="navbar  h-full w-full bg-neutral-400 dark:bg-zinc-700 bg-clip-padding dark:bg-clip-padding backdrop-filter dark:backdrop-filter backdrop-blur-lg dark:backdrop-blur-lg bg-opacity-10 dark:bg-opacity-10">   
      <div className="flex-1">  
        <h1 className="case text-xl ml-4"> Haal </h1>

        <div className="dropdown">

          <div className='flex ml-[10rem] mt-4 content-center ' >
            <ul className='content-center mb-2'>
              <Link  to ={"/accessories"}><li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-300 dark:hover:text-purple-400"> Acessories</li></Link>
              <Link to ={"/shoes"}><li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-300 dark:hover:text-purple-400">  Shoes</li></Link>
              <Link  to ={"/clothing"}><li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-300 dark:hover:text-purple-400">Clothing</li></Link>
              <Link to="/allproducts"><li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-300 dark:hover:text-purple-400"> All Products</li></Link>
              <Link to="/testing"><li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-300 dark:hover:text-purple-400">Testing</li></Link>
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
          <Link className={style.navStyles} to={'/'}>
            <h2>Store</h2>
          </Link>

          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <Link className={style.navStyles} to={'/shoppingBag'}> 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </Link>
            </div>
          </label>


          <ul className={style.navList}>

                      <li>
                          Items: <span className={style.cartCount}>{quantity}</span>
                      </li>

              </ul>
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

          <BsPersonFill className='transition text-current hover:text-purple-700 dark:text-slate-300 dark:hover:text-purple-600 justify-center w-full mt-[12px] text-xl'/>
        </div>
        <div>

        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

        <li className="justify-between"> <Link to='/login-form'> Log </Link></li>
        <li className="justify-between"> <Link to='/createProduct'> Shopping Cart</Link></li>
        <li className="justify-between"> <Link to="/formLogin"> Login </Link></li>

      </ul>
        </div>
            </div>

    </div>
    

    
  )
}
 
