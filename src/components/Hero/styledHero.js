import styled from 'styled-components';
import tree from '../../images/tree.jpg';

export const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 50vw;
    background: url(${tree});
    background-size: cover;
    background-position: bottom;

    @media (max-width: 768px) {
        height: 60vw;
    }
    @media (max-width: 525px) {
        height: 75vw;
    }
    @media (max-width: 325px) {
        height: 100vw;
        background-position: left-bottom;
    }
`
export const HeroTitle = styled.h1`
    font-size: 75px;
    font-family: 'Noto', sans-serif;
    font-weight: 500;
    font-style: italic;
    color: #FFF;
    opacity: 0.9;
    margin: auto 0 0 0;

    @media (max-width: 768px) {
        font-size: 44px;
    }
    @media (max-width: 525px) {
        font-size: 32px;
    }
`