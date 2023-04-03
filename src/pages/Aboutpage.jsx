import { Slider } from '../components/Slider';
import { Container, Row, Col} from 'react-bootstrap';
import { AboutComponent } from '../components/AboutComponent';
import { Teampage } from './Teampage';  
import medal from './img/medal.svg';
import coffee from './img/coffee-cup.svg';
import best from './img/best-friend.svg';
import { SwiperComponent } from '../components/SwiperComponent';

const Aboutpage = () =>{
    return (
        <>
        <Slider />

        <AboutComponent />

        <Teampage />

        <Container fluid style={{ marginTop: "40px", marginBottom: "50px"}}>
            <Row>
                <Col className='Header text-center'>Выбирая нас Вы можете быть уверены в 3-х вещах:</Col>
            </Row>
            <Row className='d-flex justify-content-between flex-column flex-md-row text-center mt-5'>
                <Col className=''>
                    <div className="About-container ">
                        <img alt="employee" style={{marginLeft: "5px"}} src={coffee}/>
                        <div className=''>
                            <h4 style={{marginTop: "20px"}}>Уют</h4>
                            <p>ВАМ ОБЯЗАТЕЛЬНО ПРЕДЛОЖАТ ЧАШЕЧКУ АРОМАТНОГО КОФЕ ИЛИ ЧАЯ</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="About-container">
                        <img alt="employee" src={medal}/>
                        <div className=''>
                            <h4 style={{marginTop: "20px"}}>Качество</h4>
                            <p>РАБОТАЕМ ТОЛЬКО НА ПРОФЕССИОНАЛЬНЫХ МАТЕРИАЛАХ</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="About-container">
                        <img alt="employee" src={best} />
                        <div className=''>
                            <h4 style={{marginTop: "20px"}}>Результат</h4>
                            <p>ВЫ НЕ УСПЕЕТЕ ЗАМЕТИТЬ, КАК СНОВА ЗАХОТИТЕ ВЕРНУТЬСЯ К НАМ</p>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
        <SwiperComponent />
        </>
    )
}

export {Aboutpage};