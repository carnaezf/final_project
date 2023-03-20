import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch, BsFillCartFill, BsPersonFill } from "react-icons/bs";
<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Raleway:wght@100&display=swap');
</style>
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
        <li className="btn btn-ghost normal-case text-xl"> <Link to='/home/accesories'><a>Acessories</a></Link></li>
        <li className="btn btn-ghost normal-case text-xl"><Link to='/home/shoes'><a>Shoes</a></Link></li>
        <li className="btn btn-ghost normal-case text-xl"><Link to='/home/clothing'><a>Clothing</a></Link></li>
        <li className="btn btn-ghost normal-case text-xl"><Link to='/home/products'><a>Products</a></Link></li>
      </ul>
    </div>
    
  </div>
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
  <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
          </div>
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
 