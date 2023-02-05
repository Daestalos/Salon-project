import { useParams, useNavigate} from "react-router-dom";
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Slider } from '../components/Slider';


function Editmasters() {
  const {id} = useParams();  
  const [inputs, setInputs] = useState({})
  const [category, setCategory] = useState([]);
  const [answer, setAnswer] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
      getMasters();
  }, []);


  function getMasters () {
      axios.get(`http://localhost/api/masters.php/${id}`)
      .then(function(response) {
          console.log(response.data);
          setInputs(response.data);
      });
  }

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
    
    axios.put(`http://localhost/api/masters.php/${id}`, inputs);

    setAnswer('Запись успешно обновлена!');
    setTimeout(() => {
      navigate('/admin');
      setAnswer('');
    }, 2000);

    console.log(inputs);
  }



    return (
      <>  
        <Slider />
        <Container className='mb-20' fluid>
          <Row className='h-10'>
              <Col className='Header text-center'>Редактирование маcтера {id}</Col>
          </Row>
          <Row className='Login '>
              <Col className='d-flex justify-content-center align-items-center'>
                  <Form className='rounded p-4 p-sm-3' onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasic">
                          <Form.Label>Изображение мастера:</Form.Label>
                          <Form.Control value={inputs.img} type="text" name='img' placeholder="Ссылка на изображение" onChange={handleChange}/>
                          <Form.Text className="text-muted">
                            IMG в формате ссылки на картинку
                          </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasic">
                          <Form.Label>Имя маcтера:</Form.Label>
                          <Form.Control value={inputs.title} type="text" name="title" placeholder="Имя" onChange={handleChange}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasic">
                          <Form.Label>Описание мастера:</Form.Label>
                          <Form.Control value={inputs.text} type="text" name="text" placeholder="Описание мастера" onChange={handleChange}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasic">
                        <Form.Label>Категория мастера:</Form.Label>
                        <Form.Select value={inputs.category_id} name="category_id" onChange={handleChange}>
                        {
                            category.map(category => (
                              <option value={category.id}>{`${category.id} - ${category.name}`}</option>
                            ))
                          }
                        </Form.Select>
                      </Form.Group>

                      <Button variant="primary" type="submit" className='m-3'>
                          Редактировать
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
  
  export { Editmasters };
  