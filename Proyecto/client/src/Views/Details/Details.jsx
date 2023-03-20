import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProductsDetail } from "../../Redux/actions";
import { Carousel } from 'antd';
import NavBar from "../../Components/NavBar/NavBar";

const contentStyle = {
    // height: '160px',
    // color: '#fff',
    // lineHeight: '160px',
    // textAlign: 'center',
    // background: '#364d79',
};



export default function Details(props){
    console.log(props)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProductsDetail(props.match.params.id))
    },[dispatch])

const myProduct = useSelector((state)=> state.productsDetail)
console.log(myProduct)

    
    return (
        <>
        <div>
        <NavBar />
        </div>
        <div className="flex flex-col">
        <h1 className="font-roboto text-3xl font-light mt-6 mb-6">
20% DE DESCUENTO EN COMPRAS DE $100 O MÁS | 25% DE DESCUENTO EN COMPRAS DE $150 O MÁS</h1>
        {/* <a className="text-xs mb-6 underline font-bold cursor-pointer">REGISTRATE AQUI</a> */}
        </div>
        <div className=" flex flex-row h-screen">
            <div className=" w-2/3">
                {
                    
                myProduct ?
                    <div className=" flex w-auto space-x-4"  >
                        <img className="w-1/2 " src={myProduct.images[1]} alt="Imagen no disponible" onError={(e) => { e.target.src = 'https://thebrandinquirer.files.wordpress.com/2022/04/cover-adidas-new-logo-removes-name-before-after.png?w=1200'; }}/>
                        <img className="m w-1/2" src={myProduct.images[2]} alt="Imagen no disponible" onError={(e) => { e.target.src = 'https://thebrandinquirer.files.wordpress.com/2022/04/cover-adidas-new-logo-removes-name-before-after.png?w=1200'; }} />
                        

                    </div> : <p>Loading ...</p>
                } 
                
                {/* <img className=" ml-2 mt-4 flex space-x-4 w-full " src={myProduct.images} alt="Imagen no disponible" /> */}
                <Carousel autoplay className=" ml-2 mt-4 flex space-x-4 w-full">
                    <div  >
                        <h3  style={contentStyle}><img className="w-full" src={myProduct.images[3]} alt="Imagen no disponible" onError={(e) => { e.target.src = 'https://thebrandinquirer.files.wordpress.com/2022/04/cover-adidas-new-logo-removes-name-before-after.png?w=1200'; }} /></h3>
                    </div>
                    <div  >
                        <h3  style={contentStyle}><img className="w-full"  src={myProduct.images[4]} alt="Imagen no disponible" onError={(e) => { e.target.src = 'https://thebrandinquirer.files.wordpress.com/2022/04/cover-adidas-new-logo-removes-name-before-after.png?w=1200'; }} /></h3>
                    </div>
                    <div  >
                    <h3  style={contentStyle}><img className="w-full" src={myProduct.images} alt="Imagen no disponible" /></h3>
                    </div>
                    <div  >
                    <h3  style={contentStyle}><img className="w-full" src={myProduct.images} alt="Imagen no disponible" /></h3>
                    </div>
                </Carousel>
            </div>
        
            <div className=" fixed  top-46 right-0 w-1/3">
            {
                    
                    myProduct ?
                        <div class="ml-8">
                                <h3 className="font-roboto text-3xl font-light text-left">{myProduct.description}</h3>
                                <h2 className="font-roboto text-4xl font-bold text-left">{myProduct.name}</h2>
                                <h4 className="font-roboto font-thin text-xl text-left">{myProduct.category}</h4>
                                <h4 className="font-roboto text-4xl font-bold text-left" >${myProduct.sellingPrice}</h4>
                                <h4 className="font-roboto text-xl text-left">{myProduct.average_rating}</h4>
                        </div> : <p>Loading ...</p>
                    } 
            <div class="ml-8">
                <h1 className="font-roboto text-3xl font-normal text-left" >Envíos y devoluciones gratis</h1>
                <p className="font-roboto text-l font-light text-left" >Envío gratuito estándar y devoluciones gratuitas durante 60 días para los usuarios registrados. Más información. Se aplican exclusiones en la política de devoluciones.</p>
                <Link to="/account">
                    <a className="text-xs mb-6 underline font-bold cursor-pointer">Registrate aqui!</a></Link>
            </div>
            <div className="flex justify-around mt-6 ml-8 mr-8">
                <button class="transition duration-150 px-12 font-roboto font-thin text-white bg-transparent hover:bg-white  hover:text-black py-2 px-4 border rounded hover:border-transparent rounded hover:font-bold">
                S
                </button>
                <button class="transition duration-150 px-12 font-roboto font-thin text-white bg-transparent hover:bg-white  hover:text-black py-2 px-4 border rounded hover:border-transparent rounded hover:font-bold">
                M
                </button>
                <button class="transition duration-150 px-12 font-roboto font-thin text-white bg-transparent hover:bg-white  hover:text-black py-2 px-4 border rounded hover:border-transparent rounded hover:font-bold">
                X
                </button>
                <button class="transition duration-150 px-12 font-roboto font-thin text-white bg-transparent hover:bg-white  hover:text-black py-2 px-4 border rounded hover:border-transparent rounded hover:font-bold">
                XL
                </button>
            </div>
            <div className="flex justify-around mt-6 ml-8 mr-8">
                <button class="transition duration-150 px-16 font-roboto font-bold text-black bg-white hover:bg-black  hover:text-white py-2 px-4 border rounded hover:border-white rounded hover:font-bold">
                AÑADIR AL CARRITO
                </button>
            </div>
            </div>
        </div>
        </>      
    )
}