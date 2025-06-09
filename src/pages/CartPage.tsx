import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { CartArray } from "../data/store";
import { plusCount, minusCount, resetCart } from "../data/store";
import { Button, Col, Container, Row, Table } from 'react-bootstrap';

interface CartState {
    cart : CartArray;
    user : {id : number, name : string, job : string};
}

const CartPage: React.FC = () => {
    // const [books, setBooks] = useState<Book[]>([
    //     { id: 1, title: "모던 자바스크립트&Node.js", quantity: 1, price: 34000 },
    //     { id: 2, title: "C#프로그래밍의 정석", quantity: 2, price: 26000 },
    // ])
    // const calculateTotal = () =>
    //     books.reduce((total, book) => total + book.price * book.quantity, 0);

    // const cartState = useSelector((state : CartState)=> state);
    // console.log(cartState.cart.cart[0].id);
    // console.log(cartState.cart.cart[0].name);
    // console.log(cartState.cart.cart[0].quantity);
    // console.log(cartState.cart.cart[0].price);

    const cartState = useSelector((state : CartState) => state);

    const getTotalAmount = useMemo(() => {
        return cartState.cart.cart.reduce((total, item) => total + item.quantity * item.price, 0);
    }, [cartState.cart]);

    const dispatch = useDispatch();

    return (
        <Container>
            <h2 className = "text-center">장바구니</h2>
            <Table bordered className = "text-center">
                <thead>
                    <tr>
                        <th>도서명</th>
                        <th>가격</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {cartState.cart.cart.map((item) => (
                        <tr key = {item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity * item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <Button
                                    className = "btn-warning"
                                    style = {{marginRight : '10px'}}
                                    onClick = {() =>{
                                        dispatch(plusCount(item.id))
                                    }}>
                                    +
                                </Button>
                                <Button
                                    className = "btn-warning"
                                    style = {{marginRight : '10px'}}
                                    onClick = {() =>{
                                        dispatch(minusCount(item.id))
                                    }}>
                                    -
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Row className = "text-center">
                <Col>
                    <h5>총 상품금액: {getTotalAmount}원</h5>
                </Col>
                <Col>
                    <Button variant="success" style = {{marginRight : '10px'}}>주문하기</Button>
                    {/* <div>{cartState.user.id}</div> */}
                    <Button variant="primary" onClick = {() =>{dispatch(resetCart())}}>카트 비우기</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default CartPage;