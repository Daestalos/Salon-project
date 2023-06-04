import { Container, Row, Col} from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay} from "swiper";
import "../css/Homepage.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import images for Swiper
import Slide1 from '../pages/img/swiper/Slide 1.jpg';
import Slide2 from '../pages/img/swiper/Slide 2.jpg';
import Slide3 from '../pages/img/swiper/Slide 3.png';
import Slide4 from '../pages/img/swiper/Slide 4.png';
import Slide5 from '../pages/img/swiper/Slide 5.jpeg';
import Slide6 from '../pages/img/swiper/Slide 6.jpg';
import Slide7 from '../pages/img/swiper/Slide 7.jpg';
import Slide8 from '../pages/img/swiper/Slide 8.png';
import Slide9 from '../pages/img/swiper/Slide 9.jpeg';
import Slide10 from '../pages/img/swiper/Slide 10.jpg';
import Slide11 from '../pages/img/swiper/Slide 11.jpg';




const SwiperComponent = () =>{

    return (
        <Container className='Swiper mb-20' fluid>
        <Row className='h-10'>
            <Col className='News-Header text-center'> 
            <h2 className="decorated"><span>Бренды, с которыми мы работаем</span></h2> 
            </Col>
            
        </Row>
        <Row className='Swiper h-100'>
            <Col>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"

                    breakpoints={{
                        400: {
                            slidesPerView: 3,
                        },
                        768: {
                          slidesPerView: 5,
                        },
                      }}

                >
                    <SwiperSlide><img src={Slide3} alt="HADAT Cosmetics" /></SwiperSlide>
                    <SwiperSlide><img src={Slide2} alt="Dr.Sorbie" /></SwiperSlide>
                    <SwiperSlide><img src={Slide5} alt="K18 BIOMIMETIC HAIRSCIENCE" /></SwiperSlide>
                    <SwiperSlide><img src={Slide11} alt="Tangle Teezer" /></SwiperSlide>
                    <SwiperSlide><img src={Slide6} alt="ALFAPARF MILANO" /></SwiperSlide>
                    <SwiperSlide><img src={Slide4} alt="Provida Organic" /></SwiperSlide>   
                    <SwiperSlide><img src={Slide7} alt="ZOOM Cosmetics" /></SwiperSlide>
                    <SwiperSlide><img src={Slide8} alt="LIMBA Cosmetics" /></SwiperSlide>
                    <SwiperSlide><img src={Slide9} alt="OLLIN Proffesional" /></SwiperSlide>
                    <SwiperSlide><img src={Slide10} alt="Fanola" /></SwiperSlide>
                    <SwiperSlide><img src={Slide1} alt="ikko" /></SwiperSlide>
                    
                </Swiper>
            </Col>
        </Row>
        </Container>
    )
}

export {SwiperComponent};