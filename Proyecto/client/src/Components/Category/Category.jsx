

//accessories  clothing   shoes    ml-2 mt-4 flex space-x-4 w-full    w-full

import { Carousel, Divider } from 'antd';
import Accessories from "./AccessoriesHome.jpg";
import Clothing from "./ClothingHome.jpg";
import Shoes from "./ShoesHome.jpg";

const Category=()=>{
    return(
        <div className="bg-red-500  justify-start">
            
            <Carousel autoplay className="ml-2 mt-4 flex space-x-4">
                <div >
                    <h3 > ACCESSORIES
                        <img className="h-80 w-90" src={Accessories} alt="Imagen no disponible"/>
                    </h3>
                </div>
                 <div >
                    <h3 > CLOTHING
                        <img className="h-80 w-90"  src={Clothing} alt="Imagen no disponible" />
                    </h3>
                </div>
                <div >
                    <h3 > SHOES
                        <img className="h-80 w-90" src={Shoes} alt="Imagen no disponible"/>
                    </h3>
                </div>
                
            </Carousel>
        </div>
    )
}
export default Category;

