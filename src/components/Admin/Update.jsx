import React from "react";
import alertify from "alertifyjs";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePizza, updatePizza } from "../../redux/slices/adminSlice";
import { MultiSelect } from "react-multi-select-component";
import { fetchAdminPizzas } from "../../redux/slices/adminSlice";

const typesList = [
  {label: 'thin',value: 1},
  {label: 'traditional',value: 2}
]
const sizesList = [
  {label: '26 sm',value: 26},
  {label: '30 sm',value: 30},
  {label: '40 sm',value: 40}
]
const categoryList = [
  
  "All",
  "Meat",
  "Vegetarian",
  "Grill",
  "Sharp",
  "Closed",
];
const Update = ({ item,setRender,render }) => {
  const dispatch = useDispatch();
  const {status} = useSelector(state => state.adminSlice)
  const [open, setOpen] = React.useState(false);
  const [updatedProduct, setUpdatedProduct] = React.useState(item);
  const [sizes, setSize] = React.useState(item.sizes);
  const [types, setType] = React.useState(item.types);
  

  function deleteProduct(item) {
    const sekret = prompt(
      "Only Hikmet can delete *) or add a secret word to delete"
    );
    if (sekret === "javascript") {
      setRender(render => !render)
      dispatch(deletePizza(item.id));
      alertify.success("You have successfully deleted the pizza!!");
      
    } else {
      alertify.error("Password is wrong my dear!");
    }
  }
 
  function handleChange(event) {
    const { name, value } = event.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
    
  }
  
  function updateProduct(updatedProduct) {
    const { imageUrl, title, price, id,category } = updatedProduct;
    
    const allUpdatedroduct = {
      id,
      sizes,
      types,
      imageUrl,
      title,
      price,
      category
    };

    if (imageUrl === undefined || imageUrl === "") {
      alertify.error("Please fill in the photo of the pizza. ");
    } else if (title === undefined || title === "") {
      alertify.error("Please fill in the name of the pizza.");
    } else if (price === undefined || price === "") {
      alertify.error("Please fill in the pizza price.");
    } else if (category === undefined) {
      alertify.error("Please fill in the pizza category.");
    } else if (types[0] === undefined) {
      alertify.error("Please fill in the type of pizza.");
    } else if (sizes[0] === undefined) {
      alertify.error("Please fill in the pizza size.");
    } else {

      dispatch(updatePizza(allUpdatedroduct));
      alertify.success('You have successfully changed the pizza!')
      setOpen(!open);
    }  
    setRender(render => !render);

  }
  
  return (
    <div>
      <Button variant="danger m-2" onClick={() => deleteProduct(item)}>
      Delete
      </Button>
      <Button variant="warning" onClick={() => setOpen(!open)}>
        Update
      </Button>

      <Modal show={open} onHide={open} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Edit product</Modal.Title>
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
                Image URL product
              </InputGroup.Text>
              <Form.Control
                name="imageUrl"
                onChange={handleChange}
                value={updatedProduct.imageUrl}
                placeholder="Image url add here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            {/* ---------------- */}
            {/* --------- */}
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                Product name:
              </InputGroup.Text>
              <Form.Control
                name="title"
                onChange={handleChange}
                value={updatedProduct.title}
                placeholder="Product name "
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            {/* ---------------- */}

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Prodyct price:</InputGroup.Text>
              <Form.Control
                name="price"
                onChange={handleChange}
                value={updatedProduct.price}
                placeholder="Product price"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            {/* ------- */}
            <div className="input-group">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Pizza category:
              </label>
              <Form.Select name='category' onChange={handleChange} aria-label="Default select example">
                <option>Selected - {categoryList[item.category]}</option>
                {categoryList.map((name,index) => (
                  <option key={index} value={index}>{name}</option>
                ))}
              </Form.Select>
             
            </div>

            {/* ------- */}
            
            <MultiSelect
            className="mb-2"
              options={typesList}
              value={types}
              onChange={setType}
              placeholder="Select Cities"
            />

            {/* ------- */}
            
            <MultiSelect
              options={sizesList}
              value={sizes}
              onChange={setSize}
            />

            {/* ---------- */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpen(!open)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => updateProduct(updatedProduct)}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Update;
