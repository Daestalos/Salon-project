import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Hourglass} from "phosphor-react";

const Shoppage = () =>{
    return (
        <Container className='' style={{height: "80vh"}}>  
            <Row className=''>
                <Col className='col-12 text-center'>
                    <h2 className='' style={{marginTop:"15%"}}>Страница находится в разработке, ожидайте новостей про обновление</h2>
                    <Hourglass size={120} style={{marginTop: "50px"}}/>
                </Col>
                <Col className='col-12 text-center'>
                    <Link to={`/`}>
                        <Button size="lg" variant="primary" style={{marginTop:"50px"}}>На главную страницу</Button>{' '}
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export {Shoppage};