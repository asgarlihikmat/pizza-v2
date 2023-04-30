import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import Pizza from "./components/Pizza";
import logo from "../src/assets/icons/pizza.png";
import '../src/scss/home.scss'

import Order from "./components/Order";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getAllPizzas } from '../src/redux/pizzaSlice';
import React from 'react'
import Search from "./components/Search";

function App() {
  
  const dispatch = useDispatch();
  const categoryId = useSelector(state => state.categorySlice.categories);
  const filterSearch = useSelector(state => state.filterSlice.filter);

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const filter = filterSearch !== '' ?  `&title_like=${filterSearch}` : "";
    axios
    .get(`http://localhost:3000/pizzas?${category}${filter}`)
    .then(response => dispatch(getAllPizzas(response.data)))
    
},[categoryId,filterSearch])

   
  
  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <div className="pizza">
           <div className="pizza__body__one">
           <div className="pizza__image">
            <Link to={"/"}><img src={logo} alt="logo" /></Link>
            </div>
            <Link to={"/"}>
            <div className="pizza__body">
              <div className="pizza__title">REACT PIZZA</div>
              <div className="pizza__text">
                самая вкусная пицца во вселенной
              </div>
            </div>
            </Link>
           </div>

           <Search />
          </div>
          
          <Routes>
            <Route path="/" element={<Pizza />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
        
      </div>
      <div className="createdBy">
        <div className="createdBy__title">Hikmat Asgarli</div>
      </div>
    </div>
  );
}

export default App;
