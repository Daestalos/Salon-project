import { Container, Row, Col} from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay} from "swiper";
import "../css/Homepage.css";
import { ModalComponents } from './ModalComponents';
import { useState} from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import images for Swiper
import InstaReels from '../pages/img/instagram-reels-icon.svg'
import { useAuth } from "../hook/useAuth";




const SwiperInstagram = () =>{

    const { mediaData } = useAuth();
    const [modalShow, setModalShow] = useState(false);
    const [modalProps, setModalProps] = useState([])

    return (
        <Container className='Swiper mb-20' fluid>
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
                    className="swiperInstagram"

                    breakpoints={{
                        400: {
                            slidesPerView: 3,
                        },
                        768:{
                            slidesPerView: 3,
                        },
                        1100: {
                          slidesPerView: 4,
                        }
                      }}

                >

                    {
                        mediaData.map(item => (
                            <SwiperSlide className='swiper-slide-instagram' key={item.id}>
                                <img src={InstaReels} className='Swiper-svg-instagram' alt='Бар студио примеры работ'></img>
                                <img src={item.hasOwnProperty('thumbnail_url') ? item.thumbnail_url : item.media_url} alt={item.id} onClick={() => {
                                    setModalShow(true)
                                    setModalProps([item.permalink, item.media_url, item.caption, item.media_type, item.id]);
                                }}/>a

                            </SwiperSlide>
                        ))
                    }
                    

                </Swiper>
                <ModalComponents
                show={modalShow}
                onHide={() => setModalShow(false)}
                instagrammedia = {modalProps}
                />    
            </Col>
        </Row>
        </Container>
    )
}

export {SwiperInstagram};