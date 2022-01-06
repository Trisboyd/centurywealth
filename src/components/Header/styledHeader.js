import styled from 'styled-components';
import { Link as Link1 } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';

export const HeaderBar = styled.header`
    opacity: .9;
    background: #E8F4F8;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`
export const HeaderLinks = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 70px;
    align-items: center;
    z-index: 2;

    @media (max-width: 768px) {
        height: 50px;
    }
    @media (max-width: 525px) {
        height: 30px;
    }
`
export const HeaderLink = styled(Link1)`
    font-family: 'Noto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s ease border;
    border-bottom: none;

    :hover {
        border-bottom: 1px solid black;
    }
    @media (max-width: 525px) {
        font-size: 15px;
    }
    @media (max-width: 325px) {
        font-size: 12px;
    }
`
export const PageLink = styled(Link2)`
    font-family: 'Noto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s ease border;
    border-bottom: none;

    :hover {
        border-bottom: 1px solid black;
    }
    @media (max-width: 525px) {
        font-size: 15px;
    }
    @media (max-width: 325px) {
        font-size: 12px;
    }
`