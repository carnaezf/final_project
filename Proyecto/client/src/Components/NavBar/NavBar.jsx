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

      <div className='flex ml-[45rem] content-center' >
      <ul className='content-center'>
        <li className="btn btn-ghost normal-case text-xl"> <Link to='/home/accesories'><a>Acessories</a></Link></li>
        <li className="btn btn-ghost normal-case text-xl"><Link to='/home/shoes'><a>Shoes</a></Link></li>
        <li className="btn btn-ghost normal-case text-xl"><Link to='/home/clothing'><a>Clothing</a></Link></li>
        <li className="btn btn-ghost normal-case text-xl"><Link to='/home/products'><a>Products</a></Link></li>
        <li className="btn btn-ghost normal-case text-xl"><Link to="/testing"><a>Testing</a></Link></li>
      </ul>
      </div>
    </div>

  </div>
  
          <div className="flex-none gap-2"> 
        <div className="form-control">

            <SearchBar className='flex justify-end' pagin={props.pagin}/>
          
        {/* <form onSubmit={(e) => handleSubmit(e)}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            className="input input-bordered h-8 ">
          </input>
          <NavLink to={`/products/detail/${name}`}>
            <button name='name' type='submit' className=' ml-5 ' >
              {' '}
              Search {' '}
            </button>
          </NavLink>
        </form> */}
        </div>
        </div>

        
        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-4 mr-4">
        <div className="w-10 rounded-full border-trasparent hover:border">
          <BsPersonFill className='justify-center w-full mt-2 text-xl'/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li className="justify-between"> <Link to='/login-form'> <a>Login <span className="badge">New</span> </a></Link></li>
        <li className="justify-between"> <Link to='/createProduct'> <a>Shopping Cart</a></Link></li>
      </ul>
    </div>
    </div>

    
  )
}
 