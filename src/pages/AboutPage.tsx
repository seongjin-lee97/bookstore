import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React, {useEffect} from 'react';

const AboutPage: React.FC = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
        const elements = document.querySelectorAll('.hidden');
        elements.forEach((el) => observer.observe(el));
    }, []);

    return (
        <Container>
            <Row className="text-center">
                {/* 소개 섹션 (왼쪽) */}
                <Col md={6} className = 'header_left hidden'>
                    <header className = 'header_left_intro'>WithRide 대표</header>
                    <header className = 'header_left_introduce'>안녕하세요,</header>
                    <header className = 'header_left_introduce'>이성진입니다.</header>
                    <div className = 'header_left_introduce_body_container'>
                        <span className = 'header_left_introduce_body'>안녕하세요. WithRide의 이성진입니다.</span><br />
                        <span className = 'header_left_introduce_body'>늘 교통 문제에 대해 연구하는 것을 좋아하고</span><br />
                        <span className = 'header_left_introduce_body'>교통 문제로 어려움을 겪는 사람들을 돕습니다.</span>
                    </div>

                    {/* 버튼 섹션 */}
                    <div className="btn_header_container">
                        <a href='https://blog.naver.com/jamsuham75'>
                            <button className="btn_headerbtnHover">블로그</button>
                        </a>
                        <a href='https://www.youtube.com/@jamsuham75' className="ms-2">
                            <button className='btn_headerbtnHover'>유튜브</button>
                        </a>
                    </div>
                </Col>

                {/* 이미지 섹션 (오른쪽) */}
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <img src="/image/member.png" width="30%" alt="대표 이미지"/>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;
