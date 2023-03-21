import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";
import logo from '../pages/img/logo1.svg'
import { Footer } from "./Footer";
import { Container, Row, Col, Navbar, Nav, NavDropdown} from "react-bootstrap";
import { useAuth } from "../hook/useAuth";
import {User, Users, SignIn, SignOut, UserPlus} from "phosphor-react";

const Layout = () =>{

    const {user,signout} = useAuth();

    function isEmpty(obj) {
        for (let key in obj) {
          return false;
        }
        return true;
      }

    return (
        <>
            <Container className="Top-Header" fluid>
                <Row className="h-100 d-none d-lg-flex ">
                    <Col className="Top-Header-Content col-5 d-flex justify-content-start align-items-center">
                        <CustomLink to='/'>Главная</CustomLink>
                        <CustomLink to='/service'>Услуги</CustomLink>
                        <CustomLink to='/team' >Команда</CustomLink>
                        {/* <CustomLink to='/admin' >Команда</CustomLink> */}
                    </Col>
                    <Col className="Top-Header-Content col-2">
                        <img src={logo} style={{height: "115px", width: "175px", padding: "0 1rem", marginTop: "5px"}} alt=''/>    
                    </Col>
                    <Col className="Top-Header-Content col-5 d-flex justify-content-end align-items-center">
                        <CustomLink to='/about' >О нас</CustomLink>
                        <CustomLink to='/posts'>Новости</CustomLink>

                        
                        <NavDropdown title={<Users size={35}  color={"white"}/>} id="navbarScrollingDropdown">
                        {
                            isEmpty(user)
                            ? <NavDropdown.Item as={CustomLink} to='/login' style={{color: "black"}}><SignIn size={25} />{` Авторизация`}</NavDropdown.Item>
                            : <NavDropdown.Item as={CustomLink} to={ !user.isadmin ? `/user/${user.id}` : `/admin`} style={{color: "black"}}><User size={25}/>{` ${user.name}`}</NavDropdown.Item>
                        }
                        <NavDropdown.Divider />
                        {
                            isEmpty(user) ? <NavDropdown.Item as={CustomLink} to='/register' style={{color: "black"}}><UserPlus size={25} /> Регистрация</NavDropdown.Item> : 
                            <NavDropdown.Item onClick={()=> signout()} style={{color: "black"}}><SignOut size={25} /> Выход из аккаунта</NavDropdown.Item>
                        }
                        </NavDropdown>
                        
                    </Col>
                </Row>
            </Container>

            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="Top-Header-nav d-lg-none d-block">
                <Container fluid>
                    <Navbar.Brand to="/" className="ms-5">BAR STUDIO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-5"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-5">
                            <CustomLink to='/'>Главная</CustomLink>
                            <CustomLink to='/service'>Услуги</CustomLink>
                            <CustomLink to='/team' >Команда</CustomLink>
                            <CustomLink to='/about' >О нас</CustomLink>
                            <CustomLink to='/posts'>Новости</CustomLink>
                            
                            <NavDropdown title={<Users size={25}  color={"white"}/>} id="navbarScrollingDropdown">
                            {
                                isEmpty(user) ? <NavDropdown.Item as={CustomLink} to='/login' style={{color: "black"}}>Авторизация</NavDropdown.Item> : <NavDropdown.Item as={CustomLink} to={ !user.isadmin ? `/user/${user.id}` : `/admin`} style={{color: "black"}}>{user.name}</NavDropdown.Item>
                             }
                            <NavDropdown.Divider />
                            {
                                isEmpty(user) ? <NavDropdown.Item as={CustomLink} to='/register' style={{color: "black"}}>Регистрация</NavDropdown.Item> : 
                                <NavDropdown.Item onClick={()=> signout()} style={{color: "black"}}>Выход из аккаунта</NavDropdown.Item>
                            }

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main>
            
            {/* В Outlet отрисовывается все дочернее содержимое */}
                <Outlet />
            
            </main>

            <Footer></Footer>
        </>
    )
}

export {Layout};