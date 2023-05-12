import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../redux/slices/addSlice";
import alertify from "alertifyjs";
import { setLike } from "../../redux/slices/pizzaSlice";
import { pizzaAddedGroup } from "../../redux/slices/addSlice";

const PizzaBlockForDetail = ({
  id,
  title,
  imageUrl,
  sizes,
  types,
  price,
  like,
}) => {
  const dispatch = useDispatch();
  const [activeSize, setActiveSize] = React.useState();
  const [activeType, setActiveType] = React.useState();

  const {addedPizza,groupAdd} = useSelector((state) =>state.addSlice)

  const addNewPizza = () => {
    const date = new Date();
    const item = {
      id,
      title,
      price,
      imageUrl,
      types: activeType,
      sizes: activeSize,
      date: {
        date: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
      },
    };

    if (item.types === undefined) {
      alertify.error("Вы не выбрали тип");
    } else if (item.sizes === undefined) {
      alertify.error("Вы не выбрали размер");
    } else {
      alertify.success("Вы добавили " + item.title);
      dispatch(addPizza(item));
      dispatch(pizzaAddedGroup(item));
    }
  };

  return (
    <div className="blockpizza__detail">
      <div className="blockpizza__title">{title}</div>
      <div className="pizzablock__bodyy">
        <div className="blockpizza__category">
          <div className="blockpizza__one">
            <ul>
              {types.map((type, index) => (
                <li
                  key={index}
                  onClick={() => setActiveType(index)}
                  className={activeType === index ? "active" : ""}
                >
                  {type.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="blockpizza__two">
            <ul>
              {sizes.map((size, index) => (
                <li
                  key={index}
                  className={activeSize === index ? "active" : ""}
                  onClick={() => setActiveSize(index)}
                >
                  {size.label} см.
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="blockpizza__price__add">
          <div className="blockpizza__price">от {price} ₽</div>
          <div onClick={() => addNewPizza()} className="blockpizza__add">
          <button>
            <span>+ Добавить</span>
              {groupAdd.map((obj,index) => (
                <div key={index}>{obj.id === id ? <span className="spantu">{obj.countGroup}</span>: ''}</div>
              ))}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlockForDetail;
