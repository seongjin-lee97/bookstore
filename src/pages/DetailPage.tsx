import React, { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import type { Book } from '../data/Bookdata'
import { useLocation, useNavigate } from 'react-router-dom';
import { addItem } from '../data/store';
import { useDispatch } from 'react-redux';

interface LocationState {
    book : Book;
}

const DetailPage: React.FC = () => {
    // const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const { state } = location as { state: LocationState };
    const book = state?.book;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        const popupWindow = window.open('', '_blank', 'width=400, height=300');
        if (popupWindow) {
            popupWindow.document.write(`
                <html>
                    <head>
                        <title>특가 할인</title>
                    </head>
                    <body style = "display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #4169E1;
                    color: white;
                    flex-direction: column;">
                        <h1 style="margin: 0; font-size: 2em; font-weight: bold;">전 도서 20% 할인!!</h1>
                        <h3 style="margin-top: 10px;">완전 럭키비키잖아</h3>
                    </body>
                </html>
            `);
            popupWindow.document.close();
        }

        return() => {
            if (popupWindow) popupWindow.close();
        };
    }, []);

    return (
        <div>
            <Container className = "mt-5">
                <Row>
                    <Col md={6}>
                        <Card className = "border-0">
                            <Card.Img
                                variant = "top"
                                // src = {'/image/' + (book.id + 1) + '.jpg'}
                                src = {`/image/${book.id+1}.jpg`}
                                style = {{ borderRadius: '8px' }}
                            />
                        </Card>
                    </Col>
                    <Col md = {6}>
                        <Card className = "border-0 text-center">
                            <Card.Body>
                                <Card.Title as="h3" className="mb-4">{book.title}</Card.Title>
                                <Card.Text className="text-muted mb-4">{book.content}</Card.Text>
                                <Card.Text as="h4" className="text-primary mb-4">{book.price}</Card.Text>
                                <Button
                                    variant = "primary"
                                    onClick = {() => {
                                        dispatch(addItem({id: book.id, name : book.title, price : book.price}));
                                        navigate('/cart');
                                    }}>
                                        카트에 담기
                                    </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DetailPage;