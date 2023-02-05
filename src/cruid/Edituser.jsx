import { useParams, useNavigate} from "react-router-dom";
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Slider } from '../components/Slider';
import InputMask from 'react-input-mask';

function Edituser() {
  const {id} = useParams();  
  const [inputs, setInputs] = useState({})
  const [answer, setAnswer] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
      getPosts();
  }, []);


    function getPosts () {
        axios.get(`http://localhost/api/users.php/${id}`)
        .then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }




  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({...values, [name]: value}));

  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    
    axios.put(`http://localhost/api/users.php/${id}`, inputs);

    setAnswer('Запись успешно обновлена!');
    setTimeout(() => {
      navigate('/admin')
      setAnswer('');
    }, 2000);



    console.log(inputs);
  }

    return (
      <>  
        <Slider />
        <Container className='mb-20' fluid>
          <Row className='h-10'>
              <Col className='Header text-center'>Редактирование поста {id}</Col>
          </Row>
          <Row className='Login '>
              <Col className='d-flex justify-content-center align-items-center'>
                  <Form className='rounded p-4 p-sm-3' onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Имя пользователя:</Form.Label>
                          <Form.Control value={inputs.name} type="text" name='name' placeholder="Ссылка на изображение" onChange={handleChange}/>
                          <Form.Text className="text-muted">
                            IMG в формате ссылки на картинку
                          </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicHeader">
                          <Form.Label>Телефон пользователя:</Form.Label>
                          <Form.Control value={inputs.phone} as={InputMask} type="tel" mask="8(999) 999-99-99" name="phone" placeholder="(029) 111-11-11" onChange={handleChange}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicText">
                          <Form.Label>Почта пользователя:</Form.Label>
                          <Form.Control value={inputs.email} type="text" name="email" placeholder="Текст" onChange={handleChange}/>
                      </Form.Group>

                      
                      <Form.Group className="mb-3" controlId="formBasicText">
                          <Form.Label>Пароль:</Form.Label>
                          <Form.Control value={''} type="text" name="text" placeholder="Введите новый пароль, либо старый пароль" onChange={handleChange}/>
                      </Form.Group>

                      <Button variant="primary" type="submit" className='m-3'>
                          Добавить
                      </Button> 
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
    );
  }
  
  export { Edituser };
  