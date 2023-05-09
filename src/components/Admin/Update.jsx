import alertify from "alertifyjs";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePizza } from "../../redux/slices/pizzaSlice";
const Update = ({item}) => {
    const dispatch = useDispatch();
  
  function deleteProduct(item) {
   const sekret = prompt('Only Hikmet can delete *) or add a secret word to delete')
   if(sekret === 'javascript'){
    alertify.success("Вы удалили пиццу!!");
    dispatch(deletePizza(item.id));
   }else{
    console.log('nooo');
   }
   
  }


  return (
    <div>
     <Button variant="danger" onClick={() => deleteProduct(item)}>Удалить</Button>
     <Button variant="warning">Изменить</Button>

    </div>
  );
};

export default Update;
