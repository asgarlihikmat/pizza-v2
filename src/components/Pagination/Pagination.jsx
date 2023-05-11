import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { setLimit,setPage} from "../../redux/slices/pizzaSlice";
import left from "../../assets/icons/left.png";
import right from "../../assets/icons/right.png";

function Pagination() {
    const dispatch = useDispatch();
    const {page,limit,pizza} = useSelector(state => state.pizzaSlice)

    const pageCount = Math.ceil(13 / limit);

  function handleChange(event) {
      const{value} = event.target;
      dispatch(setLimit(value))
  }

  return (
    <>
       <ReactPaginate
        previousClassName="previousClassName"
        nextClassName="nextClassName"
        className="pagination"
        pageClassName="pageClassName"
        nextLabel={<img src={right}></img>}

        onPageChange={(event) => dispatch(setPage(event.selected + 1))}
        
        pageCount={pageCount}
        previousLabel={<img src={left}></img>}
      />

      <div className="limit">

        <select onChange={handleChange} className="form-select form-select-sm" aria-label=".form-select-sm example">
              <option value="15" defaultValue>Pagination</option>
              <option value="10">10</option>
              <option value="5">5</option>
              <option value="3">3</option>
          </select>
      </div>
      
    </>
  );
}

export default Pagination;
