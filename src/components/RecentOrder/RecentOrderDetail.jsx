import { useSelector } from "react-redux";

const month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

const RecentOrderDetail = () => {
    const recentOrderProduct = useSelector(state => state.orderedSlice.ordered)
    return(
        <div className="recentorderdetail__container">
          <div className="recentorderdetail__header">
          <div className="recentorderdetail__status">Delivered</div>
         
            <div className="recentorderdetail__title">Products ordered</div>
          </div>
            <div className="recentorderdetail__block">{recentOrderProduct.map((prod,index) => (
                
                <div key={index}><span>Заказ: #{index+1}</span>
                <div className="recentorderdetail__date">Delivered  {prod[0].date.date} {month[prod[0].date.month]}  {prod[0].date.year} г. </div>
                <div className="diverse">{prod.map((item,index) => (
                
                    <div key={index} className="recentorderdetail__footer"> 
                    
                    <img src={item.imageUrl} />
                    <div className="recentorderdetail__body">
                        <div className="recentorderdetail__title gapping">{item.title}</div>
                        <div className="recentorderdetail__price gapping">Unit price: <span>{item.price} $.</span></div>
                        <div className="recentorderdetail__count gapping">Quantity: <span>{item.count}</span></div>
                        <div className="recentorderdetail__type gapping">Type: <span>{item.type}</span></div>
                        <div className="recentorderdetail__size gapping">Size: <span>{item.size}</span> sm.</div>
                    </div>
                 </div>
                 
                ))}</div>
                </div>
            ))}
            </div>
           
        </div>
    )
}

export default RecentOrderDetail;