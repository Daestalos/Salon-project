import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Slider } from '../components/Slider';
import Aboutslider1 from './img/Aboutslider1.jpg';
import Aboutslider2 from './img/Aboutslider2.jpg';
import Aboutslider3 from './img/Aboutslider3.jpg';
import medal from './img/medal.svg';
import coffee from './img/coffee-cup.svg';
import best from './img/best-friend.svg';

import logo from '../pages/img/logo2.svg'
import { Teampage } from './Teampage';

const Aboutpage = () =>{
    return (
        <>
        <Slider />
        <Container className='About mb-20'>
            <Row className='h-10'>
                <Col className='Header text-center'>
                <h1 className="decorated"><span>О НАС</span></h1></Col>
            </Row>
            <Row>
                <Col className='About-content col-6'>
                    <Col className='d-flex justify-content-center col-12'>
                        <img className='Footer-SVG align-self-center' src={logo} alt=''/>
                    </Col>
                    <Col className='col-12 d-flex align-items-center'>
                        <p>BAR STUDIO — намного больше, чем просто студия красоты. Это место, где Вам помогут найти свой собственный, неповторимый стиль. Стоит довериться нашим мастерам один раз, и, поверьте, новый образ не оставит Вас равнодушным. Стиль и красота — это наш профиль, и мы уверены, что наши мастера делают это лучше всех. Как сказал однажды знаменитый Ральф Лорен: «Какой бы Вы образ жизни ни вели, у вас должен быть свой собственный стиль, свой собственный мир».</p>
                    </Col>
                    <Col className='col-12'></Col>
                </Col>
                <Col className='About-img col-6' style={{height: "400px"}}>
                    <Carousel className='d-flex align-items-center justify-content-center' style={{height: "400px"}}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 h-100"
                            style={{maxHeight: "400px", width:"100%", height: "100%", objectFit: 'contain'}}
                            src={Aboutslider1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 h-100"
                            style={{maxHeight: "400px",  height: "400px", objectFit: 'contain'}}
                            src={Aboutslider2}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 h-100"
                            style={{maxHeight: "400px",  height: "400px", objectFit: 'contain'}}
                            src={Aboutslider3}
                            alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>

        <Teampage />

        <Container fluid style={{ marginTop: "40px", marginBottom: "50px"}}>
            <Row>
                <Col className='Header text-center'>Выбирая нас Вы можете быть уверены в 3-х вещах:</Col>
            </Row>
            <Row className='d-flex justify-content-between flex-column flex-md-row text-center mt-5'>
                <Col className=''>
                    <div className="About-container ">
                        <img alt="employee" style={{marginLeft: "5px"}} src={coffee}/>
                        <div className=''>
                            <h4 style={{marginTop: "20px"}}>Уют</h4>
                            <p>ВАМ ОБЯЗАТЕЛЬНО ПРЕДЛОЖАТ ЧАШЕЧКУ АРОМАТНОГО КОФЕ ИЛИ ЧАЯ</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="About-container">
                        <img alt="employee" src={medal}/>
                        <div className=''>
                            <h4 style={{marginTop: "20px"}}>Качество</h4>
                            <p>РАБОТАЕМ ТОЛЬКО НА ПРОФЕССИОНАЛЬНЫХ МАТЕРИАЛАХ</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="About-container">
                        <img alt="employee" src={best} />
                        <div className=''>
                            <h4 style={{marginTop: "20px"}}>Результат</h4>
                            <p>ВЫ НЕ УСПЕЕТЕ ЗАМЕТИТЬ, КАК СНОВА ЗАХОТИТЕ ВЕРНУТЬСЯ К НАМ</p>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
        </>
    )
}

export {Aboutpage};