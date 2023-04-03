import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button} from 'react-bootstrap';
import "../css/Homepage.css";
import notfoto from '../pages/img/nofoto.png'
import { Slider } from "../components/Slider";
import { useAuth } from "../hook/useAuth";
import Ratio from 'react-bootstrap/Ratio';

const Blogpage = () =>{
    const {mediaData} = useAuth();

    return (
        <>
        <Slider/>
        <Container className='Blogpage-News mb-20' fluid>
            <Row className='h-10'>
                <Col className='News-Header text-center'> 
                <h1 className="decorated"><span>Новости BAR Studio</span></h1> 
                </Col>
                
            </Row>
            <Row className='Blogpage-News d-md-flex justify-content-start justify-content-sm-around align-items-start h-100'>
            <Col className="col-4">
            {/* <iframe src='https://video-iad3-1.cdninstagram.com/o1/v/t16/f1/m82/C645473191879CA5434BE674B3BAB48A_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&_nc_ht=video-iad3-1.cdninstagram.com&_nc_cat=103&vs=1880091879016830_4035598109&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9DNjQ1NDczMTkxODc5Q0E1NDM0QkU2NzRCM0JBQjQ4QV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0tSQU9SUjhwTk9qN3VnQkFCOXFDamo5UFhrWGJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAm6s2z1u%2Ff9D8VAigCQzMsF0AzCj1wo9cKGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA%3D%3D&ccb=9-4&oh=00_AfDW3BdRi4DVBG9OSrr_SLH57NgkN-4qWmJa7q_q7CB8eA&oe=642BF187&_nc_sid=ea0b6e&_nc_rid=25c076a408'
                    frameBorder='0'
                    allow='encrypted-media'
                    allowFullScreen
                    title='video'
                    style={{width: "100%", height: "500px"}}
            /> */}
            <Ratio aspectRatio="4x3">
                <iframe autoplay loop src="https://video-iad3-1.cdninstagram.com/o1/v/t16/f1/m82/C645473191879CA5434BE674B3BAB48A_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&_nc_ht=video-iad3-1.cdninstagram.com&_nc_cat=103&vs=1880091879016830_4035598109&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9DNjQ1NDczMTkxODc5Q0E1NDM0QkU2NzRCM0JBQjQ4QV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0tSQU9SUjhwTk9qN3VnQkFCOXFDamo5UFhrWGJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAm6s2z1u%2Ff9D8VAigCQzMsF0AzCj1wo9cKGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA%3D%3D&ccb=9-4&oh=00_AfDW3BdRi4DVBG9OSrr_SLH57NgkN-4qWmJa7q_q7CB8eA&oe=642BF187&_nc_sid=ea0b6e&_nc_rid=25c076a408" style={{width: "100%", height: "100%"}} />
            </Ratio>    
            </Col>
            </Row>
        </Container>
        </>
    )
}

export {Blogpage};