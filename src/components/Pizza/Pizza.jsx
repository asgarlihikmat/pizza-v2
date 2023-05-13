import React from "react";
import Category from "../Category/Category";
import { useSelector } from "react-redux";
import PizzaBlock from "./PizzaBlock";
import Pagination from "../Pagination/Pagination";
import MainNotFound from "../NotFound/MainNotFound";

const Pizza = () => {
  const pizzaList = useSelector((state) => state.pizzaSlice.pizza);

  return (
    <>
      {pizzaList.length === 0 ? (
        <MainNotFound />
      ) : (
        <div className="content__column">
         <div className="category__name">Все пиццы</div>

           

          <div className="content__row">
            {/* ---- */}
            {pizzaList.map((obj,index) => (
              <PizzaBlock index={index} key={obj.id} {...obj} />
            ))}
            {/* ---- */}
          </div>
        </div>
      )}
    </>

  );
};

export default Pizza;
