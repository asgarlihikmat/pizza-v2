import React from 'react'
import Category from '../Category/Category';
import { useSelector } from 'react-redux';
import PizzaBlock from './PizzaBlock';
import Pagination from '../Pagination/Pagination';

const Pizza = () =>{
    const pizzaList = useSelector(state => state.pizzaSlice.pizza);
    return(
        <div>
            <Category />
        <div className='content__column'>
                <div className="category__name">Все пиццы</div>
               <div className="content__row">
                {/* ---- */}
                {pizzaList.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)}
                {/* ---- */}
               </div>

        </div>
        
        <Pagination />
        </div>
    )
}

export default Pizza;