import { useSelector } from "react-redux";


const AdminTable = () => {
  const typeName = ["тонкое", "традиционное"];
  const { pizza } = useSelector((state) => state.pizzaSlice);
  return (
    <div className="admin__container">
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
          {pizza.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td><img className="admin__image" src={item.imageUrl}/></td>
              <td>{item.title}</td>
              <td>{item.price} руб.</td>
              <td>
              <ul className="admin__list">
              {item.types.map(m => (
                <li>{typeName[m]}</li>
              ))}
              </ul>
              </td>


              <td>
                <ul className="admin__list">
              {item.sizes.map(m => (
                <li>{m}</li>
              ))}
              </ul>
              </td>
              <td>
                <button type="button" className="btn btn-danger">Удалить</button>
              <button type="button" className="btn btn-warning">Изменить</button>
              </td>
            </tr>
          ))}

          
        </tbody>
      </table>
    </div>
  );
};
export default AdminTable;
