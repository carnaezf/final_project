import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from './shoppingBag.module.css'
// import { CartContext } from "../../Context/CartContext";

export const Nav = () => {
    return (
        <nav>
            <ul className={style.navList}>
                <li>
                    ShoppingBags items: <span className={style.cartCount}>0</span>
                </li>
            </ul>
        </nav>
    )







}

