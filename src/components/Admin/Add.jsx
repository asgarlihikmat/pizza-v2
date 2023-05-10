import alertify from "alertifyjs";
import React from "react";
import { useDispatch } from "react-redux";
import { postPizzas } from "../../redux/slices/adminSlice";
import { MultiSelect } from "react-multi-select-component";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";


const typesList = [
  {label: 'тонкое',value: 1},
  {label: 'традиционное',value: 2}
]
const sizesList = [
  {label: '26 см',value: 26},
  {label: '30 см',value: 30},
  {label: '40 см',value: 40}
]
const Add = ({setRender}) => {
  const[open,setOpen] = React.useState(false);
  const navigate = useNavigate();
  const[sizes,setSize] = React.useState([]);
  const[types,setType] = React.useState([]);
  const [handleAdd, setHandleAdd] = React.useState([]);
  const dispatch = useDispatch();
  
  function handleChange(event) {
    const { name, value } = event.target;
    setHandleAdd({...handleAdd,[name]:value})
  }




function addPizza(sizes,types) {
    const {imageUrl,title,price,category} = handleAdd;
  
    const allAddedItems = {
      imageUrl,
      title,
      price,
      category,  
      sizes,
      types
    }
  
    if (imageUrl === undefined || imageUrl === "") {
      alertify.error("Заполноте пажалуйста фото пиццы  ");
    } else if (title === undefined || title === "") {
      alertify.error("Заполноте пажалуйста имя пиццы");
    } else if (price === undefined || price === "") {
      alertify.error("Заполноте пажалуйста цену пиццы");
    } else if (category === undefined) {
      alertify.error("Заполноте пажалуйста категорию пиццы");
    } else if (types[0] === undefined) {
      alertify.error("Заполноте пажалуйста тип пиццы");
    } else if (sizes[0] === undefined) {
      alertify.error("Заполноте пажалуйста размер пиццы");
    } else {
      dispatch(postPizzas(allAddedItems));
      setHandleAdd([]);
      setRender(true);
      setOpen(!open);
      alertify.success('Вы успешно создали новую пиццу!')
    }
    
  }
 
  return (
    <>
      <div className="d-flex justify-content-start">
      <Button className="mt-4 mb-2" variant="success" onClick={() => setOpen(!open)}>
      Добавить новую пиццу
      </Button>
      </div>
      
     
      <Modal
        show={open}
        onHide={open}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Добавить новую пиццу</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Фото URL пиццы
                </span>
                <input
                  onChange={handleChange}
                  name="imageUrl"
                  type="text"
                  className="form-control"
                  placeholder="Добавьте Url Image"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {/* ------- */}
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Имя Пицци
                </span>
                <input
                  onChange={handleChange}
                  name="title"
                  type="text"
                  className="form-control"
                  placeholder="Добавтье имя пиццы"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {/* ------- */}
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Цена пиццы
                </span>
                <input
                  onChange={handleChange}
                  name="price"
                  type="text"
                  className="form-control"
                  placeholder="Добавтье цену пиццы"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {/* ------- */}
              <div className="input-group">
                <label className="input-group-text" htmlFor="inputGroupSelect01">
                  Категория пиццы
                </label>
                <select
                  onChange={handleChange}
                  name="category"
                  className="form-select"
                  id="inputGroupSelect01"
                  
                >
                  <option >Выбрать...</option>
                  <option value="0">Все</option>
                  <option value="1">Мясные</option>
                  <option value="2">Гриль</option>
                  <option value="3">Острые</option>
                  <option value="4">Закрытые</option>
                  <option value="5">Гриль</option>
                </select>
              </div>
             
              {/* ------- */}
              <MultiSelect 
                options={typesList}
                value={types}
                onChange={setType}
                aria-labelledby="Выбрать..."
              />
              
              {/* ------- */}
              <MultiSelect 
                options={sizesList}
                value={sizes}
                onChange={setSize}
                labelledBy="Выбрать..."
              />

              {/* ---------- */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setOpen(!open)}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={()=> addPizza(sizes,types)}>Добавить</Button>
        </Modal.Footer>
      </Modal>

     
    </>
  );
};



export default Add;
