import React  from React;
import { Link } from 'react-router-dom';

export default function navBar(){
    return(
        <div className={style.navBar}>
        <div className={style.menu}>
        <ul>
          <li>
            <Link to='/home/products'> <h3>Hombre</h3> </Link>
          </li>
          <li>
            <Link to='/home/products'> <h3>Mujer</h3> </Link>
          </li>
          <li>
            <Link to='/home/products'> <h3>Niños</h3> </Link>
          </li>
          <li>
            <Link to='/home/products'>	<h3>Productos</h3> </Link>
          </li>
        </ul>
      </div>
    </div>
    )
} 