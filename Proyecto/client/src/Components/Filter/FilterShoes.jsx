import { useDispatch  } from "react-redux";
import { filterByGenres } from "../../Redux/actions";
import { filterByPrice } from "../../Redux/actions";
import { getCategory } from "../../Redux/actions";


const FilterShoes=(props)=>{

  const dispatch= useDispatch();

  const handlerShoes=(e)=>{
    props.pagin(1);
    dispatch(filterByGenres(e.target.value))
        
  };

  const handlePrice = (e) => {
    props.pagin(1);
    dispatch(filterByPrice(e.target.value));
  };

  const handleReset= (e)=>{
    props.pagin(1);
    dispatch(getCategory("shoes"));
    
  };

    
  return (
    <div>
      <nav>   
        <select onChange={(e) => handlerShoes(e)}>
          <option value="select">Select Generes</option>
          <option value="men/shoes">Men</option>
          <option value="women/shoes">Women</option>
          <option value="kids/shoes">Kids</option>
          <option value="five ten/shoes">Ten</option>
          <option value="soccer/shoes">Soccer</option>
          <option value="essentials/shoes">Essentials</option>
          <option value="originals/shoes">Originals</option>
              
        </select>
      </nav>
      <br />
    
      <nav>   
        <select onChange={(e) => handlePrice(e)}>
          <option  value="select">Select Price</option>
          <option  value="lower price">Entre $ 0 - 20</option>
          <option  value="half price">Entre $ 20 - 60</option>
          <option  value="higher price">Mayor a $ 60</option>
        </select>
      </nav>
      <br />
    
      <div>
        <button type="submit" onClick={(e) => handleReset(e)}>All Shoes</button>
      </div>

    </div>
  );
    
};

export default FilterShoes;