import { Container, Row, Carousel} from 'react-bootstrap';
import "../css/Homepage.css";
import Slidervideo1 from '../pages/img/Slidervideo1.MP4'
import Slidervideo2 from '../pages/img/Slidervideo2.MOV'
import Slidervideo3 from '../pages/img/IMG_7102.MP4'

const Slider = () =>{

    return (
        <Container fluid >
                <Row>
                <Carousel>
                <Carousel.Item>
                <video
                    className="d-block w-100"
                    src={Slidervideo1}
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
                <Carousel.Item>
                    <video
                    className="d-block w-100"
                    src={Slidervideo3}
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