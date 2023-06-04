import { Container, Row, Carousel} from 'react-bootstrap';
import "../css/Homepage.css";
import Slidervideo1 from '../pages/img/Slidervideo.mp4'
import Slidervideo2 from '../pages/img/Slidervideo2.mp4'
import Slidervideo3 from '../pages/img/Slidervideo3.mp4'

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
                    playsInline
                    autoPlay
                    muted
                    loading="lazy"
                    alt="Кератин, Ботокс, Нанопластика волос, Реконструкция волос Могилев"
                    ></video>
                </Carousel.Item>
                <Carousel.Item>
                    <video
                    className="d-block w-100"
                    src={Slidervideo2}
                    loop
                    playsInline
                    autoPlay
                    muted
                    loading="lazy"
                    alt="Парикмахерская Могилев"
                    ></video>
                </Carousel.Item>
                <Carousel.Item>
                    <video
                    className="d-block w-100"
                    src={Slidervideo3}
                    loop
                    playsInline
                    autoPlay
                    muted
                    loading="lazy"
                    alt="Салон красоты Могилев"
                    ></video>
                </Carousel.Item>
                </Carousel>
                </Row>
            </Container>
    )
}

export {Slider};