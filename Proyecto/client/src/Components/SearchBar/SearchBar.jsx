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
        <div className="flex flex-row mx-auto">
            <input type= "text" placeholder="Search" className=" px-2 border mt-2 transition h-[2.1rem] rounded-l-[2px] bg-slate-200 dark:bg-slate-800 text-purple-700 dark:text-purple-300 dark:border-slate-500  border-purple-400 hover:border-purple-700 dark:hover:border-purple-400 dark:hover:bg-slate-800 hover:bg-slate-300 " value={search} onChange={(e) => setearBusqueda(e)} />
            <button class=" px-2 rounded-r-[2px] mt-2 h-[2.1rem] transition font-roboto font-normal normal-case text-lg bg-purple-400 dark:bg-slate-800 border border-purple-400 dark:border-slate-500  hover:bg-purple-800 dark:hover:bg-purple-500   hover:border-transparent text-current hover:text-purple-200 dark:text-slate-300 dark:hover:text-purple-100" type="submit" onClick={(e) => handleFilterName(e)}>Search</button> 
            <button class="ml-2 mt-2 h-[2.1rem] transition font-roboto font-normal normal-case text-sm border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-300 dark:hover:text-purple-400" type="submit" onClick={(e) => handleReset(e)}>Ver Todo</button>
            
        </div>
    )
};

export default SearchBar;
