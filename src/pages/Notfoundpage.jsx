import { Link } from 'react-router-dom'
import { Container, Row, Col, Button} from 'react-bootstrap';
import { Warning} from "phosphor-react";

const Notfoundpage = () =>{
    return (
        <Container className='' style={{height: "80vh"}}>  
            <Row className=''>
                <Col className='col-12 text-center'>
                    <h2 className='' style={{marginTop:"15%"}}>ERROR 404</h2>
                    <h2 className='' style={{marginTop:"5px"}}>Проверьте правильность ссылки</h2>
                    <Warning size={120} style={{marginTop: "50px"}}/>
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

export {Notfoundpage};