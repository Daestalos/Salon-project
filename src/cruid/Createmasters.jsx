import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Slider } from '../components/Slider';
import { useNavigate } from 'react-router-dom';


function Createmasters() {

  const [inputs, setInputs] = useState({})
  const [answer, setAnswer] = useState('')
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getСategory();
  }, []);

  
  function getСategory() {
    axios.get('http://localhost/api/category.php')
    .then(function(response) {
        console.log(response.data);
        setCategory(response.data);
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({...values, [name]: value}));

  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    
    axios.post('http://localhost/api/masters.php', inputs);

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
          <Col className='Header text-center'>Создание нового мастера</Col>
      </Row>
      <Row className='Login '>
          <Col className='d-flex justify-content-center align-items-center'>
              <Form className='rounded p-4 p-sm-3' onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasic">
                      <Form.Label>Изображение мастера:</Form.Label>
                      <Form.Control type="text" name='img' placeholder="Ссылка на изображение" onChange={handleChange}/>
                      <Form.Text className="text-muted">
                        IMG в формате ссылки на картинку
                      </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasic">
                      <Form.Label>Имя маcтера:</Form.Label>
                      <Form.Control type="text" name="title" placeholder="Имя" required onChange={handleChange}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasic">
                      <Form.Label>Описание мастера:</Form.Label>
                      <Form.Control type="text" name="text" placeholder="Описание мастера" required onChange={handleChange}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Категория мастера:</Form.Label>
                    <Form.Select value={category.id} name="category_id" onChange={handleChange}>
                    {
                        category.map(category => (
                          <option value={category.id}>{`${category.id} - ${category.name}`}</option>
                        ))
                      }
                    </Form.Select>
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

export { Createmasters };
