import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Slider } from '../components/Slider';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../hook/useAuth";

function Createrecord() {
  const {user} = useAuth();
  const [category, setCategory] = useState([]);
  const [services, setServices] = useState([]);
  const [masters, setMasters] = useState([]);

  const [inputs, setInputs] = useState({})
  const [answer, setAnswer] = useState('')

  const [selectServices, setSelectServices] = useState([]);

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

  useEffect(() => {
    getServices();
  }, []);

  function getServices() {
    axios.get('http://localhost/api/services.php')
    .then(function(response) {
        console.log(response.data);
        setServices(response.data);
    });
  }

  useEffect(() => {
    getMasters();
  }, []);

  function getMasters() {
    axios.get('http://localhost/api/masters.php')
    .then(function(response) {
        console.log(response.data);
        setMasters(response.data);
    });
  }




  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values=> ({...values, "user_id": user.id}));
    setInputs(values => ({...values, [name]: value}));

    console.log(value);
    console.log(inputs);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    
    axios.post('http://localhost/api/regservices.php', inputs);

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
          <Col className='Header text-center'>Регистрация на услугу</Col>
      </Row>
      <Row className='Login '>
          <Col className='d-flex justify-content-center align-items-center'>
              <Form className='rounded p-4 p-sm-3' onSubmit={handleSubmit}>

                  <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Выберите категорию:</Form.Label>
                    <Form.Select name="category_id" required onChange={handleChange}>  
                    <option value="" selected disabled hidden>Выберите категорию</option> 
                    {
                        category &&
                        category !== undefined ?                      
                        category.map(category => (
                          <option key={category.id} value={category.id}>{`${category.name}`}</option>
                        ))
                        : "Нет категории"
                    }
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Выберите услугу:</Form.Label>
                    <Form.Select name="services_id" required onChange={handleChange}>
                    <option value="" selected disabled hidden>Выберите услугу</option> 
                    {                    
                        services.filter(e => e.category_id === +inputs.category_id).map(services => (
                          <option value={services.id}>{`${services.text}`}</option>
                        ))
                    }
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Выберите мастера:</Form.Label>
                    <Form.Select name="masters_id" required onChange={handleChange}>
                    <option value="" selected disabled hidden>Выберите мастера</option> 
                    {
                        masters.filter(e => e.category_id === +inputs.category_id).map(masters => (
                          <option value={masters.id}>{`${masters.name}`}</option>
                        ))
                      }
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasic">
                      <Form.Label>Выберите дату:</Form.Label>
                      <Form.Control type="date" min={new Date().toISOString().slice(0, 10)} name="date" onChange={handleChange}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasic">
                      <Form.Label>Выберите время:</Form.Label>
                      <Form.Select name="time"  required onChange={handleChange}>
                        <option value="" selected disabled hidden>Выберите время</option>
                        <option value="09:00:00">09:00</option>
                        <option value="10:00:00">10:00</option>
                        <option value="11:00:00">11:00</option>
                        <option value="12:00:00">12:00</option>
                        <option value="13:00:00">13:00</option>
                        <option value="14:00:00">14:00</option>
                        <option value="15:00:00">15:00</option>
                        <option value="16:00:00">16:00</option>
                        <option value="17:00:00">17:00</option>
                        <option value="18:00:00">18:00</option>
                        <option value="19:00:00">19:00</option>
                        <option value="20:00:00">20:00</option>
                      </Form.Select>
                  </Form.Group>


                  <Col className='d-flex justify-content-center'>
                  <Button variant="primary" type="submit" className='m-3'>
                      Зарегистрироваться на услугу
                  </Button> 
                  </Col>
                  <Col className='d-flex justify-content-center'>
                    <Form.Text style={{color: "green", fontSize: "30px"}}>
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

export { Createrecord };
