import React from "react";
// import {Link} from "react-router-dom";
import CardProduct from "../CardProduct/CardProduct";
//  import { useHistory } from "react-router-dom"; //Para evitar el problema que me devuelve a la pagina 1 al entrar en un producto


const CardsProducts = (props) => {
    const products = props.newStateProducts;
    // const history = useHistory();

    // const handleClick = () => {
    //     history.push({
    //         pathname: `/products/${props.id}`,
    //         state: {from: history.location.pathname}
    //     })
    // }

 

    return (
        <div  >

        {/* <div className="container mx-auto h-56 flex flex-wrap justify-center gap-4 content justify-self-auto" > */}
        <div className="container mx-auto my-auto  flex flex-wrap justify-center gap-4 content justify-self-auto" >
            {products.map((el)=>{
               // console.log(el);
                return(
                    <CardProduct
                    key={el.id}
                    id={el.id} 
                    name={el.name} 
                    sellingPrice={el.sellingPrice} 
                    images={el.images} 
                    average_rating={el.average_rating}
                    category={el.category}/>
                )
            })}

        </div>
        </div>
        
    )
}
      

// url: "https://www.adidas.com/us/five-ten-kestrel-lace-mountain-bike-shoes/BC0770.html",
//     name: "Five Ten Kestrel Lace Mountain Bike Shoes",
//     sku: "BC0770",
//     selling_price: 150,
//     original_price: "",
//     currency: "USD",
//     availability: "InStock",
//     color: "Grey",
//     category: "Shoes",
//     source: "adidas United States",
//     source_website: "https://www.adidas.com",
//     breadcrumbs: "Women/Shoes",
//     description:
//       "Lace up and get after it. The Five Ten Kestrel Lace Mountain Bike Shoes offer efficient pedal power with low-profile style. The wide platform is compatible with all clipless pedals and offers high-friction grip on and off the bike. You'll find the find comfort and versatility for extended trail rides and afterwork hot laps alike.",
//     brand: "adidas",
//     images:
//       "https://assets.adidas.com/images/w_600,f_auto,q_auto/2b04943c525e4909a7a5a9fa0116153d_9366/Five_Ten_Kestrel_Lace_Mountain_Bike_Shoes_Grey_BC0770_01_standard.jpg",
//     country: "USA",
//     language: "en",
//     average_rating: 4.8,
//     reviews_count: 4,
//     crawled_at: "2021-10-23 17:50:17.423830",
//   },

export default CardsProducts;