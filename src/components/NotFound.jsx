import { Link } from 'react-router-dom';
import emptyLogo from '../assets/image/empty.png'
const NotFound = () => {
    return(
        <div className="empty">
                <div className="empty__title">Корзина пустая</div>
                <div className="empty__text"><p>Вероятней всего, вы не заказывали ещё пиццу.</p> 
                <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p> </div>
                <div className="empty__image"><img src={emptyLogo}/></div>
                <div className="empty__button"><button><Link className='link' to={"/"}>Вернуться назад</Link></button></div>
        </div>
    )
}

export default NotFound;