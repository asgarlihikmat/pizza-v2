import { useDispatch, useSelector } from "react-redux";
import Update from "./Update";
import Add from "./Add";
import React from 'react'
import { fetchAdminPizzas } from "../../redux/slices/adminSlice";

const AdminTable = () => {
  const dispatch = useDispatch();
  const[render,setRender] = React.useState(false);
  const { allpizza,status } = useSelector((state) => state.adminSlice);
  console.log(status);

  const getsPizzas = async () => {
    dispatch(fetchAdminPizzas());
  };
  
  React.useEffect(()=>{
    getsPizzas();
    setRender(false);
  },[render])
  
  return (
    <div className="admin__container">
      <Add setRender={setRender}/>
      <table className="admin__table table table-striped table-hover border">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Фото пиццы</th>
            <th scope="col">Имя пиццы</th>
            <th scope="col">Цена</th>
            <th scope="col">Типы</th>
            <th scope="col">Размер</th>
            <th scope="col">Действие</th>
          </tr>
        </thead>
        <tbody>
          {allpizza.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td><img className="admin__image" src={item.imageUrl}/></td>
              <td>{item.title}</td>
              <td>{item.price} руб.</td>
              <td>
              <ul className="admin__list">
              {item.types.map((m,index) => (
                <li key={index}>{m.label}</li>
              ))}
              </ul>
              </td>


              <td>
                <ul className="admin__list">
              {item.sizes.map((m,index) => (
                <li key={index}>{m.label}</li>
              ))}
              </ul>
              </td>
              <td>
               
                <Update setRender={setRender} item={item}/>
               
              </td>
            </tr>
          ))}

         
        </tbody>
      </table>
    </div>
  );
};
export default AdminTable;
