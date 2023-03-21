import React from 'react';
import { Link } from 'react-router-dom';



export default function Testing() {
    return (
        <div>
            <h1>Testing</h1>

            <Link to='/shoppingBag'>
                <button>Shopping Bags</button>
            </Link>
            <br />
            <Link to='/createProduct'>
                <button>CreateProduct Form</button>
            </Link>
            <br />
            <Link to='/login-form'>
                <button>Shopping Bags</button>
            </Link>
        </div>
    )
}