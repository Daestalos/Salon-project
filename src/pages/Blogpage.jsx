import { Container, Row, Col, Button} from 'react-bootstrap';
import "../css/Homepage.css";
import { Slider } from "../components/Slider";
import { useAuth } from "../hook/useAuth";
import { SwiperInstagram } from '../components/SwiperInstagram';

const Blogpage = () =>{
    const {mediaData} = useAuth();

    return (
        <>
        <Slider/>
        <Container className='Blogpage-News mb-20' fluid>
            <Row className='h-10'>
                <Col className='News-Header text-center'> 
                <h2 className="decorated"><span>Последние новости BAR Studio</span></h2> 
                </Col> 
            </Row>
            <SwiperInstagram />
            <Row className='justify-content-center text-center'>
                <Col className='mb-5 pt-4'>
                        <Button href="https://www.instagram.com/bar_studio.mogilev/?hl=ru" size="lg" variant="primary">Узнать больше можно в нашем Instagram</Button>{' '}
                </Col>
            </Row>
        </Container>
        </>
    )
}

export {Blogpage};