import { Container, Row, Col} from 'react-bootstrap';
import { useAuth } from "../hook/useAuth";

const Teampage = () =>{
    const { employeeData } = useAuth();

    return (

        <Container className='Team mb-20' fluid>
        <Row className='h-10'>
            <Col className='Team-Header text-center'><h2 className="decorated-white"><span>Наша команда</span></h2> </Col>
        </Row>

        <Row className='Team d-md-flex justify-content-center justify-content-sm-around  text-center h-80'>
            {
                  employeeData.filter( i => !i.hidden).map( data => (
                    <Col className="me-3 ms-3 mb-5 col-9 col-sm-5 col-md-4 col-xl-3" sm={{ height: "300px"}} key={data.id}>
                        <div className="Team-container" >
                            <img src={data.avatar_big} alt={data.name} />
                            <div className='Team-person'>
                                <h4 style={{marginTop: "10px"}}>{data.name}</h4>
                                <p>{data.specialization}</p>
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