import cart from '../assets/icons/cart.gif'
import emp from '../assets/icons/emp.png'
import remove from '../assets/icons/remove.gif'
import minus from '../assets/icons/minus.png'
import plus from '../assets/icons/plus.png'
import pizzaSlice from '../assets/icons/slice.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllPizzas, minusAdd } from '../redux/addSlice'
import { plusAdd,removeOnePizza } from '../redux/addSlice'

const Order = () =>{
    const navigate = useNavigate();
    const addedPizzaList = useSelector(state => state.addSlice.addedPizza);
    const {totalPrice} = useSelector(state => state.addSlice);
    const dispatch = useDispatch();

    return(
        <div className="order">
            <div className="order__container">
                
            <div className="order__one">
                <div className="order__cart"><img src={cart}/>Корзина</div>
                <div onClick={() => {if(window.confirm("Вы уверени что хотите удалить?") ) {dispatch(clearAllPizzas()) }}} className="order__empty"><img src={emp}/>Очистить корзину</div>
            </div>
            {/* ------ */}
            {addedPizzaList.map((pizza,index) => (
                <div className="order__body">
              
              <div className="order__text">
                  <div className="order__image"><img src={pizza.imageUrl}/></div>
                  <div className="order__text__body">
                  <div className="order__title">{pizza.title}</div>
                  <div className="order__title__text">{pizza.type} / {pizza.size} см.</div>
                  </div>
              </div>
              <div className="order__add">
                  <div onClick={() => dispatch(minusAdd(pizza.id))} className="order__add__plus"><img src={minus}/></div>
                  <div className="order__add__count">{pizza.count}</div>
                  <div onClick={() => dispatch(plusAdd(pizza.id))}  className="order__add__minus"><img src={plus}/></div>
              </div>
              <div className="order__price">{ pizza.count * pizza.price} ₽</div>
              <div onClick={() => dispatch(removeOnePizza(index))} className="order__remove">
                  <img src={remove}/>
              </div>
          </div>
            ))}
            
            
            {/* --------- */}
            <div className="order__count">
                <div className="order__all">Всего пицц: <span>3 шт.</span></div>
                <div className="order__summa">Сумма заказа: <span>{totalPrice} ₽</span></div>
            </div>
            <div className="order__footer">
                <div onClick={() => navigate("/")} className="order__back"> <Link className='order__back__link' to={"/"}>Вернуться назад</Link></div>
                <div className="order__pay">Оплатить сейчас</div>
            </div>
        </div>


        
        </div>
    )
}

export default Order;