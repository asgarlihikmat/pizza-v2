import { useDispatch, useSelector } from "react-redux";
import icon from "../../assets/icons/Vector.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import like from "../../assets/icons/liked.png";

const Basket = () => {

  const navigate = useNavigate();
  const { addedPizza } = useSelector((state) => state.addSlice);
  const likeStatus = useSelector((state) => state.pizzaSlice.like);
  const{pathname} = useLocation();

  const totalPrice = addedPizza.reduce((sum, obj) => {
    return obj.count * obj.price + sum;
  }, 0);
  return (
    <div className="pizza__body__second">
      <div onClick={() => navigate("/order")} className="pizza__card">
        <span>{totalPrice} ₽</span>
        <span>
          <img src={icon} />
          <Link className="pizza__card__order" to={"/order"}>
            {addedPizza.length}
          </Link>
        </span>
      </div>
      {pathname === '/' && <div className="pizza__like">
        {likeStatus.length !== 0 ? (
          <img onClick={() => navigate("/liked")} src={like} />
        ) : (
          ""
        )}
      </div>}
      {/* <div className="pizza__like">
        {likeStatus.length !== 0 ? (
          <img onClick={() => navigate("/liked")} src={like} />
        ) : (
          ""
        )}
      </div> */}
    </div>
  );
};

export default Basket;
