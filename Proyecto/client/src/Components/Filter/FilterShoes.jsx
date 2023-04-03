import { useDispatch  } from "react-redux";
import { filterByGenres } from "../../Redux/actions";
import { filterByPrice } from "../../Redux/actions";
import { filterBySize } from "../../Redux/actions";
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
  // const handleSize= (e) => {
  //   props.pagin(1);
  //   dispatch(filterBySize(e.target.value));
  // };

  const handleReset= (e)=>{
    props.pagin(1);
    dispatch(getCategory("shoes"));
    
  };

    
  return (
    <div className="flex flex-col">
      <div className="flex mx-auto font-roboto">
        <nav className="mx-2">   
          <select onChange={(e) => handlerShoes(e)} className="select select-bordered select-sm w-full max-w-xs rounded text-current dark:text-slate-300 dark:bg-zinc-700 hover:border-purple-600">
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
          <select onChange={(e) => handlePrice(e)} className="select select-bordered select-sm w-full max-w-xs rounded text-current dark:text-slate-300 dark:bg-zinc-700 hover:border-purple-600">
            <option  value="select">Select Price</option>
            <option  value="lower price">Up to $ 20</option>
            <option  value="half price">$ 20 to 60</option>
            <option  value="higher price">$ 60 & above</option>
          </select>
        </nav>
        {/* <nav>   
          <select onChange={(e) => handleSize(e)} className="select select-bordered select-sm w-full max-w-xs rounded text-current dark:text-slate-300 dark:bg-zinc-700 hover:border-purple-600">
            <option  value="select">Select Shoe Width</option>
            <option  value="small">S</option>
            <option  value="medium">M</option>
            <option  value="large">L</option>
          </select>
        </nav> */}
      </div>    
      <div>
        <button className="font-roboto btn normal-case py-2 w-[17rem] ml-2 mt-4 rounded border-slate-700 text-slate-100 dark:text-slate-300  dark:bg-purple-800 hover:border-purple-200  bg-purple-700  bg-purple-700 hover:bg-purple-900  dark:hover:bg-purple-900 mx-auto" type="submit" onClick={(e) => handleReset(e)}>All Shoes</button>
      </div>

    </div>
  );
    
};

export default FilterShoes;