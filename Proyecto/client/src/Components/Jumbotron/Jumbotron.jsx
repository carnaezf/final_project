import Video1 from "./video3.mp4";
import Video2 from "./Jumbotron02.mp4";
import Video3 from "./Jumbotron01.mp4";
import ReactPlayer from "react-player";
// import styles from "./Jumbotron.module.css"
import { Link } from "react-router-dom";
import Imagen from "./banner-horzontal-bk-adidas.jpg"


// const Jumbutrom= ()=>{
//     return (
//         // <div className="flex justify-center">
//         //     <div >
//         //         <ReactPlayer className="w-screen" url= {Video1} playing loop />

//         //     </div>
//         //     <div >
//         //         <ReactPlayer className="w-96" url= {Video2} playing loop />
//         //     </div>
            
//         // </div>
//     // <div className="bg-gray-800 py-32">
//     //     <h1 className="text-white text-5xl font-bold text-center">Bienvenido a mi sitio web</h1>
//     //     <p className="mt-4 text-gray-400 text-lg text-center">Aquí encontrarás todo lo que necesitas saber sobre mi trabajo.</p>
//     //     <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Más información</button>
//     // </div>

//     // <div>
//     //     <div className="bg-gray-800 py-32 relative">
//     //         <ReactPlayer className="absolute top-0 left-0 w-full" url={Video1} playing loop />
//     //         <h1 className="text-white text-5xl font-bold text-center">
//     //         Bienvenido a mi sitio web
//     //         </h1>
//     //         <p className="mt-4 text-gray-400 text-lg text-center">
//     //         Aquí encontrarás todo lo que necesitas saber sobre mi trabajo.
//     //         </p>
//     //         <button className="absolute bottom-0 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-8 mx-auto left-0 right-0">
//     //         Más información
//     //         </button>
//     //     </div>
//     // </div>
//             <div className="bg-slate-500  justify-start">
            
//             <div  className=" flex space-x-4 ">
//                 <div className='relative'>
                    
//                             {/* <ReactPlayer className="bg-cover" url={Video1} playing loop muted/> */}
                            
//                             <img className="w-screen max-h-[30rem] brightness-50" src={Imagen} alt="Imagen no disponible"/>
//                             <div className="absolute ml-[2rem]">
//                                 <Link  to ={"/shoes"}>
//                                 <h1 className='w-[34rem] text-left absolute font-bold font-roboto text-white text-4xl bottom-[12rem] left-[12rem]'>Don't miss out on our amazing deal! Get a whopping 35% off on all sneakers right now! </h1>
//                                     <button className="transition font-roboto font-regular text-white w-[15rem] px-4 py-2 duration-100 absolute bottom-[6rem] left-[12rem] rounded bg-purple-700 text-lg border border-white hover:border-purple-600 hover:bg-purple-900 focus:bg-purple-100 focus:text-purple-900" >Take me to accessories</button>
//                                 </Link>
//                             </div>
//                 </div>
                
//             </div>
//         </div>
//     )
// };
const Jumbutrom= ()=>{
    return (
        <div className="flex justify-center">
            <div >
                <ReactPlayer className="w-screen" url= {Video3} playing loop />

            </div>
            <div >
                <ReactPlayer className="w-96" url= {Video2} playing loop />
            </div>
            
         
    
           
        </div>
    )
};

export default Jumbutrom;