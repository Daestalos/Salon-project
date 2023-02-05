import { Container, Row, Col, Button, Form, Accordion } from 'react-bootstrap';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import notfoto from '../pages/img/nofoto.png'
import { Servicepage } from './Servicepage';
import { Teampage } from './Teampage';
import InputMask from 'react-input-mask';
import "../Homepage.css";


const Homepage = () =>{

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts();
    }, []);

    function getPosts () {
        axios.get('http://localhost/api/news.php')
        .then(function(response) {
            console.log(response.data);
            setPosts(response.data);
        });
    }

    const [training, setTraining] = useState([]);

    useEffect(() => {
        getTraining();
    }, []);

    function getTraining () {
        axios.get('http://localhost/api/training.php')
        .then(function(response) {
            console.log(response.data);
            setTraining(response.data);
        });
    }


    const [inputs, setInputs] = useState({});
    const [answer, setAnswer] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        setInputs(values => ({...values, [name]: value}));
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();

        setAnswer('Ваше сообщение успешно отправлено! В скором времени с вами свяжутся.');
        setTimeout(() => {
            setAnswer('');
        }, 5000);
    }

    return (
        <>
            <Servicepage />
            <Teampage />

            <Container className='mb-20'>
            <Row className='h-10'>
                <Col className='Header text-center'>
                     
                    <h1 className="decorated"><span>Наши курсы </span></h1>      
                </Col>
            </Row>

            <Accordion>
                {
                    training.map( training => (
                        <Accordion.Item key={training.id} eventKey={training.id}>
                            <Accordion.Header>{training.title}</Accordion.Header>
                            <Accordion.Body>
                                <h2>{`${training.price} BYN`}</h2>
                                <p>{`Преподаватель мастер ${training.name}`}</p>
                                <p>{`Продолжительность ${training.length} дня`}</p>
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

            <Container className='News mb-20' fluid>
                <Row className='h-10'>
                        <Col className='News-Header text-center'>
                            <h1 className="decorated-white"><span>Новости BAR Studio</span></h1>    
                        </Col>
                    </Row>
                    <Row className='News d-md-flex justify-content-center justify-content-sm-start align-items-start h-80'>
                        
                    {
                    posts.slice(-3).map(post => (
                        <Col className=" mb-5 col-12 col-sm-6 col-md-4 col-xl-4" sm={{ height: "300px"}}>
                        <div className="News-container">
                            <Col className='d-flex justify-content-center p-5'>
                                <img src={post.img === null ? notfoto : post.img} alt="employee" />
                            </Col>
                            
                            <div className='News-person'>
                                <h4>{post.header}</h4>
                                <p>{post.text.slice(0, 100) + ' ...'}</p>
                                <div className='News-button d-flex justify-content-center pb-4'>
                                    <Link key={post.id} to={`/posts/${post.id}`}>
                                        <Button variant="primary">Узнать больше</Button>{' '}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </Col>
                    ))
                    }

                    </Row>
                    <Row className='justify-content-center text-center'>
                        <Col className='mb-5'>
                            <Link to={`/posts`}>
                                <Button size="lg" variant="primary">Читайте все новости</Button>{' '}
                            </Link>
                        </Col>
                    </Row>
            </Container>

            
            <Container className='mb-20' fluid>
                <Row className='h-10'>
                    <Col className='Header text-center'>
                    <h1 className="decorated"><span>Наше местоположение</span></h1> 
                        
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

            <Container className='Contacts mb-20' fluid>
                <Row className='h-10'>
                    <Col className='Header text-center'>
                    <h1 className="decorated"><span>Мы рады Вашим вопросам и предложениям </span></h1> 
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center h-100'>
                    <Col className='col-4'>
                        <Col className='text-center'>НАШИ КОНТАКТЫ</Col>
                        <Col className=''>
                        <p>Мы находимся по адресу:</p>
                        <p>г. Могилев, ул. Первомайская, 2</p>
                        <p>Наш телефон для связи:</p>
                        <p>8 (029) 114-11-54</p>
                    </Col>
                    </Col>
                    <Col className='Contacts-Form col-4'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ваша почта</Form.Label>
                                <Form.Control type="email" placeholder="Почта для связи с вами" required onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Ваш телефон</Form.Label>
                                <Form.Control as={InputMask} type="tel" mask="8(999) 999-99-99" placeholder="(029) 111-11-11" required onChange={handleChange}/>
                                <Form.Text className="text-muted">
                                Телефон для связи с вами
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Ваше сообщение</Form.Label>
                                <Form.Control type="text" placeholder="Хочу уточнить вас о услуге..." required onChange={handleChange}/>
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