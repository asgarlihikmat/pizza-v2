import { useDispatch, useSelector } from "react-redux";
import strelka from "../../assets/icons/Vector.svg";
import React, { useRef } from "react";
import { setCategoryIndex } from "../../redux/slices/categorySlice";
import { setSort } from "../../redux/slices/filterSlice";

const Category = () => {
  const sortList = [
    {name: "по цене (DESC)", type: "desc",nameType: 'price',status: "activex"},
    {name: "по цене (ASC)", type: "asc",nameType: 'price',status: "activex"},
    {name: "популярности (DESC)", type: "desc",nameType: 'rating',status: "activex"},
    {name: "популярности (ASC)", type: "asc",nameType: 'rating',status: "activex"},
    {name: "по алфавиту (DESC)", type: "desc",nameType: 'title',status: "activex"},
    {name: "по алфавиту (ASC)", type: "asc",nameType: 'title',status: "activex"}
  ]
  const pizzaList = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState('не выбран');
  const dispatch = useDispatch();
  const categoryIndex = useSelector((state) => state.categorySlice.categories);
  return (
    <div className="menu">
      <div className="menu__list">
        <ul>
          {pizzaList.map((pizzaName, index) => (
            <li
              onClick={() => dispatch(setCategoryIndex(index))}
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
        <span onClick={() => setOpen(!open)} className="menu__popular">
          {active}
        </span>
        {open && (
          <div className="menu__items">
            <ul>
              {sortList.map((sort,index) => (
                <li className={sort.name === active ? "activex":''} key={index} onClick={() => {dispatch(setSort(sort)); setActive(sort.name)} }>{sort.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
