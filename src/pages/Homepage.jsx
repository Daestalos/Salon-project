import { Container, Row, Col, Button, Form, Accordion } from 'react-bootstrap';
import { useState} from "react";
import { Link } from "react-router-dom";

import InputMask from 'react-input-mask';
import "../css/Homepage.css";

// Components
import { Teampage } from './Teampage';
import { Slider } from '../components/Slider';
import { ServiceComponent } from '../components/ServiceComponent';
import { AboutComponent } from '../components/AboutComponent';
import { useAuth } from "../hook/useAuth";
import { SwiperComponent } from '../components/SwiperComponent';
import { SwiperInstagram } from '../components/SwiperInstagram';

const Homepage = () =>{

    const { serviceData, employeeData, setMail, mail, sendMail} = useAuth();

    let getEmployee = (id) => {
        return employeeData.filter( item => item.id == id).map( item => item.name)
    };

    let getTimeFromMins = (seconds) =>  {
        let minutes = seconds / 60,
            hours = minutes / 60;

        return `${Math.floor(hours % 24)}ч ${Math.floor(minutes % 60)}м` 

    };

    // Send Mail

    const [answer, setAnswer] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMail(values => ({...values, [name]: value}));
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        mail['subject'] = 'Обратная связь. Вопрос/Предложение'

        sendMail();
        setAnswer('Ваше сообщение успешно отправлено! В скором времени с вами свяжутся.');

        setTimeout(() => {
            setAnswer('');
        }, 10000);
    }


    return (
        <>  
            <Slider />
            <AboutComponent />
            <ServiceComponent />
            <Teampage />


            <Container className='mb-20'>
                <Row className='h-10'>
                    <Col className='Header text-center'>
                        <h2 className="decorated"><span>Наши курсы </span></h2>      
                    </Col>
                </Row>
                <Accordion>
                {
                    serviceData.filter(item => item.category_id == 11472068).map( training => (
                        <Accordion.Item key={training.id} eventKey={training.id}>
                            <Accordion.Header>{training.title}</Accordion.Header>
                            <Accordion.Body>
                                <h2>{`${training.price_max} BYN`}</h2>
                                <p>{`Преподаватель мастер ${getEmployee(training.staff.map( item => item.id))}`}</p>
                                <p>{`Продолжительность курса ${getTimeFromMins(training.staff.map( item => item.seance_length))}`}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                }
                </Accordion>
                <Row className='justify-content-center text-center'>
                    <Col className='mb-3 mt-3'>
                        <Link to={`/training`}>
                            <Button size="lg" variant="primary">Записаться на курс</Button>{' '}
                        </Link>
                    </Col>
                </Row>
            </Container>

            <SwiperComponent />


            <Container className='mb-20' fluid>
                <Row className='h-10'>
                    <Col className='Header text-center'>
                    <h2 className="decorated"><span>Наше местоположение</span></h2> 
                        
                    </Col>
                </Row>
                <Row>
                    <Col><iframe
                     src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a06fd3012847bdc92446e6e74cd497e7570af1889b25c1726f509d298b583a9&amp;source=constructor"
                     style={{width: "100%", height: "500px", frameborder: "0"}}
                     title="myFrame"
                     />
                     </Col>
                </Row>
            </Container>

            <Container className='News mb-20' fluid>
                <Row className='h-10'>
                        <Col className='News-Header text-center'>
                            <h2 className="decorated-white"><span>Новости BAR Studio</span></h2>    
                        </Col>
                    </Row>

                    <SwiperInstagram />

                    <Row className='justify-content-center text-center'>
                        <Col className='mb-5 pt-4'>
                                <Button href="https://www.instagram.com/bar_studio.mogilev/?hl=ru" size="lg" variant="primary">Следите за нами в Instagram!</Button>{' '}
                        </Col>
                    </Row>
            </Container>

            <Container className='Contacts mb-20' fluid>
                <Row className='h-10'>
                    <Col className='Header text-center'>
                    <h2 className="decorated"><span>Мы рады Вашим вопросам и предложениям </span></h2> 
                    </Col>
                </Row>
                <Row className='d-flex flex-column flex-md-row justify-content-center h-100'>
                    <Col className='col-12 col-md-4 d-flex flex-column d-md-block align-items-center align-items-md-start col-lg-5 col-xxl-4'>
                        <Col className='Contacts-header text-center'>НАШИ КОНТАКТЫ</Col>
                        <Col className='Contacts-header mt-3'>
                            <p>Мы находимся по адресу:</p>
                            <p>г. Могилев, ул. Первомайская, 2</p>
                            <p>Наш телефон для связи:</p>
                            <p>8 (029) 114-11-54</p>
                            <p>Мы с вами обязательно свяжемся!</p>
                        </Col>
                    </Col>
                    <Col className='Contacts-Form col-12 col-md-6 col-xxl-4'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ваша почта</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Почта для связи с вами" required onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Ваш телефон</Form.Label>
                                <Form.Control as={InputMask} name="tel" type="tel" mask="8(999) 999-99-99" placeholder="(029) 111-11-11" required onChange={handleChange}/>
                                <Form.Text className="text-muted">
                                Телефон для связи с вами
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Ваше сообщение</Form.Label>
                                <Form.Control name="text" type="text" placeholder="Хочу уточнить вас о услуге..." required onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-center" controlId="formBasicText">
                                <Button variant="primary" type="submit" className='m-3'>
                                    Связаться с нами
                                </Button>
                            </Form.Group>
                            <Col>
                                <Form.Text style={{color: "green!important", fontSize: "15px"}}>
                                    {answer}
                                </Form.Text>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export {Homepage};