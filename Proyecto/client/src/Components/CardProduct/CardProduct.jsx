import React from "react";
import {Link} from "react-router-dom"

const CardProduct = (props) => {
    return (
        <div>
            <Link to ={`/home/products/detail/${props.sku}`} >
            <div className="containerCard">
                <div>
                    <img className="img" src={props.images} alt="no se encontro la imagen"/>
                </div>
                <h2>{props.name}</h2>
                <h3>{props.selling_price}</h3>
                <h4>{props.average_rating}</h4>
            </div>
         </Link>
        </div>
    )
}

export default CardProduct;