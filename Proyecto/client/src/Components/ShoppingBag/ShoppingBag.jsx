import style from './shoppingBag.module.css'
import Cookie from 'js-cookie';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addToCart } from '../../Redux/actions/shoppingBag_actions';
import { CreateOrder } from '../../Redux/actions/checkout_actions';
import { deleteOrder } from '../../Redux/actions/order_actions';

// shoppinBags_actions: addToCart, deleteCart, removeFromCart, updateFromCart
// checkout_actions: CreateOrder, UpdateOrderToCreateStatus 
// order_actions: deleteOrder, getOrders
// Consultar por modularización Redux.

const ShoppingBag = () => {

    return (
        <div>
            <div>
                <div className={style.principal}>
                    <div>
                        <div>
                            <></>
                            <ul>
                                <li>
                                    <i>1</i>
                                    <span>Resumen de compra</span>
                                </li>
                                <li>
                                    <i>2</i>
                                    <span>Datos de envio</span>
                                </li>
                                <li>
                                    <i>3</i>
                                    <span>Forma de pago</span>
                                </li>
                            </ul>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ShoppingBag;




