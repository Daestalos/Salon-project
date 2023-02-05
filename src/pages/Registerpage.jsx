import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Slider } from '../components/Slider';
import InputMask from 'react-input-mask';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registerpage = () =>{

    const [inputs, setInputs] = useState({})
    const [answerWrong, setAnswerWrong] = useState('')
    const [answerCorrect, setAnswerCorrect] = useState('')
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        
        if (inputs.password !== inputs.repeatpassword) {
            setAnswerWrong('Пароли не совпадают');
        }
        if (inputs.password === inputs.repeatpassword) {
            setAnswerWrong('');
            axios.post('http://localhost/api/users.php', inputs);

            setAnswerCorrect('Запись успешно добавлена!');
            setTimeout(() => {
                navigate('/login')
            }, 3000);
        }  
    }
    


    return (
        <>
        <Slider/>
        <Container className='mb-20' fluid>
            <Row className='h-10'>
            <Col className='Header text-center'>
                <h1 className="decorated"><span>Регистрация аккаунта</span></h1> 
            </Col>
            </Row>
            <Row className='Login '>
                <Col className='d-flex justify-content-center align-items-center'>
                    <Form className='rounded p-4 p-sm-3' onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Ваше имя:</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Как вас зовут" required onChange={handleChange}/>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ваша почта:</Form.Label>
                            <Form.Control type="email" name='email' placeholder="example@gmail.com" required onChange={handleChange}/>
                            <Form.Text className="text-muted">
                            Никогда не передавайте вашу почту кому-то еще
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicTel">
                            <Form.Label>Ваш номер телефона:</Form.Label>
                            <Form.Control as={InputMask} type="tel" name="phone" mask="+375 (999) 999-99-99" required onChange={handleChange}/>
                            <Form.Text className="text-muted">
                            Телефон формата: +375 (xxx) xxx xxxx
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassworn">
                            <Form.Label>Ваш пароль:</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Укажите пароль" required onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
                            <Form.Label>Повторите пароль:</Form.Label>
                            <Form.Control type="password" name="repeatpassword" placeholder="Повторите пароль" required onChange={handleChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" className='m-3'>
                            Зарегистрироваться
                        </Button> 
                        <Link to={`/login`}>
                            <Button variant="primary">Я уже зарегистрирован</Button>{' '}
                        </Link>
                        <Col>
                        <Form.Text style={{color: "#ff0000", fontSize: "25px", marginLeft: "10px"}}>
                            {answerWrong}
                        </Form.Text>
                        <Form.Text style={{color: "green", fontSize: "25px", marginLeft: "10px"}}>
                            {answerCorrect}
                        </Form.Text>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export {Registerpage};