import { useDispatch, useSelector } from "react-redux";
import strelka from "../../assets/icons/Vector.svg";
import React, { useRef } from "react";
import { setCategoryIndex } from "../../redux/slices/categorySlice";
import { setSort } from "../../redux/slices/filterSlice";
import { setPage } from "../../redux/slices/pizzaSlice";
import { Form, ListGroup } from "react-bootstrap";
import { useWhyDidYouUpdate } from "ahooks";

const Category = React.memo(() => {
  const categoryIndex = useSelector((state) => state.categorySlice.categories);

  const sortList = [
    {
      name: "by price (DESC)",
      type: "desc",
      nameType: "price",
      status: "activex",
    },
    {
      name: "by price (ASC)",
      type: "asc",
      nameType: "price",
      status: "activex",
    },
    {
      name: "popularity (DESC)",
      type: "desc",
      nameType: "rating",
      status: "activex",
    },
    {
      name: "popularity (ASC)",
      type: "asc",
      nameType: "rating",
      status: "activex",
    },
    {
      name: "alphabetically (DESC)",
      type: "desc",
      nameType: "title",
      status: "activex",
    },
    {
      name: "alphabetically (ASC)",
      type: "asc",
      nameType: "title",
      status: "activex",
    },
  ];
  const pizzaList = [
    "All",
    "Meat",
    "Vegetarian",
    "Grill",
    "Sharp",
    "Closed",
  ];

  const dispatch = useDispatch();
 
 
  const changeCategory = React.useCallback((index) => {
    dispatch(setCategoryIndex(index));
    dispatch(setPage(1));
  },[])

  const onHandleChange = React.useCallback((event) => {
    const selectedObj = sortList[event.target.value];
    dispatch(setSort(selectedObj));
  })

  return (
      <div className="menu__list">
        <ul>
          {pizzaList.map((pizzaName, index) => (
            <li
              onClick={() => changeCategory(index)}
              className={index === categoryIndex ? "active" : ""}
              key={index}
            >
              {pizzaName}
            </li>
          ))}
        </ul>
      </div>

  );
})

export default Category;
