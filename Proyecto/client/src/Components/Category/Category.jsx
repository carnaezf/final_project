

//accessories  clothing   shoes    ml-2 mt-4 flex space-x-4 w-full    w-full

import { Carousel} from 'antd';
import { Link } from 'react-router-dom';
import Accessories from "./accesories.jpg";
import Clothing from "./clothing.jpg";
import Shoes from "./shoes.jpg";
import Accessories2 from "./accesories 2.jpg";
import Clothing2 from "./clothing 2.jpg";
import Shoes2 from "./shoes 2.jpg";

const Category=()=>{
    return(
        <div className=" justify-start">
            <div className='hidden md:block md:p-0'>
            <Carousel autoplay className="  hidden md:mt-[rem] md:block md:flex space-x-4">
                <div className='relative'>
                    
                            <img className="w-[full]" src={Accessories} alt="Imagen no disponible"/>
                            <div className="absolute bottom-[15rem] left-24 h-[20rem] w-[45rem] bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 ">
                                <h1 className='w-[25rem] text-left absolute font-bold font-roboto text-white text-4xl bottom-[12rem] left-10'>Elevate Your Style with Adidas Accessories</h1>
                                <p className='w-[40rem] text-left absolute font-roboto text-white text-xl bottom-[6rem] left-10'>Shop our collection of Adidas accessories and take your style to the next level. From backpacks to hats, and everything in between, we have the perfect accessory to complete your look.</p>
                                <Link  to ={"/accessories"}>
                                    <button className="transition font-roboto font-regular text-white px-4 py-2 duration-100 absolute bottom-[2rem] left-10 rounded bg-purple-700 text-lg border border-white hover:border-purple-600 hover:bg-purple-900 focus:bg-purple-100 focus:text-purple-900" >Take me to accessories</button>
                                </Link>
                            </div>
                    
                </div>

                <div className='relative '>
                            <img className="w-full" src={Clothing} alt="Imagen no disponible"/>
                            <div className="absolute bottom-[15rem] left-24 h-[20rem] w-[45rem] bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 ">
                            <h1 className='w-[25rem] text-left absolute font-bold font-roboto text-white text-4xl bottom-[12rem] left-10'>Upgrade Your Wardrobe with Adidas Clothing</h1>
                            <p className='w-[40rem] text-left absolute font-roboto text-white text-xl bottom-[6rem] left-10'>Discover the latest Adidas clothing collection and elevate your wardrobe. From comfortable activewear to stylish streetwear, we have everything you need to take your style to the next level.</p>
                    <Link  to ={"/clothing"}>
                        <button className="transition font-roboto font-regular text-white px-4 py-2 duration-100 absolute bottom-[2rem] left-10 rounded bg-purple-700 text-lg border border-white hover:border-purple-600 hover:bg-purple-900 focus:bg-purple-100 focus:text-purple-900" >Take me to clothings</button>
                    </Link>
                    </div>
                </div>

                <div className='relative'>
                            <img className="w-full" src={Shoes} alt="Imagen no disponible"/>
                            <div className="absolute bottom-[15rem] left-24 h-[20rem] w-[45rem] bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 ">
                                <h1 className='w-[25rem] text-left absolute font-bold font-roboto text-white text-4xl bottom-[12rem] left-10'>Step Up Your Game with Adidas Shoes</h1>
                                <p className='w-[40rem] text-left absolute font-roboto text-white text-xl bottom-[6rem] left-10'>Shop our latest Adidas shoe collection and take your style to the next level. From high-performance athletic shoes to stylish everyday sneakers, we have the perfect pair for any occasion.</p>
                                <Link  to ={"/shoes"}>
                                <button className="transition font-roboto font-regular text-white px-4 py-2 duration-100 absolute bottom-[2rem] left-10 rounded bg-purple-700 text-lg border border-white hover:border-purple-600 hover:bg-purple-900 focus:bg-purple-100 focus:text-purple-900" >Take me to clothings</button>
                                </Link>
                            </div>
                </div>
            </Carousel>
            </div>
            {/* Carrusel mobile */}
            <div className='md:hidden '>
            <Carousel autoplay className="  flex space-x-4">
                <div className='relative'> 
                <Link  to ={"/accessories"}>
                            <img className="bg-contain" src={Accessories2} alt="Imagen no disponible"/>
                            <div className="absolute bottom-[15rem] left-4 h-[18rem] w-[22.4rem] bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 ">
                                <h1 className='w-[21rem] text-left absolute font-bold font-roboto text-white text-2xl bottom-[12rem] left-4'>Elevate Your Style with Adidas Accessories</h1>
                                <p className='w-[20rem] text-left absolute font-roboto text-white text-xl bottom-[1rem] left-4'>Shop our collection of Adidas accessories and take your style to the next level. From backpacks to hats, and everything, we have the perfect accessory to complete your look.</p>
                            </div>
                </Link>
                </div>
                <div className='relative'> 
                <Link  to ={"/clothing"}>
                            <img className="bg-contain" src={Clothing2} alt="Imagen no disponible"/>
                            <div className="absolute bottom-[15rem] left-4 h-[18rem] w-[22.4rem] bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 ">
                                <h1 className='w-[21rem] text-left absolute font-bold font-roboto text-white text-2xl bottom-[12rem] left-4'>Upgrade Your Wardrobe with Adidas Clothing</h1>
                                <p className='w-[20rem] text-left absolute font-roboto text-white text-xl bottom-[1rem] left-4'>Discover the latest Adidas clothing collection and elevate your wardrobe. From comfortable activewear to stylish streetwear, we have everything you need to take your style to the next level.</p>
                            </div>
                </Link>
                </div>
                <div className='relative'> 
                <Link  to ={"/shoes"}>
                            <img className="bg-contain" src={Shoes2} alt="Imagen no disponible"/>
                            <div className="absolute bottom-[15rem] left-4 h-[18rem] w-[22.4rem] bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 ">
                                <h1 className='w-[21rem] text-left absolute font-bold font-roboto text-white text-2xl bottom-[12rem] left-4'>Step Up Your Best Game with Adidas Shoes</h1>
                                <p className='w-[20rem] text-left absolute font-roboto text-white text-xl bottom-[1rem] left-4'>Shop our latest Adidas shoe collection and take your style to the next level. From high-performance athletic shoes to stylish everyday sneakers, we have the perfect pair for any occasion.</p>
                            </div>
                </Link>
                </div>
            </Carousel>
            </div>
        </div>
    )
}
export default Category;

