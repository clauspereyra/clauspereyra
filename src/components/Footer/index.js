import React from 'react';

import './Footer.css';

import imgmail from './../../images/mail-24-512.png';
import imgtel from './../../images/contact-methods-phone-icon-512x512-pixel-3.png';
import imgfacebook from './../../images/icon2.png';
import imglinkedin from './../../images/icon3.png';
import imginstagram from './../../images/icon1.png';

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesImg, ServicesP} from './FooterElements'; 

var sectionStyle = {
    width: "100%",    
};

const Footer = () => {
    return (
        <ServicesContainer id="servicesFooter" style={ sectionStyle }>
            <div className="footer-box">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesImg src={imgmail}/>                    
                    <ServicesP>comercial@cobroinmediato.tech</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesImg src={imgtel}/>                    
                    <ServicesP>+54 (11) 5353-3332</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <div className="redesbox">
                    <div className="redesitem">
                    <ServicesImg src={imgfacebook}/>                    
                    <ServicesP><a href="https://www.facebook.com/pagospyme/?fref=ts"></a></ServicesP>                    
                    </div>
                    <div className="redesitem">
                    <ServicesImg src={imglinkedin}/>
                    <ServicesP><a href="https://www.linkedin.com/company/cobroinmediato"></a></ServicesP>
                    </div>
                    <div className="redesitem">
                    <ServicesImg src={imginstagram}/>
                    <ServicesP><a href="https://www.instagram.com/coincobroinmediato/"></a></ServicesP>
                    </div>
                    <ServicesP>Nuestras Redes</ServicesP>
                    </div>                        
                </ServicesCard>
                         

            </ServicesWrapper>

            <div className="copyright">
                    <p>?? 2021 COIN. All Rights Reserved. <a href="">MKT y Dise??o: Abiertamente - Publicidad + Consultor??a</a></p>
                </div>
            
            </div>     

        </ServicesContainer>
    );
}

export default Footer;
