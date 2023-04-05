
import { useDispatch} from "react-redux";
import { filterByGenres } from "../../Redux/actions";
import { getCategory } from "../../Redux/actions";
import { filterByPrice } from "../../Redux/actions";

const FilterAccessories = (props) => {

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
    dispatch(getCategory("accessories")); //le paso el valor de mi estado de busqueda
    
  };

  return (

    <div className="flex flex-col ">
      <div className="flex mx-auto font-roboto animate-pulse space-x-8 ">
        <nav className="mx-2 ">
          <select onChange={(e) => handleAccessories(e)}className="select select-bordered select-sm w-full max-w-xs rounded text-current dark:text-slate-300 dark:bg-zinc-700 hover:border-purple-600">  
            <option value="select" >Select Generes</option>
            <option value="training/accessories" className="ml-2 font-medium text-base text-purple-400">Training</option>
            <option value="men/accessories" className="ml-2 font-medium text-base text-purple-400">Men</option>
            <option value="women/accessories" className="ml-2 font-medium text-base text-purple-400">Women</option>
          </select>
        </nav>
        <br />

        <nav className="mx-2">   
          <select onChange={(e) => handlePrice(e)} className="select select-bordered select-sm w-full max-w-xs rounded text-current dark:text-slate-300 dark:bg-zinc-700 hover:border-purple-600">
            <option  value="select" >Select Price</option>
            <option  value="lower price" className="ml-2 font-medium text-base text-purple-400">Entre $ 0 - 20</option>
            <option  value="half price" className="ml-2 font-medium text-base text-purple-400">Entre $ 20 - 60</option>
            <option  value="higher price" className="ml-2 font-medium text-base text-purple-400">Mayor a $ 60</option>
          </select>
        </nav>
        <br />
      </div>
      <div>
        <button className="font-roboto btn normal-case py-2 w-[17.2rem] mt-4 rounded border-slate-700 text-slate-100 dark:text-slate-300  dark:bg-purple-800 hover:border-purple-200  bg-purple-700  bg-purple-700 hover:bg-purple-900  dark:hover:bg-purple-900 hover:animate-pulse" type="submit" onClick={(e) => handleReset(e)}>All Accessories</button>

       </div>
    </div>
  );
};

export default FilterAccessories;
