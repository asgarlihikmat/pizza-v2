import React from "react";
import Category from "../Category/Category";
import { useDispatch, useSelector } from "react-redux";
import LikedPizzaBlock from "./LikedPizzaBlock";
import { useLocation } from "react-router-dom";

const Liked = () => {
  const liked = useSelector((state) => state.pizzaSlice.like);
    const {pathname} = useLocation();
    
  return (
    <div>
        {pathname === '/liked' ? "" :  <Category />}
     
      <div className="content__column">
        <div className="category__name">Выбранные пиццы</div>
        <div className="content__row">
          {/* ---- */}
          {liked.map((obj) => (
            <LikedPizzaBlock key={obj.id} {...obj} />
          ))}
          {/* ---- */}
        </div>
      </div>
    </div>
  );
};

export default Liked;
