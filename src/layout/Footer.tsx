import { Container } from 'react-bootstrap'

const Footer : React.FC = () => {
    return (
        <footer className = "text-white py-1 mt-3" style = {{ backgroundColor: '#4169E1'}}>
            <Container className = "text-center">
                대표 : 이성진<br />
                이메일 : <a href="mailto:seongjinlee97@gmail.com" className = "text-white">seongjinlee97@gmail.com</a><br />
                블로그 : <a href="https://withri.de" className = "text-white" target = "_blank" rel="noopener noreferrer">https://withri.de</a><br />
                Copyright © WithRide Corp. All Rights Reserved.<br />
            </Container>
        </footer>
    );
};

export default Footer