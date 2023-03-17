import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProductsDetail } from "../../Redux/actions";



export default function Details(props){
    console.log(props)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProductsDetail(props.match.params.sku))
    },[dispatch])
     
const myProduct = useSelector((state)=> state.productsDetail)

    
    return (
        <>
        <h1>DETALLE DEL PRODUCTO</h1>
        <div className=" flex flex-row h-screen">
            <div className="bg-emerald-800 w-2/3 ">
                {
                myProduct ?
                    <div>
                        <img src={myProduct.images} alt="Imagen no disponible" />
                        
                            <h4>{myProduct.category}</h4>
                            <h2>{myProduct.name}</h2>
                            <h4>Price: <h5>{myProduct.selling_price}</h5></h4>
                            <h4>{myProduct.average_rating}</h4>
                        
                    </div> : <p>Loading ...</p>
                }
            </div>
        
            <div className="bg-purple-800 w-1/3">
                <h1>Hola</h1>
                <h1>Hola</h1>
                <h1>Hola</h1>
                <h1>Hola</h1>
                <h1>Hola</h1>
                <h1>Hola</h1>
                <h1>Hola</h1>
                <h1>Hola</h1>
                <h1>Hola</h1>
                <h1>Hola</h1>
            </div>
        </div>
        </>      
    )
}