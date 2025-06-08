import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';

const Contact: React.FC = () => {
    return (
        <Container>
            <h1 className="text-center">Business Contact</h1>
            <Form>
                {/* 이름 입력 */}
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label className="text-start w-100">이름</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="이름 입력"
                    />
                </Form.Group>

                {/* 이메일 입력 */}
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className="text-start w-100">이메일</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="이메일 입력"
                    />
                </Form.Group>

                {/* 내용 입력 */}
                <Form.Group className="mb-3" controlId="formContent">
                    <Form.Label className="text-start w-100">내용</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={10}
                        placeholder="내용 입력"
                    />
                </Form.Group>

                {/* 제출 버튼 */}
                <Button
                    type="submit"
                    variant="warning"
                    className="w-100"
                    style={{ height: '40px' }}
                >
                    접수하기
                </Button>
            </Form>
        </Container>
    );
};

export default Contact;
