import { Container, Row, Col} from 'react-bootstrap';
import '../css/index.css';
import { CustomLink } from './CustomLink';
import {InstagramLogo} from "phosphor-react";
import logo from '../pages/img/logo.svg'

const Footer = () =>{
    return (
        <>
            <Container className='Footer' fluid>
                <Row className='d-flex justify-content-center  h-20'>
                    <Col className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
                        <img className='Footer-SVG align-self-center' src={logo} alt=''/>  
                    </Col>
                    <Col className='Footer-Menu col-6 col-md-3' >
                        <h4>НАВИГАЦИЯ</h4>
                        <ul>
                            <li><CustomLink to='/'>Главная</CustomLink></li>
                            <li><CustomLink to='/service'>Услуги</CustomLink></li>
                            <li><CustomLink to='/team' >Команда</CustomLink></li>
                            <li><CustomLink to='/about' >О нас</CustomLink></li>
                            <li><CustomLink to='/shop' >Товары</CustomLink></li>
                            <li><CustomLink to='/posts'>Новости</CustomLink></li>
                        </ul>

                    </Col>
                    <Col className='Footer-Head col-6 col-md-3'>
                        <h4>КОНТАКТЫ</h4>
                        <p>Наш адрес:</p>
                        <p>г. Могилев, ул. Первомайская, 2</p>
                        <p>Наш телефон:</p>
                        <p>8 (029) 114-11-54</p>
                        
                    </Col>

                    <Col className='Footer-Subscribe col-6 col-md-3'>
                       <h4>ПОДПИСЫВАЙСЯ</h4>
                       <Col className='d-flex text-align-center justify-content-center justify-content-md-start align-content-center'>
                            <InstagramLogo size={32} color={"white"}> 
                            </InstagramLogo>
                            <a href="https://www.instagram.com/bar_studio.mogilev/?hl=ru" className='align-self-center'>bar_studio.mogilev</a>
                       </Col>
                       
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center' style={{color: "white"}}>© BAR STUDIO — 2023. Все права защищены</Col>
                </Row>
            </Container>
        </>
    )
}

export {Footer};