import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Slider } from '../components/Slider';
import { useNavigate } from 'react-router-dom';


function Createservice() {

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
    
    axios.post('http://localhost/api/services.php', inputs);

    setAnswer('Запись успешно добавлена!');
    setTimeout(() => {
      // navigate('/admin')
      setAnswer('');
    }, 2000);

    console.log(inputs);

  }



  return (
    <>  
    <Slider />
    <Container className='mb-20' fluid>
      <Row className='h-10'>
          <Col className='Header text-center'>Создание новой услуги</Col>
      </Row>
      <Row className='Login'>
          <Col className='d-flex justify-content-center align-items-center'>
              <Form className='rounded p-4 p-sm-3' onSubmit={handleSubmit}>

                  <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Категория услуги:</Form.Label>
                    <Form.Select name="category_id" onChange={handleChange}>
                    {
                        category.map(category => (
                          <option value={category.id}>{`${category.id} - ${category.name}`}</option>
                        ))
                      }
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasic">
                      <Form.Label>Название категории услуги:</Form.Label>
                      <Form.Control type="text" name='title' placeholder="Пример: Мастер-бровист" required onChange={handleChange}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasic">
                      <Form.Label>Название услуги:</Form.Label>
                      <Form.Control type="text" name="text" placeholder="Название услуги" required onChange={handleChange}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasic">
                      <Form.Label>Цена услуги:</Form.Label>
                      <Form.Control type="text" name="price" placeholder="Цена услуги" required onChange={handleChange}/>
                  </Form.Group>



                  <Button variant="primary" type="submit" className='m-1'>
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

export { Createservice };
