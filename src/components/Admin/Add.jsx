import alertify from "alertifyjs";
import React from "react";
import { useDispatch } from "react-redux";
import { postPizzas } from "../../redux/slices/pizzaSlice";
import { MultiSelect } from "react-multi-select-component";
import { useNavigate } from "react-router-dom";


const typesList = [
  {label: 'тонкое',value: 1 },
  {label: 'традиционное',value: 2}
]
const sizesList = [
  {label: '26 см',value: 26},
  {label: '30 см',value: 30},
  {label: '40 см',value: 40}
]
const Add = () => {
  const navigate = useNavigate();
  const[sizes,setSize] = React.useState([]);
  const[types,setType] = React.useState([]);
  const [handleAdd, setHandleAdd] = React.useState([]);
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;
    setHandleAdd({...handleAdd,[name]:value})
  }

  React.useEffect(()=>{
    navigate('/admin');
  },[])


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
      alertify.error("Заполноте пажалуйста фото пиццы");
    } else if (title === undefined || title === "") {
      alertify.error("Заполноте пажалуйста имя пиццы");
    } else if (price === undefined || price === "") {
      alertify.error("Заполноте пажалуйста цену пиццы");
    } else if (category === undefined) {
      alertify.error("Заполноте пажалуйста категорию пиццы");
    } else if (types === undefined) {
      alertify.error("Заполноте пажалуйста тип пиццы");
    } else if (sizes === undefined) {
      alertify.error("Заполноте пажалуйста размер пиццы");
    } else {
      dispatch(postPizzas(allAddedItems));
      alertify.success('Вы успешно создали новую пиццу!')
      setHandleAdd([]);
    }
    
  }
 
  return (
    <div>
      <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Добавить новую пиццу
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Добавить новую пиццу
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/* ------- */}
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  Фото URL пиццы
                </span>
                <input
                  onChange={handleChange}
                  name="imageUrl"
                  type="text"
                  class="form-control"
                  placeholder="Добавьте Url Image"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {/* ------- */}
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  Имя Пицци
                </span>
                <input
                  onChange={handleChange}
                  name="title"
                  type="text"
                  class="form-control"
                  placeholder="Добавтье имя пиццы"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {/* ------- */}
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  Цена пиццы
                </span>
                <input
                  onChange={handleChange}
                  name="price"
                  type="text"
                  class="form-control"
                  placeholder="Добавтье цену пиццы"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {/* ------- */}
              <div class="input-group">
                <label class="input-group-text" for="inputGroupSelect01">
                  Категория пиццы
                </label>
                <select
                  onChange={handleChange}
                  name="category"
                  class="form-select"
                  id="inputGroupSelect01"
                  
                >
                  <option selected>Выбрать...</option>
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
                labelledBy="Выбрать..."
              />
              
              {/* ------- */}
              <MultiSelect 
                options={sizesList}
                value={sizes}
                onChange={setSize}
                labelledBy="Выбрать..."
              />
              {/* ------- */}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => addPizza(sizes,types)}
                type="button"
                class="btn btn-primary"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
