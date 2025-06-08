import { Navbar, Container, Nav } from 'react-bootstrap';
import bookdata from '../data/Bookdata';
import type { Book } from '../data/Bookdata';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ListPage from '../pages/ListPage';
import ContactPage from '../pages/ContactPage';
import CartPage from '../pages/CartPage';
import DetailPage from '../pages/DetailPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { PersonFill } from 'react-bootstrap-icons';

const Content : React.FC = () => {
    const [books] = useState<Book[]>(bookdata);
    console.log(books);
    return (
        <div>
            <Navbar style = {{backgroundColor : "#4169E1"}} data-bs-theme = 'dark'>
                <Container>
                    <Navbar.Brand href = "/"><h1>Bookstore</h1></Navbar.Brand>
                    <Nav className = "me-auto">
                        <Nav.Link href = "/">Home</Nav.Link>
                        <Nav.Link href = "/about">About</Nav.Link>
                        <Nav.Link href = "/product">Product</Nav.Link>
                        <Nav.Link href = "/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href = "/login" className = "d-flexalign-items-center">
                            <PersonFill size = {20} className = "me-2" />
                            Login
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path = "/" element = {<HomePage />} />
                <Route path = "/about" element = {<AboutPage />} />
                <Route path = "/product" element = {<ListPage />} />
                <Route path = "/list" element = {<ListPage />} />
                <Route path = "/contact" element = {<ContactPage />} />
                <Route path = "/cart" element = {<CartPage />} />
                <Route path = "/detail/:id" element = {<DetailPage />} />
                {/* <Route path = "/detail/:id" element = {<DetailPage2 />} /> */}
                <Route path = "/login" element = {<LoginPage />} />
                <Route path = "*" element = {'페이지가 존재하지 않습니다. 확인해주세요.'} />
            </Routes>
        </div>
    );
};

export default Content