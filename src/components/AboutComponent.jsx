import { Container, Row, Col} from 'react-bootstrap';
import logo from '../pages/img/logo2.svg'



const AboutComponent = () =>{
    return (
        <Container className='About mb-20 d-flex align-items-center' fluid>
            <Row className='About-content col-12 d-flex justify-content-center m-0'>
                <Col className='d-flex justify-content-center col-12'>
                    <img className='About-SVG align-self-center' src={logo} alt=''/>
                </Col>
                <Col className='col-10 col-sm-11 col-lg-6 d-flex align-items-center justify-content-center' style={{ textAlign: "justify" }}>
                    <p>BAR STUDIO — намного больше, чем просто студия красоты - это целая команда единомышленников. Это место, где Вам помогут найти свой собственный, неповторимый стиль. Стоит довериться нашим мастерам один раз, и, поверьте, новый образ не оставит Вас равнодушным. Стиль и красота — это наш профиль, и мы уверены, что наши мастера делают это лучше всех. Как сказал однажды знаменитый Ральф Лорен: «Какой бы Вы образ жизни ни вели, у вас должен быть свой собственный стиль, свой собственный мир».</p>
                </Col>
            </Row>
        </Container>
    )
}

export {AboutComponent};