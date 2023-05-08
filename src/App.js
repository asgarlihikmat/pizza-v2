import { Routes, Route} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Pizza from "./components/Pizza/Pizza";
import Order from "./components/Order/Order";
import React from "react";
import RecentOrderDetail from "./components/RecentOrder/RecentOrderDetail";
import Liked from "./components/LikedPizzas/Liked";
import PizzaDetail from "./components/Pizza/PizzaDetail";
import Home from "./components/Home";
import AdminTable from "./components/Admin/AdminTable";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}> 
        <Route path="/" element={<Pizza />} />
        <Route path="/pizza/:id" element={<PizzaDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/order" element={<Order />} />
        <Route path="/orderdetail" element={<RecentOrderDetail />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/admin" element={<AdminTable />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
