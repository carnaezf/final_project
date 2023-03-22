import { useDispatch  } from "react-redux";
import { filterByAccessoriesGenres } from "../../Redux/actions";


const FilterAccessories=(props)=>{

    const dispatch= useDispatch();

    const handleAccessories=(e)=>{
        props.pagin(1);
        dispatch(filterByAccessoriesGenres(e.target.value));
        
    };

    
    return(
        <nav >
           <select  onChange={e=>handleAccessories(e)}>
              <option value="select">Select Generes</option>
              <option  value="training">Training</option>
              <option  value="men">Men</option>
              <option  value="kids">Kids</option>
              <option  value="women">Women</option>
            </select>
        </nav>

    )
    
};

export default FilterAccessories;