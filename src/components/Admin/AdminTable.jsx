import { useDispatch, useSelector } from "react-redux";
import Update from "./Update";
import Add from "./Add";
import React from 'react'
import { fetchAdminPizzas } from "../../redux/slices/adminSlice";

const AdminTable = () => {

  const dispatch = useDispatch();
  const { allpizza,status } = useSelector((state) => state.adminSlice);
  const[render,setRender] = React.useState(false);


  React.useEffect(()=>{
    dispatch(fetchAdminPizzas());
    setRender(false)
  },[render])
  

  function AdminTable(){
    return(
      <div className="admin__container">
        
      <Add setRender={setRender} render={render}/>
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
               
                <Update render={setRender} setRender={setRender} item={item}/>
               
              </td>
            </tr>
          ))}

         
        </tbody>
      </table>
    </div>
    )
  }
  return (
      <>
     
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
            <AdminTable />
          )}
          </>
  )
};
export default AdminTable;
