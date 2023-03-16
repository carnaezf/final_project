import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch , BsFillCartFill , BsPersonFill} from "react-icons/bs";
// import style from './NavBar.module.css'

export default function NavBar(){
    const [name, setName] = useState('');

    function handleSubmit(e) {
      e.preventDefault();
      setName('');
    }
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
        <form onSubmit={(e) => handleSubmit(e)}>
            {/* <input type="text" placeholder='¿Estas buscando algo? '/>
            <button type="submit">Buscar <BsSearch/> </button> */}
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='¿Estas buscando algo?'
                type='text'>
              </input>
              <NavLink to={`/products/detail/${name}`}>
                <button name='name' type='submit'>
                  {' '}
                  Buscar <BsSearch/>{' '}
                </button>
              </NavLink>
        </form>
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