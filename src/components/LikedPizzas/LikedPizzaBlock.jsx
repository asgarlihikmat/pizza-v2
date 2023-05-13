import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../redux/slices/addSlice";
import alertify from "alertifyjs";
import likes from '../../assets/icons/like.png'
import nolikes from '../../assets/icons/liked.png'
import { pizzaAddedGroup } from "../../redux/slices/addSlice";
import { setLike } from "../../redux/slices/pizzaSlice";
import NotFound from "../NotFound/NotFound";

const LikedPizzaBlock = ({ id, title, imageUrl, sizes, types, price,like }) => {
  const {addedPizza,groupAdd} = useSelector(state => state.addSlice)  

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
      types:activeType,
      sizes:activeSize,
      date: {date: date.getDay(),month: date.getMonth(),year: date.getFullYear()}
    };
    if (item.types === undefined) {
      alertify.error("You have not selected a type!");
    } else if (item.sizes === undefined) {
      alertify.error("You have not selected a size!");
    } else {
      alertify.success("You have successfully added! " + item.title);
      dispatch(addPizza(item));
      dispatch(pizzaAddedGroup(item));
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
              {size.label}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="blockpizza__price__add">
      <div className="blockpizza__price">от {price} ₽</div>
      <div onClick={() => addNewPizza()} className="blockpizza__add">
      <button>
            <span> Add</span>
              {groupAdd.map((obj,index) => (
                <div key={index}>{obj.id === id ? <span className="spantu">{obj.countGroup}</span>: ''}</div>
              ))}
          </button>
      </div>
    </div>
  </div>
  );
};

export default LikedPizzaBlock;
