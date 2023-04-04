import { useDispatch} from "react-redux";
import { getProducts } from "../../Redux/actions";
import { filterByPriceAllProducts } from "../../Redux/actions";


const FilterAllProducts=(props)=>{

    const dispatch= useDispatch();

    const handlePrice = (e) => {
      props.pagin(1);
      dispatch(filterByPriceAllProducts(e.target.value));
    };
  
    const handleReset= (e)=>{
      props.pagin(1);
      dispatch(getProducts());
      
    };
  
      
    return (
      <div className="flex flex-col">
        <div className="flex mx-auto font-roboto animate-pulse space-x-8 ">
          <br />
          <nav>   
            <select onChange={(e) => handlePrice(e)} className="select select-bordered select-sm w-full max-w-xs rounded text-current dark:text-slate-300 dark:bg-zinc-700 hover:border-purple-600">
              <option  value="select">Select Price</option>
              <option  value="lower price" className="ml-2 font-medium text-base text-purple-400">Up to $ 20</option>
              <option  value="half price" className="ml-2 font-medium text-base text-purple-400">$ 20 to 60</option>
              <option  value="medium high price" className="ml-2 font-medium text-base text-purple-400">$ 60 to 100</option>
              <option  value="higher price" className="ml-2 font-medium text-base text-purple-400">$ 100 & above</option>
            </select>
          </nav>
        </div>    
        <div>
          <button className="font-roboto btn normal-case py-2 w-[17rem] ml-2 mt-4 rounded border-slate-700 text-slate-100 dark:text-slate-300  dark:bg-purple-800 hover:border-purple-200  bg-purple-700  bg-purple-700 hover:bg-purple-900  dark:hover:bg-purple-900 mx-auto hover:animate-pulse" type="submit" onClick={(e) => handleReset(e)}>All</button>
        </div>
  
      </div>
    );
      
  };
  
  export default FilterAllProducts;