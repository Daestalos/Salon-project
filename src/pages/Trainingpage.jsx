import { Container, Row, Col, Button, Accordion, Form } from 'react-bootstrap';
import { Slider } from '../components/Slider';
import InputMask from 'react-input-mask';
import { useAuth } from "../hook/useAuth";
import { useState} from "react";


const Trainingpage = () =>{

    const { serviceData, employeeData, setMail, mail, sendMail } = useAuth();

    let getEmployee = (id) => {
        return employeeData.filter( item => item.id === id).map( item => item.name)
    };

    let getTimeFromMins = (seconds) =>  {
        let minutes = seconds / 60,
            hours = minutes / 60;

        return `${Math.floor(hours % 24)}ч ${Math.floor(minutes % 60)}м` 
    };

    // Email

    const [answer, setAnswer] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMail(values => ({...values, [name]: value}));
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        mail['subject'] = 'Обратная связь. Вопрос по курсам'

        sendMail();
        setAnswer('Ваше сообщение успешно отправлено! В скором времени с вами свяжутся.');

        setTimeout(() => {
            setAnswer('');
        }, 10000);
    }

    return (
        <>
        <Slider />
        <Container className='mb-20'>
            <Row className='h-10'>
                <Col className='Header text-center'>
                <h2 className="decorated"><span>Наши курсы</span></h2> 
                        
                </Col>
            </Row>

            <Accordion className='mb-5'>
                {
                    serviceData.filter(item => item.category_id === 11472068).map( training => (
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

        </Container>
        <Container className='Training-Reg mb-20' fluid>
                <Row className='h-10'>
                    <Col className='Training-Reg-Header text-center'> Записаться на курсы </Col>
                </Row>
                <Row className='d-flex flex-column flex-sm-row justify-content-center h-100' style={{ paddingBottom: "50px"}}>
                    <Col className='com-10 col-sm-5 col-lg-4 p-3' style={{background: "white", borderRadius: "8px 0px 0px 8px"}}>
                        <Col className='Contacts-header text-center col-12'>НАШИ КОНТАКТЫ</Col>
                        <Col className='Contacts-header col-12 h-100 d-flex flex-column mt-3'>
                        <p>Мы находимся по адресу:</p>
                        <p>г. Могилев, ул. Первомайская, 2</p>
                        <p>Наш телефон для связи:</p>
                        <p>8 (029) 114-11-54</p>
                        <p>Мы с вами обязательно свяжемся!</p>
                        </Col>
                    </Col>
                    <Col className='com-10 pt-5 col-sm-6 col-lg-4 p-3 h-100' style={{background: "white", borderRadius: "0px 8px 8px 0px"}}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ваша почта</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Почта для связи с вами" required onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Ваш телефон</Form.Label>
                                <Form.Control name='tel' as={InputMask} type="tel" mask="8(999) 999-99-99" placeholder="(029) 111-11-11" required onChange={handleChange}/>
                                <Form.Text className="text-muted">
                                Телефон для связи с вами
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Ваше сообщение</Form.Label>
                                <Form.Control name='text' type="text" placeholder="Хочу уточнить информацию о курсах!" required onChange={handleChange}/>
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

export {Trainingpage};