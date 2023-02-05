import { Container, Row, Col, Tabs, Tab, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Slider } from '../components/Slider';
import { useAuth } from '../hook/useAuth';
import { useNavigate } from "react-router-dom";

const Adminpage = () =>{

    const {user} = useAuth();
    const navigate = useNavigate();
    
    if (!user.isadmin){
        navigate(`/login`);
    }
    
    // Получение постов
    const [posts, setPosts] = useState([]);



    useEffect(() => {
        getPosts();
    }, []);

    function getPosts () {
        axios.get('http://localhost/api/news.php')
        .then(function(response) {
            console.log(response.data);
            setPosts(response.data);
        });
    }

    const deletePosts = (id) => {
        axios.delete(`http://localhost/api/news.php/${id}`).then(function(response){
            console.log(response.data);
            getPosts();
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
    
    const deleteMasters = (id) => {
        axios.delete(`http://localhost/api/masters.php/${id}`).then(function(response){
            console.log(response.data);
            getMasters();
        })
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
    
    const deleteCategory = (id) => {
        axios.delete(`http://localhost/api/category.php/${id}`).then(function(response){
            console.log(response.data);
            getСategory();
        })
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
    
    const deleteServices = (id) => {
        axios.delete(`http://localhost/api/services.php/${id}`).then(function(response){
            console.log(response.data);
            getServices();
        })
    }

    // получение пользователей
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/api/users.php')
        .then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
    
    const deleteUsers = (id) => {
        axios.delete(`http://localhost/api/users.php/${id}`).then(function(response){
            console.log(response.data);
            getUsers();
        })
    }

    // получение пользователей
    const [training, setTraining] = useState([]);

    useEffect(() => {
        getTraining();
    }, []);

    function getTraining() {
        axios.get('http://localhost/api/training.php')
        .then(function(response) {
            console.log(response.data);
            setTraining(response.data);
        });
    }
    
    const deleteTraining = (id) => {
        axios.delete(`http://localhost/api/training.php/${id}`).then(function(response){
            console.log(response.data);
            getTraining();
        })
    }


    const [record, setRecord] = useState([])

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

    

    return (
        <>
        <Slider />
        <Container className='Admin mb-20' fluid>
            <Row className=''>
                <Col className='Header text-center col-12'>
                <h1 className="decorated"><span>Администрирование</span></h1> 
                    
                </Col>
                {/* <Col className='text-center col-12' style={{marginTop: "20px", marginBottom: "35px"}}><Button onClick={() => signout()} variant="primary" size="lg">Выйти из пользователя</Button>{' '}</Col> */}
            </Row>
            <Row className=''>
                <Tabs defaultActiveKey="Posts" id="fill-tab-example" className="mb-3" fill>
                    {/* Администрирование новостей */}
                    <Tab eventKey="Posts" title="Новости">
                        <Row className='w-100'>
                            <Col className='d-flex justify-content-center'>
                                <Link to={`/posts/new`}>
                                    <Button variant="primary" size="lg" className='m-3'>Создать новый пост</Button>{' '}
                                </Link>
                            </Col>

                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                    <th>id</th>
                                    <th>Image src</th>
                                    <th>Header</th>
                                    <th>Text</th>
                                    <th>Created at</th>
                                    <th>Updated at</th>
                                    <th>Show</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        posts.map(post => (
                                            <tr>
                                            <td>{post.id}</td>
                                            <td>{post.img}</td>
                                            <td>{post.header}</td>
                                            <td>{post.text}</td>
                                            <td>{post.created_at}</td>
                                            <td>{post.updated_at}</td>
                                            <td>
                                                <Link key={post.id} to={`/posts/${post.id}`}>
                                                <Button variant="primary" size="sm">Show</Button>{' '}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link key={post.id} to={`/posts/${post.id}/edit`}>
                                                <Button variant="primary" size="sm">Edit</Button>{' '}
                                                </Link>
                                            </td>
                                            <td>
                                                <Button onClick={() => deletePosts(post.id)} variant="primary" size="sm">Delete</Button>{' '}
                                            </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </Table>
                        </Row>
                    </Tab>
                    {/* Администрирование команды */}
                    <Tab eventKey="Masters" title="Маcтера">
                        <Row className='w-100'>
                            <Col className='d-flex justify-content-center'>
                                <Link to={`/team/new`}>
                                    <Button variant="primary" size="lg" className='m-3'>Создать нового мастера</Button>{' '}
                                </Link>
                            </Col>

                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                    <th>id</th>
                                    <th>Image src</th>
                                    <th>Name</th>
                                    <th>Text</th>
                                    <th>Category_id</th>
                                    <th>Show</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        masters.map(master => (
                                            <tr>
                                            <td>{master.id}</td>
                                            <td>{master.img}</td>
                                            <td>{master.name}</td>
                                            <td>{master.text}</td>
                                            <td>{master.category_id}</td>
                                            <td>
                                                <Link key={master.id} to={`/team`}>
                                                <Button variant="primary" size="sm">Show</Button>{' '}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link key={master.id} to={`/team/${master.id}/edit`}>
                                                <Button variant="primary" size="sm">Edit</Button>{' '}
                                                </Link>
                                            </td>
                                            <td>
                                                <Button onClick={() => deleteMasters(master.id)} variant="primary" size="sm">Delete</Button>{' '}
                                            </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </Table>
                        </Row>
                    </Tab>
                    {/* Администрирование категорий */}
                    <Tab eventKey="Categories" title="Категории">
                        <Row className='w-100'>
                            <Col className='d-flex justify-content-center'>
                                <Link to={`/category/new`}>
                                    <Button variant="primary" size="lg" className='m-3'>Создать новую категорию</Button>{' '}
                                </Link>
                            </Col>

                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>Show</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        category.map(category => (
                                            <tr>
                                            <td>{category.id}</td>
                                            <td>{category.name}</td>
                                            <td>
                                                <Link to={`/service`}>
                                                <Button variant="primary" size="sm">Show</Button>{' '}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link key={category.id} to={`/category/${category.id}/edit`}>
                                                <Button variant="primary" size="sm">Edit</Button>{' '}
                                                </Link>
                                            </td>
                                            <td>
                                                <Button onClick={() => deleteCategory(category.id)} variant="primary" size="sm">Delete</Button>{' '}
                                            </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </Table>
                        </Row>
                    </Tab>
                    {/* Администрирование услуг */}
                    <Tab eventKey="Services" title="Услуги">
                        <Row className='w-100'>
                            <Col className='d-flex justify-content-center'>
                                <Link to={`/service/new`}>
                                    <Button variant="primary" size="lg" className='m-3'>Создать новую услугу</Button>{' '}
                                </Link>
                            </Col>

                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                    <th>id</th>
                                    <th>category_id</th>
                                    <th>title</th>
                                    <th>text</th>
                                    <th>price</th>
                                    <th>Show</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        services.map(services => (
                                            <tr>
                                            <td>{services.id}</td>
                                            <td>{services.category_id}</td>
                                            <td>{services.title}</td>
                                            <td>{services.text}</td>
                                            <td>{`${services.price} BYN`}</td>
                                            <td>
                                                <Link to={`/service`}>
                                                <Button variant="primary" size="sm">Show</Button>{' '}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link key={services.id} to={`/service/${services.id}/edit`}>
                                                <Button variant="primary" size="sm">Edit</Button>{' '}
                                                </Link>
                                            </td>
                                            <td>
                                                <Button onClick={() => deleteServices(services.id)} variant="primary" size="sm">Delete</Button>{' '}
                                            </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </Table>
                        </Row>
                    </Tab>
                    <Tab eventKey="Users" title="Пользователи">
                        <Row className='w-100'>
                            <Col className='d-flex justify-content-center'>
                                <Link to={`/register`}>
                                    <Button variant="primary" size="lg" className='m-3'>Создать нового пользователя</Button>{' '}
                                </Link>
                            </Col>

                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>phone</th>
                                    <th>email</th>
                                    <th>isadmin</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(users => (
                                            <tr>
                                            <td>{users.id}</td>
                                            <td>{users.name}</td>
                                            <td>{users.phone}</td>
                                            <td>{users.email}</td>
                                            <td>{users.isadmin}</td>
                                            <td>
                                                <Link key={users.id} to={`/user/${users.id}/edit`}>
                                                    <Button variant="primary" size="sm">Edit</Button>{' '}
                                                </Link>
                                            </td>
                                            <td>
                                                <Button onClick={() => deleteUsers(users.id)} variant="primary" size="sm">Delete</Button>{' '}
                                            </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </Table>
                        </Row>
                    </Tab>
                    <Tab eventKey="Training" title="Обучение">
                        <Row className='w-100'>
                            <Col className='d-flex justify-content-center'>
                                <Link to={`/training`}>
                                    <Button variant="primary" size="lg" className='m-3'>Создать новое обучение</Button>{' '}
                                </Link>
                            </Col>

                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                    <th>id</th>
                                    <th>title</th>
                                    <th>length</th>
                                    <th>price</th>
                                    <th>masters_id</th>
                                    <th>Show</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        training.map(training => (
                                            <tr>
                                            <td>{training.id}</td>
                                            <td>{training.title}</td>
                                            <td>{training.length}</td>
                                            <td>{training.price}</td>
                                            <td>{training.masters_id}</td>
                                            <td>
                                                <Link to={`/training`}>
                                                    <Button variant="primary" size="sm">Show</Button>{' '}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link key={training.id} to={`/training/${training.id}/edit`}>
                                                    <Button variant="primary" size="sm">Edit</Button>{' '}
                                                </Link>
                                            </td>
                                            <td>
                                                <Button onClick={() => deleteTraining(users.id)} variant="primary" size="sm">Delete</Button>{' '}
                                            </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </Table>
                        </Row>
                    </Tab>

                    <Tab eventKey="Records" title="Записи">
                        <Row className='w-100'>
   

                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Пользователь</th>
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
                                    record.map(records => (
                                        <tr>
                                            {
                                                users.filter(e => e.id == records.user_id).map( users =>(
                                                <td>{users.email}</td>
                                                ))
                                            }
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

export {Adminpage};