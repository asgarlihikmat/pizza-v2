import React from 'react'
import Category from './Category';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getAllPizzas } from '../redux/pizzaSlice';
import PizzaBlock from './PizzaBlock';
import Pagination from './Pagination';
import { setPagination } from '../redux/paginateSlice';
import { Link } from 'react-router-dom';

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