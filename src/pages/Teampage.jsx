import { Container, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Teampage = () =>{

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


    return (

        <Container className='Team mb-20' fluid>
        <Row className='h-10'>
            <Col className='Team-Header text-center'><h1 className="decorated-white"><span>Наша команда</span></h1> </Col>
        </Row>

        <Row className='Team d-md-flex justify-content-center justify-content-sm-around  text-center h-80'>
            {
                masters.map( masters => (
                    <Col className="me-3 ms-3 mb-5 col-9 col-sm-5 col-md-4 col-xl-3" sm={{ height: "300px"}}>
                    <div className="Team-container">
                        <img src={masters.img} alt="employee" />
                        <div className='Team-person'>
                            <h4 style={{marginTop: "10px"}}>{masters.name}</h4>
                            <p>{masters.text}</p>
                        </div>
                    </div>
                    </Col>
                ))
            }
            
        </Row>
    </Container>

    )
}

export {Teampage};