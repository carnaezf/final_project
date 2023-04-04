import React from 'react';
import { Link } from 'react-router-dom';



export default function Testing() {
    return (
        <div>
            {/* <h1>Testing</h1> */}

            <br />
            <Link to='/createProduct'>
                <button>CreateProduct Form</button>
            </Link>
            <br />
           
        </div>
    )
}

