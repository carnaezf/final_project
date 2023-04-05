import React, { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';


const ErrorCreateProductOrder =()=>{
    


    
return (
    <div>

<h1>Su orden tuvo errores de pago/creacion</h1>
<Link to="/home">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-5">HOME</button>
</Link>
    </div>
)



}


export default ErrorCreateProductOrder;