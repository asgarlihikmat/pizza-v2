import alertify from "alertifyjs";
import React from "react";
import { useDispatch } from "react-redux";
import { postPizzas } from "../../redux/slices/adminSlice";
import { MultiSelect } from "react-multi-select-component";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";


const typesList = [
  {label: 'thin',value: 1},
  {label: 'traditional',value: 2}
]
const sizesList = [
  {label: '26 sm',value: 26},
  {label: '30 sm',value: 30},
  {label: '40 sm',value: 40}
]
const Add = ({setRender,render}) => {
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
      dispatch(postPizzas(allAddedItems));
      setRender(render => !render)
      setHandleAdd([]);
      setOpen(!open);
      alertify.success('You have successfully created a new pizza!')
    }
    
  }
 
  return (
    <>
      <div className="d-flex justify-content-start">
      <Button className="mt-4 mb-2" variant="success" onClick={() => setOpen(!open)}>
      Add new pizza
      </Button>
      </div>
      
     
      <Modal
        show={open}
        onHide={open}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Add new pizza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                Pizza URL Photo:
                </span>
                <input
                  onChange={handleChange}
                  name="imageUrl"
                  type="text"
                  className="form-control"
                  placeholder="Add Url Image"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {/* ------- */}
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                Pizza Name:
                </span>
                <input
                  onChange={handleChange}
                  name="title"
                  type="text"
                  className="form-control"
                  placeholder="Add pizza name"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {/* ------- */}
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                Pizza price:
                </span>
                <input
                  onChange={handleChange}
                  name="price"
                  type="text"
                  className="form-control"
                  placeholder="Add pizza price"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {/* ------- */}
              <div className="input-group">
                <label className="input-group-text" htmlFor="inputGroupSelect01">
                Pizza category:
                </label>
                <select
                  onChange={handleChange}
                  name="category"
                  className="form-select"
                  id="inputGroupSelect01"
                  
                >
                  <option >Choose...</option>
                  <option value="0">All</option>
                  <option value="1">Meat</option>
                  <option value="2">Vegetarian</option>
                  <option value="3">Grill</option>
                  <option value="4">Acute</option>
                  <option value="5">Closed</option>
                  
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
            Close
          </Button>
          <Button variant="primary" onClick={()=> addPizza(sizes,types)}>Create</Button>
        </Modal.Footer>
      </Modal>

     
    </>
  );
};



export default Add;
