import { Routes, Route, Link, useLocation, Outlet, useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Pizza from "./Pizza/Pizza";
import logo from "../../src/assets/icons/pizza.png";
import "../scss/home.scss";
import "../scss/spinner.scss";
import Order from "./Order/Order";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas, getAllPizzas } from "../redux/slices/pizzaSlice";
import React from "react";
import Search from "./Search/Search";
import RecentOrderDetail from "./RecentOrder/RecentOrderDetail";
import Liked from "./LikedPizzas/Liked";
import Basket from "./Order/Basket";
import PizzaDetail from "./Pizza/PizzaDetail";
import Pagination from "./Pagination/Pagination";
import { setCategoryIndex } from "../redux/slices/categorySlice";
import Category from "./Category/Category";
import Burger from "./Burger";
import Sort from "./Sort/Sort";

const Home = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categorySlice.categories);
  const { page,limit,status } = useSelector((state) => state.pizzaSlice);
  const { sort } = useSelector((state) => state.filterSlice);
  const { search } = useSelector((state) => state.searchSlice);
  const { pathname } = useLocation();
   

  React.useEffect(() => {
    dispatch(fetchPizzas({ category,search, page,limit,sort }));
  }, [category, search, page,limit, sort]);
  


  
  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <div className="pizza">
          <div className="pizza__body__one">
              <div className="pizza__image">
              <img src={logo} alt="logo" />
               
              </div>
              {/* <a className="pizza__title" href="https://pizza-chi-three.vercel.app/">CHICAGO PIZZA</a>  */}
                <div className="pizza__body">
                  <div className="pizza__title"><Link className="pizza__title" to={'/'}>CHICAGO PIZZA</Link></div>
                  <div className="pizza__text">
                    самая вкусная пицца во вселенной
                  </div>
                </div>
               
            </div>
            
            {pathname === `/pizza/${id}` ||
            pathname === "/liked" ||
            pathname === "/admin" ||
            pathname === "/order" ||
            pathname === "/orderdetail" ? (
              ""
            ) : (
              <Search />
            )}
            
            <Basket />
            
          </div>
          <Burger />
         <div className="menu"> 
         <Category />
          <Sort sort={sort}/>
          </div>

          
          {status === "loading" ? (
            <div className="spinner-direction">
            <div className="spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            </div>
          ) : (
            <Outlet />
          )}

        </div>
      </div>
      { pathname === "/admin"||pathname === "/order" || pathname === "/orderdetail" || pathname === `/pizza/${id}` ? '' :  <Pagination />}
     
      <div className="createdBy">
        <div className="createdBy__title">Hikmat Asgarli</div>
      </div>
    </div>
  );
}

export default Home;
