    import { Container, Row, Col, Button, Accordion, Form } from 'react-bootstrap';
    import { useState, useEffect } from 'react';
    import axios from 'axios';
    import { Slider } from '../components/Slider';
    import InputMask from 'react-input-mask';

    const Trainingpage = () =>{

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

        return (
            <>
            <Slider />
            <Container className='mb-20'>
                <Row className='h-10'>
                    <Col className='Header text-center'>
                    <h1 className="decorated"><span>Наши курсы</span></h1> 
                         
                    </Col>
                </Row>

                <Accordion className='mb-5'>
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

            </Container>
            <Container className='Training-Reg mb-20' fluid>
                    <Row className='h-10'>
                        <Col className='Training-Reg-Header text-center'> Записаться на курсы </Col>
                    </Row>
                    <Row className='d-flex flex-column flex-sm-row justify-content-center h-100'  style={{}}>
                        <Col className='com-10 col-sm-4 p-3' style={{background: "white", borderRadius: "8px 0px 0px 0px"}}>
                            <Col className='text-center col-12'>НАШИ КОНТАКТЫ</Col>
                            <Col className='col-12 h-100 d-flex flex-column mt-3'>
                            <p>Мы находимся по адресу:</p>
                            <p>г. Могилев, ул. Первомайская, 2</p>
                            <p>Наш телефон для связи:</p>
                            <p>8 (029) 114-11-54</p>
                        </Col>
                        </Col>
                        <Col className='com-10 col-sm-4 p-3 h-100' style={{background: "white", borderRadius: "0px 8px 0px 0px"}}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Ваша почта</Form.Label>
                                    <Form.Control type="email" placeholder="Почта для связи с вами" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <Form.Label>Ваш телефон</Form.Label>
                                    <Form.Control as={InputMask} type="tel" mask="8(999) 999-99-99" placeholder="(029) 111-11-11" />
                                    <Form.Text className="text-muted">
                                    Телефон для связи с вами
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>Ваше сообщение</Form.Label>
                                    <Form.Control type="text" placeholder="Хочу уточнить вас о услуге..." />
                                </Form.Group>
                                <Form.Group className="d-flex justify-content-center" controlId="formBasicText">
                                    <Button variant="primary" type="submit" className='m-3'>
                                        Связаться с нами
                                    </Button>
                                </Form.Group>

                            </Form>
                        </Col>
                    </Row>
                </Container>
        
        </>

        )
    }

    export {Trainingpage};