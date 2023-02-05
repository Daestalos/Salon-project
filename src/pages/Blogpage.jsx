import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button} from 'react-bootstrap';
import "../Homepage.css";
import notfoto from '../pages/img/nofoto.png'
import { Slider } from "../components/Slider";

const Blogpage = () =>{
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts();
    }, []);

    function getPosts () {
        axios.get('http://localhost/api/news.php')
        .then(function(response) {
            console.log(response.data);
            setPosts(response.data);
        });
    }

    return (
        <>
        <Slider/>
        <Container className='Blogpage-News mb-20' fluid>
            <Row className='h-10'>
                <Col className='News-Header text-center'> 
                <h1 className="decorated"><span>Новости BAR Studio</span></h1> 
                </Col>
                
            </Row>
            <Row className='Blogpage-News d-md-flex justify-content-center justify-content-sm-around align-items-start h-100'>
            {
                posts.map(post => (
                    <Col className="Blogpage-News-Container col-10 col-sm-11 col-md-11 col-lg-5 d-flex justify-content-sm-start flex-sm-row flex-column m-2" style={{border: "1px solid black", background: "white"}} >
                        <Col className="Blogpage-News-Container d-flex d-sm-block justify-content-center col-12 col-sm-6 col-lg-6" xxl={{height: "400px"}}>
                            <img src={post.img === null ? notfoto : post.img} alt="employee" />
                        </Col>
                        <Col className="col-12 col-sm-6" xxl={{height: "400px", overflow: "hidden"}}>
                            <Col className="d-flex justify-content-center align-items-center text-center" style={{maxWidth: "100%", height: "30%"}}>
                                <h4>{post.header}</h4>
                            </Col>
                            <Col className="Blogpage-News-Text d-flex justify-content-start m-2" style={{maxWidth: "100%", height: "50%"}}>
                                <p>{post.text}</p>
                            </Col>
                            <Col className="d-flex col-12 justify-content-center pb-2 p-sm-2 justify-content-md-end me-5" style={{maxWidth: "100%", height: "20%"}}>
                                <Link key={post.id} to={`/posts/${post.id}`}>
                                    <Button variant="primary">Узнать больше</Button>{' '}
                                </Link>
                            </Col>

                        </Col>
                    </Col>


                    // <Col className="col-6">
                    // {/* <Col className=" mb-5 col-9 col-sm-5 col-md-4 col-xl-4" sm={{ height: "300px"}}> */}
                    // <div className="Blogpage-News-container">
                    //     <img src={post.img === null ? notfoto : post.img} alt="employee" />
                    //     <div className='News-person'>
                    //         <h4>{post.header}</h4>
                    //         <p>{post.text}</p>
                    //         <div className='News-button d-flex justify-content-center'>
                    //             <Link key={post.id} to={`/posts/${post.id}`}>
                    //                 <Button variant="primary">Узнать больше</Button>{' '}
                    //             </Link>
                    //         </div>
                    //     </div>
                    // </div>
                    // </Col>
                ))
            }
            </Row>
        </Container>
        </>
    )
}

export {Blogpage};