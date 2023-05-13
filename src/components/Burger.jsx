import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { setSearch } from "../redux/slices/searchSlice";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryIndex } from '../redux/slices/categorySlice';
import { Link } from 'react-router-dom';
import { setSort } from '../redux/slices/filterSlice';
import React from 'react'
const sortList = [
    {name: "by price (DESC)", type: "desc",nameType: 'price',status: "activex"},
    {name: "by price (ASC)", type: "asc",nameType: 'price',status: "activex"},
    {name: "popularity (DESC)", type: "desc",nameType: 'rating',status: "activex"},
    {name: "popularity (ASC)", type: "asc",nameType: 'rating',status: "activex"},
    {name: "alphabetically (DESC)", type: "desc",nameType: 'title',status: "activex"},
    {name: "alphabetically (ASC)", type: "asc",nameType: 'title',status: "activex"}
  ]
const pizzaList = [
  "All",
  "Meat",
  "Vegetarian",
  "Grill",
  "Sharp",
  "Closed",
  ];


const Burger = React.memo(() => {
  const[open,setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const onHandleChange = (event) => {
      const { value } = inputRef.current;
      dispatch(setSearch(value));
      
    };
  function onHandleClick(index) {
      console.log(index);
      const selectedObj = sortList[index];
      dispatch(setSort(selectedObj))
      setOpen(!open);
  }
  function onHandleCategory(index) {
      dispatch(setCategoryIndex(index));
      setOpen(!open);
  }
return (
  
  <>
    {[ 'xxl'].map((expand,index) => (
      <Navbar key={index} expanded={open}  bg="light" expand={expand} className="burger">
        <Container fluid>
          <Navbar.Brand onClick={() => setOpen(!open)} href="#">Menu</Navbar.Brand>
          <Navbar.Toggle onClick={() => setOpen(!open)}  aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
         
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
           
          >
            <Offcanvas.Header onClick={() => setOpen(!open)}  >
              <Offcanvas.Title onClick={() => setOpen(!open)} id={`offcanvasNavbarLabel-expand-${expand}`}>
              Navigation
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Form  className="d-flex mb-3">
                <Form.Control
                 onChange={() => onHandleChange()}
                 ref={inputRef}
                 
                  type="search"
                  placeholder="Search product.."
                  className="me-2"
                  aria-label="Search"
                />
                <Button onClick={() => setOpen(!open)} variant="outline-success">Search</Button>
              </Form>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link onClick={() => setOpen(!open)} className='linkBurger' to={"/"}>Main page</Link>
                <Link onClick={() => setOpen(!open)} className='linkBurger' to={'/liked'}>Selected pizzas</Link>
                <Link onClick={() => setOpen(!open)} className='linkBurger' to={'/order'}>Added pizzas</Link>
                <Link onClick={() => setOpen(!open)} className='linkBurger' to={'/admin'}>Admin Panel</Link>
                <NavDropdown
                  title="Sort by"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  className='linkBurger'
                >
                  {sortList.map((sort,index) => (
                    <div key={index}>
                     <NavDropdown.Item key={index} onClick={() => setOpen(!open)}>{sort.name}</NavDropdown.Item>
                     <NavDropdown.Divider />
                    </div>
                  ))}
              
                  
                </NavDropdown>
                <NavDropdown
                  title="Categories "
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  className='linkBurger'
                >
                  {pizzaList.map((name,index) => (
                    <div key={index}>
                      <NavDropdown.Item onClick={() => onHandleCategory(index)}>{name}</NavDropdown.Item>
                      <NavDropdown.Divider />
                    </div>
                   
                  ))}
                 
                </NavDropdown>
              </Nav>
              {/* <Form className="d-flex">
                <Form.Control
                 onChange={() => onHandleChange()}
                 ref={inputRef}
                  type="search"
                  placeholder="Искать продукт.."
                  className="me-2"
                  aria-label="Search"
                />
                <Button  onClick={() => setOpen(!open)} variant="outline-success">Поиск</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
);
})

export default Burger;