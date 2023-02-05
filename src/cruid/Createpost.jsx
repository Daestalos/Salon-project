import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { Slider } from '../components/Slider';
import { useNavigate } from 'react-router-dom';


function Createpost() {

  const [inputs, setInputs] = useState({})
  const [answer, setAnswer] = useState('')
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({...values, [name]: value}));

  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    
    axios.post('http://localhost/api/news.php', inputs);

    setAnswer('Запись успешно добавлена!');
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
              <Col className='Header text-center'>Создание поста</Col>
          </Row>
          <Row className='Login '>
              <Col className='d-flex justify-content-center align-items-center'>
                  <Form className='rounded p-4 p-sm-3' onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Изображение поста:</Form.Label>
                          <Form.Control type="text" name='img' required placeholder="Ссылка на изображение" onChange={handleChange}/>
                          <Form.Text className="text-muted">
                            IMG в формате ссылки на картинку
                          </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicHeader">
                          <Form.Label>Заголовок поста:</Form.Label>
                          <Form.Control type="text" name="header" required placeholder="Заголовок" onChange={handleChange}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicText">
                          <Form.Label>Текст поста:</Form.Label>
                          <Form.Control type="text" name="text" required placeholder="Текст" onChange={handleChange}/>
                      </Form.Group>

                      <Button variant="primary" type="submit" className='m-3'>
                          Добавить
                      </Button> 
                      <Form.Text style={{color: "green!important", fontSize: "15px"}}>
                            {answer}
                      </Form.Text>
                  </Form>
              </Col>
          </Row>
        </Container>
    </>
  );
}

export { Createpost };
