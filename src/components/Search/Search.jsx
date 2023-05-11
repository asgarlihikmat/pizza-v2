import { useDispatch, useSelector } from "react-redux";
import search from "../../assets/icons/search.png";
import { useRef } from "react";
import { setFilter } from "../../redux/slices/filterSlice";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const inputRef = useRef();

  const onHandleChange = (event) => {
    const { value } = inputRef.current;
    dispatch(setFilter(value));

  };

  console.log('search');
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
      <button onClick={ () => navigate('/admin')} className="pizza__search__button">Admin</button>
      
    </div>
  );
};

export default Search;
