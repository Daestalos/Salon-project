import { Container, Row, Col, Tabs, Tab, Button } from 'react-bootstrap';
import { Slider } from '../components/Slider';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Servicepage = () =>{

    const [category, setCategory] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        getСategory();
    }, []);



    function getСategory() {
        axios.get('http://localhost/api/category.php')
        .then(function(response) {
            console.log(response.data);
            setCategory(response.data);
        })
        .then(
        axios.get('http://localhost/api/services.php')
        .then(function(response) {
            console.log(response.data);
            setServices(response.data);
        })
        )

    }



    useEffect(() => {
        getServices();
    }, []);

    function getServices() {

    }



    return (
        <>
        <Slider />
        <Container className='Service'>
        <Row className='h-10'>
            <Col className='Header d-flex text-center justify-content-center'>
                <h1 className="decorated"><span>Наши услуги</span></h1> 
            </Col>
        </Row>
        <Row className='h-80'>
            <Tabs defaultActiveKey="1" id="fill-tab-example" className="mb-3" fill>

                {
                    category.map( (category) => (
                        <Tab className='Service-Tab' eventKey={category.id} title={category.name} style={{fontSize: "5.9vw"}} >
                        {
                            services.filter(e => e.category_id === category.id).map( services =>(
                            <Row className='w-100'>
                                <Col className='col-10 col-md-8'><p>{services.text}</p></Col>
                                <Col className='col text-center'><p>{`${services.price} BYN`}</p></Col>
                            </Row>
                            ))
                        }
                        </Tab>
                    ))
                }
                
            </Tabs>
        </Row>
        <Row className='h-10'>
            <Col className='text-center mt-2 mb-4'>
            <Link to={`/regservice/new`}>
                <Button size="lg" variant="primary">ЗАПИСАТЬСЯ НА УСЛУГИ</Button>{' '}
            </Link></Col>
        </Row>
    </Container>
    </>
    )
}

export {Servicepage};