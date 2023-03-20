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
        <div>
            <input type= "text" value={search} onChange={(e) => setearBusqueda(e)} />
            <button type="submit" onClick={(e) => handleFilterName(e)}>Buscar</button>
           
            <div>
              <button type="submit" onClick={(e) => handleReset(e)}>Ver Todo</button>
            </div>
        </div>
    )
};

export default SearchBar;