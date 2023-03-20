import { useState } from "react";
import { useDispatch } from "react-redux";
import {filterByName} from "../../Redux/actions"
import {getProducts} from "../../Redux/actions"


const SearchBar= (props)=>{
    const [search,setSearch]= useState(""); //donde voy llenado el ESTADO BUSQUEDA
    const dispatch= useDispatch();

    const setearBusqueda= (e) => { //cargo todas las letras(palabras) de la busqueda
        setSearch(e.target.value);
    }
    const handleFilterName= (e)=>{
        //e.preventDefault()
        props.pagin(1);
        dispatch(filterByName(search)); //le paso el valor de mi estado de busqueda
        setSearch (""); //vacio mi estado de busqueda para una nueva busqueda

        
    };
    const handleReset= (e)=>{
        //e.preventDefault()
        props.pagin(1);
        dispatch(getProducts()); //le paso el valor de mi estado de busqueda
        setSearch (""); //vacio mi estado de busqueda para una nueva busqueda

        
    };
    
    

    return(
        <div className="flex flex-row">
            <input type= "text" placeholder="Search" className=" transition input input-bordered focus:bg-purple-900 focus:border-white focus text-white" value={search} onChange={(e) => setearBusqueda(e)} />
            <button class="ml-4 transition duration-150 px-16 font-roboto font-bold text-black text-white bg-transparent hover:bg-black  hover:text-white py-2 px-4 border rounded hover:border-purple-700 rounded hover:font-bold" type="submit" onClick={(e) => handleFilterName(e)}>Buscar</button>
           
            
                <button class="ml-4 transition duration-150 px-16 font-roboto font-bold text-black text-white bg-transparent hover:bg-black  hover:text-white py-2 px-4 border rounded hover:border-purple-700 rounded hover:font-bold" type="submit" onClick={(e) => handleReset(e)}>Ver Todo</button>
            
        </div>
    )
};

export default SearchBar;