import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Slider } from "../components/Slider";

const Singlepage = () =>{

return (
<>
    {/* <Slider />
    
    {post && (
    <>
        <Container className='Blogpage-News mb-20' fluid>
            <Row className='h-10'>
                <Col className='Blogpage-News-Header text-center'> {post.header}</Col>
            </Row>
            <Row className=' d-md-flex justify-content-center justify-content-center align-items-center h-80'>
                <Col className=" mb-5 col-9 col-sm-5 col-md-4 col-xl-4" sm={{ height: "500px"}}>
                <div className="News-container">
                    <img style={{borderradius: "8px 8px 0px 0px"}} src={post.img} alt="e" />
                    <div className='News-person'>
                        <h4>{post.header}</h4>
                        <p>{post.text}</p>
                        <div className='News-button d-flex justify-content-center'>
                            <Link key={post.id} to={'/posts'}> <Button variant="primary"> Вернуться </Button>{' '}
                            </Link>
                        </div>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </>
    )} */}




</>

)
}

export {Singlepage};