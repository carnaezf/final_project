import React from "react";
import {Link} from "react-router-dom"

const CardProduct = (props) => {
    return (
        <div >
            <Link to ={`/products/${props.id}`} >
                <div className=" transition  m-4 w-[18rem] h-[26rem] rounded  shadow-lg border-slate-300 dark:border-slate-700 border rounded-md text-left font-roboto hover:border-purple-700 dark:hover:border-purple-500 hover:border hover:translate-y-[-1rem] contrast-[.92] hover:contrast-[1.20] text-current hover:text-purple-700 dark:text-slate-300 dark:hover:text-purple-400 bg-neutral-100 dark:bg-zinc-900">
                {/* <div className=" transition  m-4 max-w-sm max-h-[32rem] rounded  shadow-lg border-slate-300 border rounded-md text-left font-roboto hover:border-purple-700 hover:border "> */}
                    
                        <div><img className="  h-full " src={props.images[0]} alt="No se encontro la imagen" onError={(e) => { e.target.src = 'https://i.pinimg.com/736x/dd/f3/82/ddf38266f9f3e9a8a0217148fd7a2a28.jpg'; }}/></div>
                        <div className="card-body mb-8">
                            <h2 className="card-title text-[12pt] leading-[20px] ">{props.name}
                            {/* <div className="badge badge-secondary">NEW</div> */}
                            </h2>
                            <div >
                            <h3 className="inline-block text-[10pt]" >${props.sellingPrice}</h3>
                            {/* <h4>{props.average_rating}</h4> */}
                            <div className="inline-block card-actions justify-end  px-3 py-1">
                                <h4 className="badge font-light text-[8pt]">{props.category}</h4>
                            </div>
                            </div>
                        </div>
                    
                </div>
            </Link>
        </div>
    )
}

export default CardProduct;