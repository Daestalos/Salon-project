import { Container, Row, Carousel} from 'react-bootstrap';
import "../Homepage.css";
import video from '../pages/img/Slidervideo1.MP4'
import Slidervideo2 from '../pages/img/Slidervideo2.MOV'
import Slider3 from '../pages/img/Slider3.jpg'

const Slider = () =>{

    return (
        <Container fluid >
                <Row>
                <Carousel>
                <Carousel.Item>
                <video
                    className="d-block w-100"
                    src={video}
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                    ></video>
                </Carousel.Item>
                <Carousel.Item>
                    <video
                    className="d-block w-100"
                    src={Slidervideo2}
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                    ></video>
                </Carousel.Item>
                </Carousel>
                </Row>
            </Container>
    )
}

export {Slider};