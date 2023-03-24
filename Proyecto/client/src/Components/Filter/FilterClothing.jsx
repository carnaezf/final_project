import { useDispatch} from "react-redux";
import { filterByGenres } from "../../Redux/actions";
import { getCategory } from "../../Redux/actions";
import { filterByPrice } from "../../Redux/actions";

const FilterClothing = (props) => {

  const dispatch = useDispatch();

  const handleAccessories = (e) => {
    props.pagin(1);
    dispatch(filterByGenres(e.target.value));
  };

  const handlePrice = (e) => {
    props.pagin(1);
    dispatch(filterByPrice(e.target.value));
  };

  const handleReset= (e)=>{
    props.pagin(1);
    dispatch(getCategory("clothing")); //le paso el valor de mi estado de busqueda
    
  };

  return (
    <div>
      <nav>   
        <select onChange={(e) => handleAccessories(e)}>
          <option value="select">Select Generes</option>
          <option value="men/clothing">Men</option>
          <option value="women/clothing">Women</option>
          <option value="kids/clothing">Kids</option>
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
        <button type="submit" onClick={(e) => handleReset(e)}>All Clothing</button>
       </div>
    </div>
  );
};

export default FilterClothing;