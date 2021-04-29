import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slide.css';

import img1 from './../../images/imgs-1.jpg';
import img2 from './../../images/imgs-2.jpg';
import img3 from './../../images/imgs-3.jpg';
import img4 from './../../images/imgs-4.jpg';

import imgpay from './../../images/logos-pay.png';

import { ImgWrap, Img, alt } from './SlideElements';

function SlideHome() {

    const [index, setIndex] = useState(1)
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <div className="slide100">
            <Carousel fade="true" activeIndex={index} onSelect={handleSelect}>
                
                <Carousel.Item>
                    <img className="slidebox d-block w-100" src={img4} alt="Cobro Inmediato" style={{}} />
                    <Carousel.Caption>
                        <h3>Soluciones de pagos</h3>
                        <h4>Online para empresas</h4>
                        <ImgWrap>
                        <Img src={imgpay} />
                        </ImgWrap>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="slidebox d-block w-100" src={img3} alt="Cobro Inmediato" style={{}} />
                    <Carousel.Caption>
                        <h3>La mejor solución</h3>
                        <h4>para los que cobran y para los que pagan</h4>                        
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img className="slidebox d-block w-100" src={img1} alt="Cobro Inmediato" style={{}} />
                    <Carousel.Caption>
                        <h3>Un Gateway</h3>
                        <h4>World-Class</h4>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="slidebox d-block w-100" src={img2} alt="Cobro Inmediato" style={{}} />
                    <Carousel.Caption>
                        <h3>Personalización Avanzada</h3>
                        <h4>múltiples opciones de integración</h4>
                    </Carousel.Caption>
                </Carousel.Item>

                

                
                
            </Carousel>

        </div>
           
    );
}

export default SlideHome;