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

function Home() {
  const {id} = useParams();
  const navigate = useNavigate();
  const[page,setPage] = React.useState(1);
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.categorySlice.categories);
  const { status } = useSelector((state) => state.pizzaSlice);
  const { filter, sort } = useSelector((state) => state.filterSlice);
  const { limit } = useSelector((state) => state.paginateSlice);
  const { pathname } = useLocation();
  
  const getPizzas = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const filters = filter ? `&search=${filter}` : "";
    const pagesAndLimit = page > 1 ? `&page=${page}&limit=${limit}`: '';
    const sortPizza = sort.name
      ? `&sortby=${sort.nameType}&order=${sort.type}`
      : "";

    dispatch(fetchPizzas({ category, filters, sortPizza, pagesAndLimit }));
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, filter, page, limit, sort]);
  function homePage() {
      dispatch(setCategoryIndex(0))
      navigate('/')
  }
  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <div className="pizza">
            <div className="pizza__body__one">
              <div className="pizza__image">
                <Link to={"/"}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
                <div onClick={() => homePage()} className="pizza__body">
                  <div className="pizza__title">CHICAGO PIZZA</div>
                  <div className="pizza__text">
                    самая вкусная пицца во вселенной
                  </div>
                </div>
            </div>
            {pathname === "/liked" ||
            pathname === "/order" ||
            pathname === "/orderdetail" ? (
              ""
            ) : (
              <Search />
            )}
            <Basket />
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
      { pathname === "/admin"||pathname === "/order" || pathname === "/orderdetail" || pathname === `/pizza/${id}` ? '' :  <Pagination setPage={setPage} />}
     
      <div className="createdBy">
        <div className="createdBy__title">Hikmat Asgarli</div>
      </div>
    </div>
  );
}

export default Home;
