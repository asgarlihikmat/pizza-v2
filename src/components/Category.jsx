import { useDispatch, useSelector } from "react-redux";
import strelka from "../assets/icons/Vector.svg"
import React, { useRef } from 'react'
import { setCategoryIndex } from "../redux/categorySlice";

const Category = () => {
   
    const pizzaList = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
    const[open,setOpen] = React.useState(false);

    const dispatch = useDispatch();
    const categoryIndex = useSelector(state => state.categorySlice.categories);
    return(
        <div className="menu">
            <div className="menu__list">
                <ul>
                    {pizzaList.map((pizzaName,index) => (
                         <li onClick={() => dispatch(setCategoryIndex(index))} className={index === categoryIndex ? 'active' : ''}  key={index}>{pizzaName}</li>
                    ))}
                </ul>
            </div>
            <div className="menu__filter">
                <img className="menu__image" src={strelka} />
                <span className="menu__sort">Сортировка по:</span>
                <span onClick={() => setOpen(!open)} className="menu__popular">популярности</span>
                {open && <div className="menu__items">
                        <ul>
                            <li className="activex">популярности</li>
                            <li>по цене</li>
                            <li>по алфавиту</li>
                        </ul>
                    </div>}
            </div>
          </div>
    )
}

export default Category;
