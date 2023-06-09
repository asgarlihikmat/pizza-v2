import cart from "../../assets/icons/cart.gif";
import emp from "../../assets/icons/emp.png";
import remove from "../../assets/icons/remove.png";
import minus from "../../assets/icons/minus.png";
import plus from "../../assets/icons/plus.png";
import pizzaSlice from "../../assets/icons/slice.png";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearAllPizzas, minusAdd } from "../../redux/slices/addSlice";
import { plusAdd, removeOnePizza } from "../../redux/slices/addSlice";
import alertify from "alertifyjs";
import NotFound from "../NotFound/NotFound";
import RecentOrders from "../RecentOrder/RecentOrder";
import { setOrderedPizza } from "../../redux/slices/orderedSlice";

const typesList = [
  {label: 'thin',value: 1},
  {label: 'traditional',value: 2}
]
const sizesList = [
  {label: '26 sm',value: 26},
  {label: '30 sm',value: 30},
  {label: '40 sm',value: 40}
]

const Order = () => {
  const navigate = useNavigate();
  
  const addedPizzaList = useSelector((state) => state.addSlice.addedPizza);
  const { addedPizza } = useSelector((state) => state.addSlice);

  const dispatch = useDispatch();
  const removeOnePizzas = (index) => {
    dispatch(removeOnePizza(index));
    alertify.error("Deleted successfully!");
  };
  const count = addedPizza.reduce((sum, obj) => {
    return obj.count + sum;
  }, 0);

  const priceAll = addedPizza.reduce((sum, obj) => {
    return obj.count * obj.price + sum;
  }, 0);

  function pay() { 
    alert('Payment successful!')
    dispatch(setOrderedPizza(addedPizza))
    dispatch(clearAllPizzas());
    
  }

  function OrderList() {
    return (
      <div className="order">
        <div className="order__container">
          <div className="order__one">
            <div className="order__cart">
              <img src={cart} />
              Basket
            </div>
            <div
              onClick={() => {
                if (window.confirm("Are you sure you want to delete?")) {
                  dispatch(clearAllPizzas());
                }
              }}
              className="order__empty"
            >
              <img src={emp} />
              Empty trash
            </div>
          </div>
         
          {addedPizzaList.map((pizza, index) => (
            <div key={index} className="order__body">
              <div className="order__text">
                <div className="order__image">
                  <img src={pizza.imageUrl} />
                </div>
                <div className="order__text__body">
                  <div className="order__title">{pizza.title}</div>
                  <div className="order__title__text">
                    {typesList[pizza.types].label} / {sizesList[pizza.sizes].label} 
                  </div>
                </div>
              </div>
              <div className="order__add">
                <div className="order__add__minus">
                  {pizza.count === 0 ? (
                    <img className="disable" src={minus} />
                  ) : (
                    <img
                      onClick={() => dispatch(minusAdd(pizza))}
                      src={minus}
                    />
                  )}
                </div>
                <div className="order__add__count">{pizza.count}</div>
                <div
                  onClick={() => dispatch(plusAdd(pizza))}
                  className="order__add__plus"
                >
                  <img src={plus} />
                </div>
              </div>
              <div className="order__price">{pizza.count * pizza.price} ₽</div>
              <div
                onClick={() => removeOnePizzas(index)}
                className="order__remove"
              >
                <img src={remove} />
              </div>
            </div>
          ))}
          
          <div className="order__count">
            <div className="order__all">
            Total pizzas: <span>{count} pieces.</span>
            </div>
            <div className="order__summa">
            Order price: <span>{priceAll} $</span>
            </div>
          </div>
          <div className="order__footer">
            <div onClick={() => navigate("/")} className="order__back">
              {" "}
              <Link className="order__back__link" to={"/"}>
               Back
              </Link>
            </div>
            <div onClick={() => pay()} className="order__pay">
            Pay now
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>
    <RecentOrders />
    {addedPizza.length ? <OrderList /> : <NotFound />}
    </div>;
};

export default Order;
