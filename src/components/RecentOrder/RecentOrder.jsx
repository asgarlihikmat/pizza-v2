import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

const RecentOrders = () => {
  const orderList = useSelector((state) => state.orderedSlice.ordered);
  const navigate = useNavigate();
  return (

    <div className="recentorder__wrapper">
      {orderList.length > 0 ? <div className="recentorder__justtitle">Недавние заказы</div> : ''}
      <div className="recentorder__container">
        {orderList.map((item, index) => (
          <div key={index} onClick={() => navigate("/orderdetail")} className="recentorder__items">
              <div>
                <div className="recentorder__title">Заказ #{index + 1}</div>
                <div className="recentorder__shipping">Доставлено</div>
                <div className="recentorder__date">
                  Доставлен {month[item[0].date.month]} {item[0].date.date},{item[0].date.year}
                </div>
                <div className="recentorder__images">
                    {item.map ((image,index) => (
                        <img key={index} src={image.imageUrl}  alt="photo" />
                    ))}
                  
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;
