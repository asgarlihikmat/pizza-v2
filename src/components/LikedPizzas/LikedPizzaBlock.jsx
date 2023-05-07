import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../redux/slices/addSlice";
import alertify from "alertifyjs";
import likes from '../../assets/icons/like.png'
import nolikes from '../../assets/icons/liked.png'

import { setLike } from "../../redux/slices/pizzaSlice";

const LikedPizzaBlock = ({ id, title, imageUrl, sizes, types, price,like }) => {
  
  
  const typeName = ["тонкое", "традиционное"];
  const [activeSize, setActiveSize] = React.useState();
  const [activeType, setActiveType] = React.useState();
  const dispatch = useDispatch();

  function likeEt (id){
      dispatch(setLike(id));
  }

  const cartItem = useSelector((state) =>
    state.addSlice.addedPizza.find((obj) => obj.id === id)
  );
  const addedCount = cartItem ? cartItem.count : 0;

  const addNewPizza = () => {
    const date = new Date();
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeName[activeType],
      size: sizes[activeSize],
      date: {date: date.getDay(),month: date.getMonth(),year: date.getFullYear()}
    };
    if (item.type === undefined) {
      alertify.error("Вы не выбрали тип");
    } else if (item.size === undefined) {
      alertify.error("Вы не выбрали размер");
    } else {
      alertify.success("Вы добавили " + item.title);
      dispatch(addPizza(item));
    }
  };

  return (
    <div className="blockpizza">
      <div className="blockpizza__image">
        <img className="pizzaimage" src={imageUrl} /> 
        {like !== 1 ? <img onClick={() => likeEt(id)} className="like" src={likes}/> 
        :<img onClick={() => likeEt(id)} className="nolike" src={nolikes}/> 
        
        }
      </div>
      <div className="blockpizza__title">{title}</div>
      <div className="blockpizza__category">
        <div className="blockpizza__one">
          <ul>
            {types.map((type, index) => (
              <li
                key={index}
                onClick={() => setActiveType(index)}
                className={activeType === index ? "active" : ""}
              >
                {typeName[type]}
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
                {size} см.
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="blockpizza__price__add">
        <div className="blockpizza__price">от {price} ₽</div>
        <div onClick={() => addNewPizza()} className="blockpizza__add">
          <button>
            + Добавить {addedCount > 0 && <span>{addedCount}</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikedPizzaBlock;
