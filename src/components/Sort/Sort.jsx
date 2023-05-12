import { useDispatch, useSelector } from "react-redux";
import strelka from "../../assets/icons/Vector.svg";
import React, { useRef } from "react";
import { setSort } from "../../redux/slices/filterSlice";
import { Form } from "react-bootstrap";

const Sort = React.memo(({sort}) => {

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

  const dispatch = useDispatch();

  const onHandleChange = React.useCallback((event) => {
    const selectedObj = sortList[event.target.value];
    dispatch(setSort(selectedObj));
  },[])

  return (
      
      <div className="menu__filter">
        <img className="menu__image" src={strelka} />
        <span className="menu__sort">Сортировка по:</span>
        <div className="menu__popular">
          <Form.Select onChange={onHandleChange}>
            {sort.name ? (
              <option>{sort.name}</option>
            ) : (
              <option>не выбран</option>
            )}
            {sortList.map((sort, index) => (
              <option key={index} value={index}>
                {sort.name}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>
  );
})

export default Sort;
