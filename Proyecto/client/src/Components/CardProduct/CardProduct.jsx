import React, { useContext, useState } from "react";
import {Link} from "react-router-dom"
import { ShoppingBagContex } from '../../Contexts/ShoppingBagsContext';

const CardProduct = (props) => {
    console.log(props);

    const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContex)

    const addToCart = () => {
        setShoppingBag((currItems) => {
            const isItemsFound =  currItems.find((item) => item.id === props.id);
            if(isItemsFound) {
                return currItems.map((item) => {
                    if (item.id === props.id) {
                        return {...item, quantity: item.quantity + 1}
                    }
                    else {
                        return [{...currItems, quantity: 1}]
                    }
                }

            )
            }
        })
    }


    return (
        <div >
            <Link to ={`/home/products/${props.id}`} >
                <div className=" transition  m-4 max-w-sm max-h-[32rem] rounded  shadow-lg border-slate-700 border rounded-md text-left font-roboto hover:border-purple-700 hover:border-2 hover:scale-[1.1] ">
                    
                        <div><img className=" min-h-[19rem] h-full " src={props.images[0]} alt="No se encontro la imagen" onError={(e) => { e.target.src = 'https://thebrandinquirer.files.wordpress.com/2022/04/cover-adidas-new-logo-removes-name-before-after.png?w=1200'; }}/></div>
                        <div className="card-body mb-8">
                            <h2 className="card-title">{props.name}
                            {/* <div className="badge badge-secondary">NEW</div> */}
                            </h2>
                            <div >
                            <h3 className="inline-block" >${props.sellingPrice}</h3>
                            {/* <h4>{props.average_rating}</h4> */}
                            <div className="inline-block card-actions justify-end  px-3 py-1">
                                <h4 className="badge font-light">{props.category}</h4>
                            </div>
                                <button 
                                    className="badge font-light"
                                    onClick={() => props.addToCart(props.id)}
                                    // onClick={() => addToCart}
                                    >
                                    + Add to ShoppingBag
                                </button>
                            </div>
                        </div>
                    
                </div>
            </Link>
        </div>
    )
}

export default CardProduct;