import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch , BsFillCartFill , BsPersonFill} from "react-icons/bs";
import SearchBar from "../SearchBar/SearchBar"
// import style from './NavBar.module.css'

export default function NavBar(props){
   

    
   
  return(
    <div className= "bg-orange">
      <h1 className='style.tittle'> Haal </h1>
      <div className='style.category'>
        <ul>
          <li>
            <Link to='/productos'> <h3>Hombre</h3> </Link>
            </li>
          <li>
            <Link to='/productos'> <h3>Mujer</h3> </Link>
          </li>
          <li>
            <Link to='/productos'> <h3>Niños</h3> </Link>
          </li>
          <li>
            <Link to='/productos'><h3>Productos</h3> </Link>
          </li>
        </ul>
      </div>
      <div className='style.search'>
        <SearchBar pagin={props.pagin}/>
      </div>
      <div className='style.login'>
        <ul>
          <li>
            <Link to='/order'> <h3> <BsFillCartFill/></h3></Link>
          </li>
          <li>
            <Link to='/account'> <h3> <BsPersonFill/></h3></Link>
          </li>
        </ul>


      </div>
    </div>
  )
}