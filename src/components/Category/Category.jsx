import { useDispatch, useSelector } from "react-redux";
import strelka from "../../assets/icons/Vector.svg";
import React, { useRef } from "react";
import { setCategoryIndex } from "../../redux/slices/categorySlice";
import { setSort } from "../../redux/slices/filterSlice";
import {setPage} from '../../redux/slices/paginateSlice'
import { Form, ListGroup } from "react-bootstrap";

const Category = () => {
  const {sort} = useSelector(state => state.filterSlice)

  const sortList = [
    {name: "по цене (DESC)", type: "desc",nameType: 'price',status: "activex"},
    {name: "по цене (ASC)", type: "asc",nameType: 'price',status: "activex"},
    {name: "популярности (DESC)", type: "desc",nameType: 'rating',status: "activex"},
    {name: "популярности (ASC)", type: "asc",nameType: 'rating',status: "activex"},
    {name: "по алфавиту (DESC)", type: "desc",nameType: 'title',status: "activex"},
    {name: "по алфавиту (ASC)", type: "asc",nameType: 'title',status: "activex"}
  ]
  const pizzaList = [
    "Все ",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];


  const dispatch = useDispatch();
  const categoryIndex = useSelector((state) => state.categorySlice.categories);

  function changeCategory(index) {
    dispatch(setCategoryIndex(index));
     
  }
  function onHandleChange(event) {
      const selectedObj = sortList[event.target.value];
      dispatch(setSort(selectedObj))
  }

  return (
    <div className="menu">
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
      <div className="menu__filter">
        <img className="menu__image" src={strelka} />
        <span className="menu__sort">Сортировка по:</span>
        <div  className="menu__popular">
        <Form.Select onChange={onHandleChange} >

        {sort.name ?  <option>{sort.name}</option> :  <option>не выбран</option>}
        {sortList.map((sort,index) => (
        <option value={index}>{sort.name}</option>
          ))}
        </Form.Select> 
        </div>
       
      </div>
    </div>
  );
};

export default Category;
