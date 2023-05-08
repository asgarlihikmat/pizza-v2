import { useDispatch, useSelector } from "react-redux";
import search from "../../assets/icons/search.png";
import { useRef } from "react";
import { setFilter } from "../../redux/slices/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const onHandleChange = (event) => {
    const { value } = inputRef.current;
    dispatch(setFilter(value));
  };


  return (
    <div className="pizza__body__second">
      <div className="pizza__search">
      
      <img className="pizza__search__image" src={search} />
        <input
          ref={inputRef}
          onChange={() => onHandleChange()}
          className="pizza__input"
          placeholder="Поиск..."
        /> 
        
      </div>
      
    </div>
  );
};

export default Search;
