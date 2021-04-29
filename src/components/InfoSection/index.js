import React from 'react';
import './InfoElements.css'
import imgs1 from './../../images/pay-1.png';
import imgs2 from './../../images/pay-2.png';
import { Link } from 'react-router-dom';

import background1 from './../../images/mod1.jpg';
import background2 from './../../images/mod2.jpg';

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, FirstLine, TopLine, Heading, Subtitle, ImgWrap, Img } from './InfoElements';
    
const InfoSection = ({lightBg, id, imgStart, secondBlock, firstBlock, topLine, topLine2, lightText, headline, headline2, darkText, description, description2, alt }) => {
    
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <div className="servicesd-box">
                    <FirstLine>{firstBlock}<br/><span className="SeconfBlock">{secondBlock}</span></FirstLine>                                        
                    </div>
                    <InfoRow imgStart={imgStart}>                      

                        <Column1 style={{ backgroundImage: `url(${background2})` }}>
                            <ImgWrap>
                                <Img src={imgs1} alt={alt} />                                
                            </ImgWrap>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                
                                <Link to='/gateway' className='btn-wrap' >COMENZAR</Link>       

                                
                            </TextWrapper>                                                    
                        </Column1>

                        <Column2 style={{ backgroundImage: `url(${background1})` }}>
                            <ImgWrap>
                                <Img src={imgs2} alt={alt} />                                
                            </ImgWrap>
                            <TextWrapper>
                                <TopLine>{topLine2}</TopLine>
                                <Heading lightText={lightText}>{headline2}</Heading>
                                <Subtitle darkText={darkText}>{description2}</Subtitle>
                                <Link to='/gateway' className='btn-wrap' >COMENZAR</Link>
                                
                            </TextWrapper>                        
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        
        
        </>   
    );
};

export default InfoSection;