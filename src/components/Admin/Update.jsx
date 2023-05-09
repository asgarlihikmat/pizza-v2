import React from "react";
import alertify from "alertifyjs";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePizza, updatePizza } from "../../redux/slices/pizzaSlice";
import { MultiSelect } from "react-multi-select-component";

const typesList = [
  { label: "тонкое", value: 1 },
  { label: "традиционное", value: 2 },
];
const sizesList = [
  { label: "26 см", value: 26 },
  { label: "30 см", value: 30 },
  { label: "40 см", value: 40 },
];
const categoryList = [
  "Все ",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const Update = ({ item }) => {
  
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [updatedProduct, setUpdatedProduct] = React.useState(item);
  const [sizes, setSize] = React.useState([]);
  const [types, setType] = React.useState([]);

  function deleteProduct(item) {
    const sekret = prompt(
      "Only Hikmet can delete *) or add a secret word to delete"
    );
    if (sekret === "javascript") {
      alertify.success("Вы удалили пиццу!!");
      dispatch(deletePizza(item.id));
    } else {
      alertify.error("Не верно родноййй!!");
    }
  }
  function handleChange(event) {
    const { name, value } = event.target;

    setUpdatedProduct({ ...updatedProduct, [name]: value });
  }
  function updateProduct(updatedProduct) {
    const { imageUrl, title, price, category, id } = updatedProduct;
    const allUpdatedroduct = {
      id,
      sizes,
      types,
      imageUrl,
      title,
      price,
      category,
    };

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
      alertify.success('Вы успешно изменили пиццу!')
      dispatch(updatePizza(allUpdatedroduct));
      setOpen(!open);
    }  

   
    
  }
  
  return (
    <div>
      <Button variant="danger" onClick={() => deleteProduct(item)}>
        Удалить
      </Button>
      <Button variant="warning" onClick={() => setOpen(!open)}>
        Изменить
      </Button>

      <Modal show={open} onHide={open} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Редактировать продукт</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="update__container">
            <div className="update__image">
              <img src={item.imageUrl} />
            </div>
            <div className="update__title"></div>
            {/* --------- */}
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                Фото URL продукта
              </InputGroup.Text>
              <Form.Control
                name="imageUrl"
                onChange={handleChange}
                value={updatedProduct.imageUrl}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            {/* ---------------- */}
            {/* --------- */}
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                Название продукта
              </InputGroup.Text>
              <Form.Control
                name="title"
                onChange={handleChange}
                value={updatedProduct.title}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            {/* ---------------- */}

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Цена продукта</InputGroup.Text>
              <Form.Control
                name="price"
                onChange={handleChange}
                value={updatedProduct.price}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            {/* ------- */}
            <div class="input-group">
              <label class="input-group-text" for="inputGroupSelect01">
                Категория пиццы
              </label>
              <Form.Select aria-label="Default select example">
                <option>Выбран - {categoryList[item.category]}</option>
                <option value="0">Все</option>
                <option value="1">Мясные</option>
                <option value="2">Гриль</option>
                <option value="3">Острые</option>
                <option value="4">Закрытые</option>
                <option value="5">Гриль</option>
              </Form.Select>
             
            </div>

            {/* ------- */}
            <InputGroup size="sm" className="">
         <InputGroup.Text id="inputGroup-sizing-sm">Выбранный тип</InputGroup.Text>
         
         {item.types.map(typess => (
          <Form.Control
          value={typess.label}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
         ))}
        
      </InputGroup>
            <MultiSelect
            className="mb-2"
              options={typesList}
              value={types}
              onChange={setType}
              aria-labelledby="Выбрать..."
            />

            {/* ------- */}
            <InputGroup size="sm" className="">
         <InputGroup.Text id="inputGroup-sizing-sm">Выбранный тип</InputGroup.Text>
         
         {item.sizes.map(sizess => (
          <Form.Control
          value={sizess.label}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
         ))}
        
      </InputGroup>
            <MultiSelect
              options={sizesList}
              value={sizes}
              onChange={setSize}
              labelledBy="Выбрать..."
            />

            {/* ---------- */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpen(!open)}>
            Закрыть
          </Button>
          <Button
            variant="primary"
            onClick={() => updateProduct(updatedProduct)}
          >
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Update;
