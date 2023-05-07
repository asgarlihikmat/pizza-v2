import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setLimit,pizzaCountFetch } from "../../redux/slices/paginateSlice";
import left from "../../assets/icons/left.png";
import right from "../../assets/icons/right.png";

function Pagination({setPage}) {
    const dispatch = useDispatch();

    const getPizzas = async () => {
        dispatch(pizzaCountFetch());
    }
    React.useEffect(()=>{
      getPizzas()
    },[])

    const {limit,pizzaCount} = useSelector(state => state.paginateSlice);
    const pageCount = Math.ceil(pizzaCount.length / limit);

  function handleChange(event) {
      const{value} = event.target;
      dispatch(setLimit(value))
  }
  function onHandleChange({selected}) {
      setPage(selected + 1)
  }
  return (
    <>
       <ReactPaginate
        previousClassName="previousClassName"
        nextClassName="nextClassName"
        className="pagination"
        pageClassName="pageClassName"
        nextLabel={<img src={right}></img>}

        onPageChange={onHandleChange}
        
        pageCount={pageCount}
        previousLabel={<img src={left}></img>}
      />

      <div className="limit">
        <label>Лимит страницы:</label>
        <select onChange={handleChange} >
       
          <option value="12">12</option>
          <option value="10">10</option>
          <option value="5">5</option>
          <option value="3">3</option>
        </select>
      </div>
    </>
  );
}

export default Pagination;
