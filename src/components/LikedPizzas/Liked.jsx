import React from "react";
import Category from "../Category/Category";
import { useDispatch, useSelector } from "react-redux";
import LikedPizzaBlock from "./LikedPizzaBlock";
import { useLocation } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

const Liked = () => {
  const liked = useSelector((state) => state.pizzaSlice.like);
    const {pathname} = useLocation();
    
  return (
    <div>
        {pathname === '/liked' ? "" :  <Category />}
     
      <div className="content__column">
        <div className="category__name">Selected pizzas</div>
        {liked.length ? <div className="content__row">
          {liked.map((obj) => (
            <LikedPizzaBlock key={obj.id} {...obj} />
          ))}
        </div> : <NotFound />}
      </div>
    </div>
  );
};

export default Liked;
