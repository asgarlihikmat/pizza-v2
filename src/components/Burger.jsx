import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { setFilter } from "../redux/slices/filterSlice";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryIndex } from '../redux/slices/categorySlice';
import { Link } from 'react-router-dom';
import { setSort } from '../redux/slices/filterSlice';

const sortList = [
    {name: "по цене (DESC)", type: "desc",nameType: 'price',status: "activex"},
    {name: "по цене (ASC)", type: "asc",nameType: 'price',status: "activex"},
    {name: "популярности (DESC)", type: "desc",nameType: 'rating',status: "activex"},
    {name: "популярности (ASC)", type: "asc",nameType: 'rating',status: "activex"},
    {name: "по алфавиту (DESC)", type: "desc",nameType: 'title',status: "activex"},
    {name: "по алфавиту (ASC)", type: "asc",nameType: 'title',status: "activex"}
  ]
const pizzaList = [
    "Все ",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];


function Burger() {
    const {categories} = useSelector((state) => state.categorySlice);
    const dispatch = useDispatch();
    const inputRef = useRef();
    const onHandleChange = (event) => {
        const { value } = inputRef.current;
        dispatch(setFilter(value));
    
      };
    function onHandleClick(index) {
        console.log(index);
        const selectedObj = sortList[index];
        dispatch(setSort(selectedObj))
    }

  
  return (
    <>
      {[ 'xxl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 burger">
          <Container fluid>
            <Navbar.Brand href="#">Меню</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Навигация
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className='linkBurger' to={"/"}>Главная страница</Link>
                  <Link className='linkBurger' to={'/liked'}>Выбранные пиццы</Link>
                  <Link className='linkBurger' to={'/order'}>Добавленные пиццы</Link>
                  <Link className='linkBurger' to={'/admin'}>Админ панель</Link>
                  <NavDropdown
                    title="Сортировка по"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className='linkBurger'
                  >
                    {sortList.map((sort,index) => (
                       <> <NavDropdown.Item  onClick={() => onHandleClick(index)}>{sort.name}</NavDropdown.Item>
                       <NavDropdown.Divider /></>
                    ))}
                
                    
                  </NavDropdown>
                  <NavDropdown
                    title="Категории "
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className='linkBurger'
                  >
                    {pizzaList.map((name,index) => (
                       <div> <NavDropdown.Item onClick={() => dispatch(setCategoryIndex(index))}>{name}</NavDropdown.Item>
                       <NavDropdown.Divider /></div>
                    ))}
                   
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                   onChange={() => onHandleChange()}
                   ref={inputRef}
                    type="search"
                    placeholder="Искать продукт.."
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Поиск</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Burger;