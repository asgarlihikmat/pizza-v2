import { useDispatch, useSelector } from "react-redux";
import strelka from "../../assets/icons/Vector.svg";
import React, { useRef } from "react";
import { setSort } from "../../redux/slices/filterSlice";
import { Form } from "react-bootstrap";

const Sort = React.memo(({sort}) => {

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

  const dispatch = useDispatch();

  const onHandleChange = React.useCallback((event) => {
    const selectedObj = sortList[event.target.value];
    dispatch(setSort(selectedObj));
  },[])

  return (
      
      <div className="menu__filter">
        <img className="menu__image" src={strelka} />
        <span className="menu__sort">Sort by:</span>
        <div className="menu__popular">
          <Form.Select onChange={onHandleChange}>
            {sort.name ? (
              <option>{sort.name}</option>
            ) : (
              <option>not selected</option>
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
