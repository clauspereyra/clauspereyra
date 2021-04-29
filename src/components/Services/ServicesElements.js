import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height:200px;
    display: Flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("./../../images/bg-footer.jpg"); 
    background-attachment: fixed;
    

    @media screen and (max-width: 768px) {
        height: 500px;
    }

    @media screen and (max-width: 480px) {
        height: 600px;
    }

`;

export const ServicesWrapper = styled.div`
    max-width:100%;
    display: grid;
    margin:0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding:0 0px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`;

export const ServicesCard = styled.div`
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 240px;
    padding: 0px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.0);
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom:10px;
    display: none;

`;

export const ServicesH1 = styled.h1`
    font-size: 48px;
    font-weight: 700 !important;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom:64px;
    display: none;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

`;

export const ServicesH2 = styled.h2`
    font-size: 48px;
    font-weight: 700; 
    margin-bottom:10px;
    color: #ffffff;

    @media screen and (max-width: 960px) {
        font-size: 36px;
        font-weight: 700; 
        margin-bottom:10px;
        color: #ffffff;   
    }

`;

export const ServicesP = styled.p`
    font-size: 24px;
    text-align: center;
    color: #ffffff;

`;


