import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../redux/slices/addSlice";
import alertify from "alertifyjs";
import likes from '../../assets/icons/like.png'
import nolikes from '../../assets/icons/liked.png'

import { setLike } from "../../redux/slices/pizzaSlice";
import { useNavigate } from "react-router-dom";
import { pizzaAddedGroup } from "../../redux/slices/addSlice";
import { Button, Col, Row } from "react-bootstrap";

const PizzaBlock = ({ id, title, imageUrl, sizes, types, price,like,index }) => {
    const {addedPizza,groupAdd} = useSelector(state => state.addSlice)  

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


  const addNewPizza = (activeType,activeSize,setCounts) => {
    const date = new Date();
    
    const item = {
      id,
      title,
      price,
      imageUrl,
      types:activeType,
      sizes:activeSize,
      date: {date: date.getDate(),month: date.getMonth(),year: date.getFullYear()}
    };
    

    if (item.types === undefined) {
      alertify.error("Вы не выбрали тип");
    } else if (item.sizes === undefined) {
      alertify.error("Вы не выбрали размер");
    } else {
      
      dispatch(addPizza(item));
      dispatch(pizzaAddedGroup(item));
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
                <span>{type.label}</span>
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
        <div onClick={() => addNewPizza(activeType,activeSize)} className="blockpizza__add">
          <button>
            <span>+ Добавить</span>
              {groupAdd.map(obj => (
                <div>{obj.id === id ? <span className="spantu">{obj.countGroup}</span>: ''}</div>
              ))}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
