import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import StyledSlickTech from './SlickTech.styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
    const [settings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    return (
        <StyledSlickTech>
            <Slider {...settings}>
                <div className="slider-container">
                    <div className="slider-box next">
                        <Image width={100} height={75} className="slide-image" src="/next.png" alt="" />
                        <p className='text'>Next JS</p>
                    </div>
                </div>
                <div className="slider-container">
                    <div className="slider-box react">
                        <Image width={100} height={75} className="slide-image" src="/react.png" alt="" />
                        <p className='text'>React</p>
                    </div>
                </div>
                <div className="slider-container">
                    <div className="slider-box typescript">
                        <Image width={100} height={75} className="slide-image" src="/typescript.png" alt="" />
                        <p className='text'>TypeScript</p>
                    </div>
                </div>
                <div className="slider-container">
                    <div className="slider-box javascript">
                        <Image width={100} height={75} className="slide-image" src="/javascript.png" alt="" />
                        <p className='text'>JavaScript</p>
                    </div>
                </div>
                <div className="slider-container">
                    <div className="slider-box styled-components">
                        <Image width={100} height={75} className="slide-image" src="/styled-components.png" alt="" />
                        <p className='text'>Styled Components</p>
                    </div>
                </div>
                <div className="slider-container">
                    <div className="slider-box wordpress">
                        <Image width={100} height={75} className="slide-image" src="/wordpress.png" alt="" />
                        <p className='text'>WordPress</p>
                    </div>
                </div>
                <div className="slider-container">
                    <div className="slider-box sass">
                        <Image width={100} height={75} className="slide-image" src="/sass.png" alt="" />
                        <p className='text'>SASS</p>
                    </div>
                </div>

                <div className="slider-container">
                    <div className="slider-box html">
                        <Image width={100} height={75} className="slide-image" src="/html.png" alt="" />
                        <p className='text'>HTML</p>
                    </div>
                </div>
                <div className="slider-container">
                    <div className="slider-box css">
                        <Image width={100} height={75} className="slide-image" src="/css.png" alt="" />
                        <p className='text'>CSS</p>
                    </div>
                </div>
            </Slider>
        </StyledSlickTech>
    );
};

export default SimpleSlider;
