import { useDispatch, useSelector } from "react-redux";
import icon from "../assets/icons/Vector.svg";
import search from "../assets/icons/search.png";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { setFilter } from "../redux/filterSlice";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef();
  const { totalPrice, addedPizza } = useSelector((state) => state.addSlice);

  const onHandleChange = (event) => {
    const { value } = inputRef.current;
    dispatch(setFilter(value));
  };
  return (
    <div className="pizza__body__second">
      <div className="pizza__search">
        <img className="pizza__search__image" src={search} />{" "}
        <input
          ref={inputRef}
          onChange={() => onHandleChange()}
          className="pizza__input"
          placeholder="Поиск пиццы"
        />
      </div>
      <div onClick={() => navigate("/order")} className="pizza__card">
        <span>{totalPrice} ₽</span>
        <span>
          <img src={icon} />
          <Link className="pizza__card__order" to={"/order"}>
            {addedPizza.length}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Search;
