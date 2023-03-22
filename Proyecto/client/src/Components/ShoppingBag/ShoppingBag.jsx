import style from './shoppingBag.module.css'
import { Nav } from './nav';

import Cookie from 'js-cookie';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addToCart } from '../../Redux/actions/shoppingBagsActions/shoppingBag_actions';
import { CreateOrder } from '../../Redux/actions/shoppingBagsActions/checkout_actions';
import { deleteOrder } from '../../Redux/actions/shoppingBagsActions/order_actions';
import CardsProducts from '../CardsProducts/CardsProducts';

// shoppinBags_actions: addToCart, deleteCart, removeFromCart, updateFromCart
// checkout_actions: CreateOrder, UpdateOrderToCreateStatus 
// order_actions: deleteOrder, getOrders
// Consultar por modularización Redux.

const ShoppingBag = () => {

    return (
            <div>
                <Nav />
                <CardsProducts />
            </div>
    )

}

export default ShoppingBag;




