import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Slider } from '../components/Slider';
import { useAuth } from '../hook/useAuth';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Loginpage = () =>{
    const navigate = useNavigate();
    const location = useLocation();

    const [inputs, setInputs] = useState({})
    const [answerWrong, setAnswerWrong] = useState('')
    const [answerCorrect, setAnswerCorrect] = useState('')
    const [serverdata, setServerData] = useState('')
    const {signin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`http://localhost/api/login.php`, inputs).then(function(response) {
            let data = response.data
            if (!data[0]) {
                setAnswerWrong('Данные введены неверно')
                setTimeout(() => {
                    setAnswerWrong('')
                }, 5000)
            } else {
                // data[0] - 1 элемент массива
                signin(data[0], () => navigate(fromPage, {replace: true}))
            }
        });

        // получаем форму 
        // const form = event.target;
        // // забираем то значение, которое введет пользователь
        // const user = form.email.value;
        // signin(user, () => navigate(fromPage, {replace: true}))
    }


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    return (
        <>
        <Slider />
        <Container className='mb-20' fluid>
        <Row className='h-10'>
            <Col className='Header text-center'>
            <h1 className="decorated"><span>Вход в аккаунт</span></h1> 
            </Col>
        </Row>
        <Row className='Login '>
            <Col className='d-flex justify-content-center align-items-center'>
                <Form className='rounded p-4 p-sm-3' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Логин:</Form.Label>
                        <Form.Control type="email" name='email' placeholder="example@gmail.com" required onChange={handleChange}/>
                        <Form.Text className="text-muted">
                        Никогда не передавайте вашу почту кому-то еще
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassworn">
                        <Form.Label>Пароль:</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Пароль" required onChange={handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className='m-3'>
                        Войти
                    </Button> 
                    <Link to={`/register`}>
                        <Button variant="primary">Я не зарегистрирован</Button>{' '}
                    </Link>
                    <Col>
                    <Form.Text style={{color: "#ff0000", fontSize: "20px", marginLeft: "10px"}}>
                        {answerWrong}
                    </Form.Text>
                    <Form.Text style={{color: "green", fontSize: "20px", marginLeft: "10px"}}>
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

export {Loginpage};