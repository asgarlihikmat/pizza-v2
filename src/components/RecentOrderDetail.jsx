import { useSelector } from "react-redux";
const month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

const RecentOrderDetail = () => {
    const recentOrderProduct = useSelector(state => state.orderedSlice.ordered)
    return(
        <div className="recentorderdetail__container">
          <div className="recentorderdetail__header">
          <div className="recentorderdetail__status">Доставлено</div>
         
            <div className="recentorderdetail__title">Заказанные продукты</div>
          </div>
            <div className="recentorderdetail__block">{recentOrderProduct.map((prod,index) => (
                
                <><span>Заказ: #{index+1}</span>
                <div className="recentorderdetail__date">Доставлен  {prod[0].date.date} {month[prod[0].date.month]}  {prod[0].date.year} г. </div>
                <div className="diverse">{prod.map((item,index) => (
                
                    <div  className="recentorderdetail__footer"> 
                    
                    <img src={item.imageUrl} />
                    <div className="recentorderdetail__body">
                        <div className="recentorderdetail__title gapping">{item.title}</div>
                        <div className="recentorderdetail__price gapping">Цена за единицу: <span>{item.price} руб.</span></div>
                        <div className="recentorderdetail__count gapping">Количество: <span>{item.count}</span></div>
                        <div className="recentorderdetail__type gapping">Тип: <span>{item.type}</span></div>
                        <div className="recentorderdetail__size gapping">Размер: <span>{item.size}</span> см.</div>
                    </div>
                 </div>
                 
                ))}</div>
                </>
            ))}
            </div>
           
        </div>
    )
}

export default RecentOrderDetail;