import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProductsDetail } from "../../Redux/actions";
import { Carousel } from 'antd';
import NavBar from "../../Components/NavBar/NavBar";
// import { useHistory } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const contentStyle = {
    // height: '160px',
    color: '#fff',
    // lineHeight: '160px',
    // textAlign: 'center',
    // background: '#364d79',
};



export default function Details(props){
    console.log(props)
    const dispatch = useDispatch()
    const defaultImage = 'https://thebrandinquirer.files.wordpress.com/2022/04/cover-adidas-new-logo-removes-name-before-after.png?w=1200';
    // const history = useHistory()

    useEffect(()=>{
        dispatch(getProductsDetail(props.match.params.id))
    },[dispatch])

const myProduct = useSelector((state)=> state.productsDetail)
//console.log(myProduct)

    // const handleGoBack = () => {
    //     history.goBack();
    // };
    
    /****************************Modo nocturno y claro */
const [theme, setTheme] = useState("light")

useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark');
    }
    else {setTheme('light')
}
},[])

useEffect(() => {
    if (theme === "dark"){
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
},[theme])

const handleTHemeSwitch = () =>{
    setTheme(theme === "dark" ? "light" : "dark")
}
/****************************Modo nocturno y claro */
    
    return (
        <div className="bg-slate-200 dark:bg-zinc-800">
        <div class="fixed top-0 z-50 w-full">
        <NavBar />
        <button className="absolute bottom-[25px] left-[8rem] w-36 ml-4 mb-2" >
            <label className="swap swap-rotate">
              <input type="checkbox" onClick={handleTHemeSwitch}/>
                <svg className="swap-on fill-current w-6 h-6 fill-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                <svg className="swap-off fill-current w-6 h-6 fill-slate-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            </label>
    
        </button>
        </div>
<br />
<br />
<br />
        <div className="flex flex-col mx-8 ">
        <h1 className="font-roboto text-3xl font-light mt-[1rem] mb-6 dark:text-slate-300">
20% DE DESCUENTO EN COMPRAS DE $100 O MÁS | 25% DE DESCUENTO EN COMPRAS DE $150 O MÁS</h1>
        {/* <a className="text-xs mb-6 underline font-bold cursor-pointer">REGISTRATE AQUI</a> */}
        </div>
        <div className=" flex flex-row h-screen mx-8">
            <div className=" w-2/3">
                {myProduct && myProduct.images && myProduct.images.length > 0 ?
    <div className="flex w-auto space-x-4">
        <img className="w-1/2" src={myProduct.images[1]} alt="Imagen no disponible" />
        <img className="w-1/2" src={myProduct.images[2]} alt="Imagen no disponible" />
    </div>
    :
    <img src={defaultImage} alt="Imagen no disponible" />
}
                
                
                    <Carousel autoplay className="mx-auto flex content-center mt-4 space-x-4 max-w-[40rem]">
                        {
                            myProduct && myProduct.images && myProduct.images.slice(3, 6).map((image, index) => (
                                <div key={index} className="content-center">
                                    <h3 className="content-center" style={contentStyle}>
                                        <img
                                            className="w-full"
                                            src={image}
                                            alt="Imagen no disponible"
                                            onError={(e) => { e.target.src = 'https://thebrandinquirer.files.wordpress.com/2022/04/cover-adidas-new-logo-removes-name-before-after.png?w=1200'; }}
                                        />
                                    </h3>
                                </div>
                            ))
                        }
                    </Carousel>
            </div>
        
            <div className=" fixed  mt-[-1rem] right-0 w-1/3">
            {/* <div className=" mt-[-1rem] right-0 w-1/3"> */}
            {
                    
                    myProduct ?
                        <div class="ml-8 dark:text-slate-300">
                                <h3 className="font-roboto text-3xl font-light text-left">{myProduct.description}</h3>
                                <h2 className="font-roboto text-4xl font-bold text-left">{myProduct.name}</h2>
                                <h4 className="font-roboto font-thin text-xl text-left">{myProduct.category}</h4>
                                <h4 className="font-roboto text-4xl font-bold text-left" >${myProduct.sellingPrice}</h4>
                                <h4 className="font-roboto text-xl text-left">{myProduct.average_rating}</h4>
                        </div> : <p>Loading ...</p>
                    } 
            <div class="mx-8 dark:text-slate-300">
                <h1 className="font-roboto text-3xl font-normal text-left" >Envíos y devoluciones gratis</h1>
                <p className="font-roboto text-l font-light text-left" >Envío gratuito estándar y devoluciones gratuitas durante 60 días para los usuarios registrados. Más información. Se aplican exclusiones en la política de devoluciones.</p>
                <Link to="/account">
                    <div className="text-xs mb-6 underline font-bold cursor-pointer text-purple-800 dark:text-purple-400">Registrate aqui!</div></Link>
            </div>
            <div className="flex justify-around mt-6 ml-8 mr-8">
                <button class="transition  duration-150  font-roboto font-thin dark:text-slate-300 hover:bg-slate-700
                hover:text-slate-200 dark:bg-transparent dark:hover:bg-white  dark:hover:text-black py-2 px-10 border border-slate-700 dark:border-slate-200 rounded hover:border-transparent rounded hover:font-bold">
                S
                </button>
                <button class="transition duration-150  font-roboto font-thin dark:text-slate-300 hover:bg-slate-700
                hover:text-slate-200 dark:bg-transparent dark:hover:bg-white  dark:hover:text-black py-2 px-10 border border-slate-700 dark:border-slate-200 rounded hover:border-transparent rounded hover:font-bold">
                M
                </button>
                <button class="transition duration-150  font-roboto font-thin dark:text-slate-300 hover:bg-slate-700
                hover:text-slate-200 dark:bg-transparent dark:hover:bg-white  dark:hover:text-black py-2 px-10 border border-slate-700 dark:border-slate-200 rounded hover:border-transparent rounded hover:font-bold">
                X
                </button>
                <button class="transition duration-150  font-roboto font-thin dark:text-slate-300 hover:bg-slate-700
                hover:text-slate-200 dark:bg-transparent dark:hover:bg-white  dark:hover:text-black py-2 px-10 border border-slate-700 dark:border-slate-200 rounded hover:border-transparent rounded hover:font-bold">
                XL
                </button>
            </div>
            <div className="flex justify-around mt-6 ml-8 mr-8">
                <button class="transition duration-150  font-roboto font-bold text-black bg-white hover:bg-black  hover:text-white py-2 px-14 border border-slate-700 rounded hover:border-white rounded hover:font-bold">
                AÑADIR AL CARRITO
                </button>
            </div>
            {/* <button onClick={handleGoBack}>Volver</button> */}
            </div>
        </div>
        <div className="mt-[30rem]">
            <Footer/>
        </div>
        </div>      
    )
}