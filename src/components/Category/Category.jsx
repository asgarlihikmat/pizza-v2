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
      name: "по цене (DESC)",
      type: "desc",
      nameType: "price",
      status: "activex",
    },
    {
      name: "по цене (ASC)",
      type: "asc",
      nameType: "price",
      status: "activex",
    },
    {
      name: "популярности (DESC)",
      type: "desc",
      nameType: "rating",
      status: "activex",
    },
    {
      name: "популярности (ASC)",
      type: "asc",
      nameType: "rating",
      status: "activex",
    },
    {
      name: "по алфавиту (DESC)",
      type: "desc",
      nameType: "title",
      status: "activex",
    },
    {
      name: "по алфавиту (ASC)",
      type: "asc",
      nameType: "title",
      status: "activex",
    },
  ];
  const pizzaList = [
    "Все ",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
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
