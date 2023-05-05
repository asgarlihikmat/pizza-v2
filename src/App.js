import { Routes, Route, Link, useLocation } from "react-router-dom";
import NotFound from "./components/NotFound";
import Pizza from "./components/Pizza";
import logo from "../src/assets/icons/pizza.png";
import "../src/scss/home.scss";

import Order from "./components/Order";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getAllPizzas } from "../src/redux/pizzaSlice";
import React from "react";
import Search from "./components/Search";
import RecentOrderDetail from "./components/RecentOrderDetail";
import Liked from "./components/LikedPizzas/Liked";
import Basket from "./components/Basket";
import PizzaDetail from "./components/PizzaDetail";

function App() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.categorySlice.categories);
  const { filter, sort } = useSelector((state) => state.filterSlice);
  const { page, limit } = useSelector((state) => state.paginateSlice);
  const { pathname } = useLocation();

  const fetchPizzas = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const filters = filter ? `&title_like=${filter}` : "";
    const pagesAndLimit = `&_limit=${limit}&_page=${page}`;
    const sortPizza = sort.name
      ? `&_sort=${sort.nameType}&_order=${sort.type}`
      : "";
    try {
      const { data } = await axios.get(
        `http://192.168.31.180:3000/pizzas?${category}${filters}${pagesAndLimit}${sortPizza}`
      );
      dispatch(getAllPizzas(data));
    } catch (error) {
      console.log("ERROR", error.message);
      alert("Ошибка при получении пицц");
    } finally {
    }
  };

  React.useEffect(() => {
    // axios
    //   .get(`http://localhost:3000/pizzas?${category}${filter}${pagesAndLimit}`)
    //   .then((response) => dispatch(getAllPizzas(response.data)));

    fetchPizzas();
  }, [categoryId, filter, page, limit, sort]);

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
              <Link to={"/"}>
                <div className="pizza__body">
                  <div className="pizza__title">Chicago Pizza</div>
                  <div className="pizza__text">
                    самая вкусная пицца во вселенной
                  </div>
                </div>
              </Link>
            </div>
            {pathname === "/liked" ||
            pathname === "/order" ||
            pathname === "/orderdetail" ? (
              ""
            ) : (
              <Search />
            )}

            <Basket />
            {/* <Search /> */}
          </div>

          <Routes>
            <Route path="/" element={<Pizza />} />
            <Route path="/:id" element={<PizzaDetail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/order" element={<Order />} />
            <Route path="/orderdetail" element={<RecentOrderDetail />} />
            <Route path="/liked" element={<Liked />} />
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
