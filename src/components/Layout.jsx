import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";
import logo from '../pages/img/logo1.svg'
import { Footer } from "./Footer";
import { Container, Row, Col, Navbar, Nav, NavDropdown} from "react-bootstrap";
import { useAuth } from "../hook/useAuth";
import {House, Info, ShoppingBag , UsersThree , InstagramLogo, Phone, Heart } from "phosphor-react";

const Layout = () =>{

    // const {user,signout} = useAuth();

    // function isEmpty(obj) {
    //     for (let key in obj) {
    //       return false;
    //     }
    //     return true;
    //   }


    // margin: 15px;
    // font-size: 3rem;
    // text-decoration: none;

    const handleClick = () =>{
        document.getElementById('Close').click();

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
                        <CustomLink to='/shop'>Товары</CustomLink>
                        <CustomLink to='/posts'>Новости</CustomLink>
                        <CustomLink to='/about' >О нас</CustomLink>
                        

                        
                        {/* <NavDropdown title={<Users size={35}  color={"white"}/>} id="navbarScrollingDropdown">
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
                        </NavDropdown> */}
                        
                    </Col>
                </Row>
            </Container>

            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="Top-Header-nav d-lg-none d-block">
                <Container fluid>
                    <Navbar.Brand to="/" className="ms-5">BAR STUDIO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " id="Close" className="me-5" style={{border: "none", boxShadow: "none"}}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mt-1 d-flex text-center " style={{height: "100vh"}}>
                            <CustomLink to='/' onClick={ () => handleClick()}><House size={32} color={"white"} style={{marginTop :"-4px"}}/> Главная</CustomLink>
                            <CustomLink to='/service' onClick={ () => handleClick()}><Heart size={32} color={"white"} style={{marginTop :"-4px"}}/> Услуги</CustomLink>
                            <CustomLink to='/team' onClick={ () => handleClick()}><UsersThree size={32} color={"white"} style={{marginTop :"-4px"}}/> Команда</CustomLink>
                            <CustomLink to='/about' onClick={ () => handleClick()}><Info size={32} color={"white"} style={{marginTop :"-4px"}}/> О нас</CustomLink>
                            <CustomLink to='/posts' onClick={ () => handleClick()}><InstagramLogo size={32} color={"white"} style={{marginTop :"-4px"}}/> Новости</CustomLink>
                            <CustomLink to='/shop' onClick={ () => handleClick()}><ShoppingBag size={32} color={"white"} style={{marginTop :"-4px"}}/> Товары</CustomLink>
                            {/* <NavDropdown title={<Users size={25}  color={"white"}/>} id="navbarScrollingDropdown">
                            {
                                isEmpty(user) ? <NavDropdown.Item as={CustomLink} to='/login' style={{color: "black"}}>Авторизация</NavDropdown.Item> : <NavDropdown.Item as={CustomLink} to={ !user.isadmin ? `/user/${user.id}` : `/admin`} style={{color: "black"}}>{user.name}</NavDropdown.Item>
                             }
                            <NavDropdown.Divider />
                            {
                                isEmpty(user) ? <NavDropdown.Item as={CustomLink} to='/register' style={{color: "black"}}>Регистрация</NavDropdown.Item> : 
                                <NavDropdown.Item onClick={()=> signout()} style={{color: "black"}}>Выход из аккаунта</NavDropdown.Item>
                            }

                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main>
            
            {/* В Outlet отрисовывается все дочернее содержимое */}
            <Outlet />

            </main>
            <a href="tel:80291141154" style={{height: "100px", width: '100px'}}>
                <Phone size={55}  style={{
                    position: "fixed",
                    right: "30px",
                    bottom: "100px",
                    color: "white",
                    backgroundColor: "#25d366", 
                    borderRadius: "15px"
                }}/>
            </a>
            <a href="https://www.instagram.com/bar_studio.mogilev/?hl=ru" style={{height: "100px", width: '100px'}}>
                <InstagramLogo size={55}  style={{
                    position: "fixed",
                    right: "30px",
                    bottom: "30px",
                    color: "white",
                    backgroundColor: "#f09433", 
                    background: "-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                    background: "-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                    background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                    filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1)",
                    borderRadius: "15px"
                }}/>
            </a>

            <Footer></Footer>
        </>
    )
}

export {Layout};