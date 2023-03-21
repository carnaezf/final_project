import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch, BsFillCartFill, BsPersonFill } from "react-icons/bs";

// import style from './NavBar.module.css'

export default function NavBar() {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setName('');
  }
  return (
    <div className="navbar bg-base-100 navbar bg-neutral text-neutral-content">   
      <div className="flex-1">  
      <h1 className="case text-xl"> Haal </h1>
      <div className="dropdown">

      <ul>
        <li className="btn btn-ghost normal-case text-xl"> <Link to='/home/:category'><a>Acessories</a></Link></li>
        <li className="btn btn-ghost normal-case text-xl"><Link to='/home/:category'><a>Shoes</a></Link></li>
        <li className="btn btn-ghost normal-case text-xl"><Link to='//home/:category'><a>Clothing</a></Link></li>
        <li className="btn btn-ghost normal-case text-xl"><Link to='/home/:category'><a>Products</a></Link></li>
      </ul>
    </div>
    
  </div>
  
          <div className="flex-none gap-2"> 
        <div className="form-control">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            className="input input-bordered">
          </input>
          <NavLink to={`/products/detail/${name}`}>
            <button name='name' type='submit'>
              {' '}
              Search {' '}
            </button>
          </NavLink>
        </form>
        </div>
        </div>

        
        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <BsPersonFill/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li className="justify-between"> <Link to='/home/account'> <a>Login <span className="badge">New</span> </a></Link></li>
        <li className="justify-between"> <Link to='/home/order'> <a>Shopping Cart</a></Link></li>
      </ul>
    </div>
    </div>

    
  )
}
 