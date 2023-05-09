import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../redux/slices/addSlice";
import alertify from "alertifyjs";
import likes from '../../assets/icons/like.png'
import nolikes from '../../assets/icons/liked.png'

import { setLike } from "../../redux/slices/pizzaSlice";
import { useNavigate } from "react-router-dom";
const sizesList = [
  {label: '26 см',value: 26},
  {label: '30 см',value: 30},
  {label: '40 см',value: 40}
]
const typeName = [
  {label: 'тонкое',value: 1},
  {label: 'традиционное',value: 2}
]
const PizzaBlock = ({ id, title, imageUrl, sizes, types, price,like }) => {
  const navigation = useNavigate();
  
  const [activeSize, setActiveSize] = React.useState();
  const [activeType, setActiveType] = React.useState();
  const dispatch = useDispatch();

  function likeEt (id){
      dispatch(setLike(id));
      alertify.error('Вы удалили пиццу из выбранные!');
  }
  function likeEtme (id){
    dispatch(setLike(id));
    alertify.success('Вы добывили пиццу в выбранные!');

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
      types:typeName,
      sizes,
      date: {date: date.getDate(),month: date.getMonth(),year: date.getFullYear()}
    };
    console.log(item);
    if (item.types === undefined) {
      alertify.error("Вы не выбрали тип");
    } else if (item.sizes === undefined) {
      alertify.error("Вы не выбрали размер");
    } else {
      alertify.success("Вы добавили " + item.title);
      dispatch(addPizza(item));
    }
  };
  function pizzaDetail(id) {
    navigation(`pizza/${id}`)
  }
  return (
    <div className="blockpizza">
      <div className="blockpizza__image">
        <img onClick={() => pizzaDetail(id)} className="pizzaimage" src={imageUrl} /> 
        {like === 1 ? <img onClick={() => likeEt(id)} className='like' src={nolikes} />
        :<img onClick={() => likeEtme(id)} className='like' src={likes} />}

        {/* <img onClick={() => likeEt(id)} className='like' src={likes} /> */}

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
            {sizesList.map((size, index) => (
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
            + Добавить {addedCount > 0 && <span>{addedCount}</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
