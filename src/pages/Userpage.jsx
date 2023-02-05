import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Tab, Tabs, Table } from 'react-bootstrap';
import axios from 'axios';
import { Slider } from "../components/Slider";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

const Userpage = () =>{

const {user} = useAuth();
const navigate = useNavigate();
const {id} = useParams();
const [record, setRecord] = useState([])

if (user.id != id){
    navigate(`/login`);
}

useEffect(() => {
    getRecord();
}, []);

function getRecord() {
    axios.get(`http://localhost/api/userprofile.php`)
    .then(function(response) {
        console.log(response.data);
        setRecord(response.data);
    });
}

const deleteRecord = (id) => {
    axios.delete(`http://localhost/api/userprofile.php/${id}`).then(function(response){
        console.log(response.data);
        getRecord();
    })
}

// Получение мастеров
const [masters, setMasters] = useState([]);

useEffect(() => {
    getMasters();
}, []);

function getMasters () {
    axios.get('http://localhost/api/masters.php')
    .then(function(response) {
        console.log(response.data);
        setMasters(response.data);
    });
}

// Получение категорий
const [category, setCategory] = useState([]);

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

// получение услуг
const [services, setServices] = useState([]);

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

return (
<>
<Slider />
        <Container className='Admin mb-20' fluid>
            <Row className=''>
                <Col className='Header text-center col-12'>
                <h1 className="decorated"><span>Добро пожаловать, {user.name}</span></h1> 
                    
                </Col>
                {/* <Col className='text-center col-12' style={{marginTop: "20px", marginBottom: "35px"}}><Button onClick={() => signout()} variant="primary" size="lg">Выйти из пользователя</Button>{' '}</Col> */}
            </Row>
            <Row className=''>
                <Tabs defaultActiveKey="Records" id="fill-tab-example" className="mb-3" fill>
                    {/* Администрирование новостей */}
                    <Tab eventKey="Records" title="Записи">
                        <Row className='w-100'>
   

                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                    <th>Категория услуги</th>
                                    <th>Услуга</th>
                                    <th>Мастер</th>
                                    <th>Дата услуги</th>
                                    <th>Время</th>
                                    <th>Удалить</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    record.filter(e => e.user_id === +id).map(records => (
                                        <tr>
                                            {
                                                category.filter(e => e.id == records.category_id).map( category =>(
                                                <td>{category.name}</td>
                                                ))
                                            }
                                            {
                                                services.filter(e => e.id == records.services_id).map( services =>(
                                                <td>{services.title}</td>
                                                ))
                                            }
                                            {
                                                masters.filter(e => e.id == records.masters_id).map( masters =>(
                                                <td>{masters.name}</td>
                                                ))
                                            }
                                            <td>{records.date}</td>
                                            <td>{records.time}</td>
                                            <td>
                                                <Button onClick={() => deleteRecord(records.id)} variant="primary" size="sm">Удалить запись</Button>{' '}
                                            </td>
                                        </tr>
                                    ))
                                }   
                                </tbody>
                            </Table>
                            <Col className='d-flex justify-content-center'>
                                <Link to={`/regservice/new`}>
                                    <Button variant="primary" size="lg" className='m-3'>Записаться на услугу</Button>{' '}
                                </Link>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
                
            </Row>
        </Container>
        </>


)
}

export {Userpage};