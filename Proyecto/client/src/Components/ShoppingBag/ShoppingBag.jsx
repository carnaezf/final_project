import style from './shoppingBag.module.css'
import React from 'react';
import NavBar from '../NavBar/NavBar';
import CardsProducts from '../CardsProducts/CardsProducts';
import CardProduct from '../CardProduct/CardProduct'



import Cookie from 'js-cookie';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addToCart } from '../../Redux/actions/shoppingBagsActions/shoppingBag_actions';
import { CreateOrder } from '../../Redux/actions/shoppingBagsActions/checkout_actions';
import { deleteOrder } from '../../Redux/actions/shoppingBagsActions/order_actions';



// shoppinBags_actions: addToCart, deleteCart, removeFromCart, updateFromCart
// checkout_actions: CreateOrder, UpdateOrderToCreateStatus 
// order_actions: deleteOrder, getOrders
// Consultar por modularización Redux.

const ShoppingBag = () => {

    return (
            <div>
                <NavBar />
            </div>
    )

}

export default ShoppingBag;




