import React, { useContext, useState } from "react";
import {Link} from "react-router-dom"
import { ShoppingBagContex } from '../../Contexts/ShoppingBagsContext';

const CardProduct = ({id, name, sellingPrice, images, average_rating, category}) => {

    const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContex)

    const addToCart = () => {
        setShoppingBag((currItems) => {
            const isItemsFound = currItems.find((item) => item.id === id);
            if (isItemsFound) {
                return currItems.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
                });
            } else {
                    return [...currItems, { id, quantity: 1, sellingPrice }];
            }
        });
    }


    const removeItem = (id) => {
        setShoppingBag((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
            });
        };

    const getQuantityById = (id) => {
        return shoppingBag.find((item) => item.id === id)?.quantity || 0;
    };    

    const quantityPerItem = getQuantityById(id);
    

    return (
        <div >
            <Link to ={`/home/products/${id}`} >
                <div className=" transition  m-4 max-w-sm max-h-[32rem] rounded  shadow-lg border-slate-700 border rounded-md text-left font-roboto hover:border-purple-700 hover:border-2 hover:scale-[1.1] ">
                {quantityPerItem > 0 && (
                    <div>{ quantityPerItem}</div>
                )}
                        <div><img className=" min-h-[19rem] h-full " src={images[0]} alt="No se encontro la imagen" onError={(e) => { e.target.src = 'https://thebrandinquirer.files.wordpress.com/2022/04/cover-adidas-new-logo-removes-name-before-after.png?w=1200'; }}/></div>
                        <div className="card-body mb-8">
                            <h2 className="card-title">{name}
                            {/* <div className="badge badge-secondary">NEW</div> */}
                            </h2>
                            <div >
                            <h3 className="inline-block" >${sellingPrice}</h3>
                            {/* <h4>{props.average_rating}</h4> */}
                            <div className="inline-block card-actions justify-end  px-3 py-1">
                                <h4 className="badge font-light">{category}</h4>
                            </div>
                            {quantityPerItem === 0 ? (
                            <button className="badge font-light" onClick={() => addToCart()}>
                                + Add to cart
                            </button>
                            ) : (
                            <button className="badge font-light" onClick={() => addToCart()}>
                                + add more
                            </button>
                            )}

                            {quantityPerItem > 0 && (
                            <button className="badge font-light"onClick={() => removeItem(id)}>
                                - subtract item
                            </button>
                            )}
                            </div>
                        </div>
                    
                </div>
            </Link>
        </div>
    )
}

// "badge font-light"

export default CardProduct;