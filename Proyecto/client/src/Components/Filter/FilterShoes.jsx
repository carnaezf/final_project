import { useDispatch  } from "react-redux";
import { filterByPrice } from "../../Redux/actions";


const FilterShoes=(props)=>{

    const dispatch= useDispatch();

    const handlerShoes=(e)=>{
        props.pagin(1);
        dispatch(filterByPrice(e.target.value));
        
    };

    
    return(
        <nav >
           <select  onChange={e=>handlerShoes(e)}>
              <option value="select">Select Price</option>
              <option  value="lower price">Entre $ 0 - 50</option>
              <option  value="half price">Entre $ 50 - 100</option>
              <option  value="higher price">Mayor a $ 100</option>
            </select>
        </nav>

    )
    
};

export default FilterShoes;