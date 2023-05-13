import { useDispatch, useSelector } from "react-redux";
import search from "../../assets/icons/search.png";
import { useRef } from "react";
import { setSearch } from "../../redux/slices/searchSlice"; 
import { Link, useNavigate } from "react-router-dom";
import React from 'react'

const Search = React.memo(() => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const inputRef = useRef();

  const onHandleChange = (event) => {
    const { value } = inputRef.current;
    dispatch(setSearch(value));
  }
  // const onHandleChange = React.useCallback((event) => {
  //     const { value } = inputRef.current;
  //     dispatch(setSearch(value));
  //   },[])

  return (
    <div className="pizza__body__second">
      <div className="pizza__search">
      
      <img className="pizza__search__image" src={search} />
        <input
          ref={inputRef}
          onChange={() => onHandleChange()}
          className="pizza__input"
          placeholder="Search..."
        /> 
       
      </div>
      <button onClick={ () => navigate('/admin')} className="pizza__search__button">Admin</button>
      
    </div>
  );
})

export default Search;
