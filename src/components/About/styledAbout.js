import styled from 'styled-components';

export const AboutSection = styled.section`
    padding: 50px 0;
`
export const AboutContainer = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: row;
    margin: 80px auto;
    justify-content: space-around;

    @media (max-width: 700px) {
        flex-direction: column;
        justify-content: center;
        margin: 20px auto;
    }
`
export const Headshot = styled.img`
    width: 31vw;
    max-width: 464px;
    max-height: 520px;
    border-radius: 40%;
    object-fit: cover;
    object-position: top;

    @media (max-width: 700px) {
        margin: 0 auto 20px;
    }
`
export const AboutText = styled.p`
    font-family: 'Noto', sans-serif;
    font-weight: 400;
    font-size: 24px;
    width: 30vw;

    @media (max-width: 768px) {
        font-size: 18px;
        width: 40vw;
    }
    @media (max-width: 700px) {
        margin: 0 auto;
        width: 80vw;
    }
    @media (max-width: 525px) {
        font-size: 14px;
    }
    @media (max-width: 325px) {
        font-size: 14px;
    }
`