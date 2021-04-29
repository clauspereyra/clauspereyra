import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #ffffff;
    background: ${({lightBg}) => (lightBg ? '#ffffff' : '#ffffff')};
    z-index: 5;
    padding: 0px 0px 100px 0px;

    @media screen and (max-width: 768px) {
        padding: 0px 0px 100px 0px;
    }

    `;

export const InfoWrapper = styled.div`
    display:grid;
    z-index:1;
    height:auto;
    Width:100%;
    max-width: 1024px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    `;
    
export const InfoRow = styled.div`
    Display: grid;
    grid-auto-column: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};

    }
    
    `;

    
export const Column1 = styled.div`
    margin-bottom:15px;
    padding: 60px 30px 60px 30px;
    grid-area: col1;
    
    border-radius: 8px;
    margin:20px;
    background-size: cover;
    
    `;

export const Column2 = styled.div`
    margin-bottom:15px;
    padding: 60px 30px 60px 30px;
    grid-area: col2;
    
    border-radius: 8px;
    margin:20px;
    background-size: cover;
    `;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top:0;
    padding-bottom: 0px;

    `;   

export const FirstLine = styled.p`
    
    @media screen and (min-width: 960px) {
    color: #666666;
    text-align:center;
    font-size: 36px;
    line-height: 36px;
    font-weight: 700;
    letter-spacing: 1.4px;
    
    margin-bottom:0px !important;
    margin-top:160px;
    height: auto !important;
    display: block !important;
    font-family: 'Open Sans', sans-serif;

    }
    
    @media screen and (max-width: 960px) {
        color: #666666;
    text-align:center;
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 1.4px;
    
    margin-bottom:0px !important;
    margin-top:40px;
    height: auto !important;
    display: block !important;
    }


    `; 

export const TopLine = styled.p`
    color: #01bf71;
    text-align:center;
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom:16px;

    `;   
    
export const Heading = styled.h1`
    margin-bottom: 24px; 
    text-align:center;
    font-size:38px;
    line-height:36px;
    font-weight:600;
    color: ${({ lightText }) => (lightText ? '#ffffff' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size:32px;
    }

    `;     

export const Subtitle = styled.p`
    
    margin-bottom: 0px; 
    text-align:center;
    font-size:14px;
    line-height:18px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#ffffff')};

    @media screen and (max-width: 960px) {
        font-size:16px;
        line-height:20px;
        
    }


   
    `; 

export const BtnWrap = styled.div`
    display: block;
    justify-content: flex-start;
    margin:20px auto;
    text-align: center;
    width: 300px;
    border: 3px solid #ffffff;
    background: none !important;
    background-color: transparent !important;
    border-radius: 3px;
    letter-spacing: 6px;
    text-transform: uppercase;
    font-weight: 700;
    color: #ffffff !important;
    padding: 30px 0x !important;
       
    `;   
    
export const ImgWrap = styled.div`
    max-width: 355px;
    height:100%;
    margin:0px auto;
    text-align: center;
    display: none;
       
    `; 
    
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    margin:0px auto;
    text-align: center;
       
    `;    

