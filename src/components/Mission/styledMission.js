import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MissionSection = styled.section`
    width: 100vw;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    background: #E8F4F8;

    @media (max-width: 768px) {
        padding: 60px 0;
    }
    @media (max-width: 525px) {
        padding: 40px 0;
    }
`
export const PageTitle = styled.h2`
    font-family: 'Noto', sans-serif;
    font-weight: 500;
    font-size: 40px;
    width: 30vw;
    margin: 0 auto 50px;
    text-align: center;
    opacity: .7;
    padding-bottom: 20px;
    border-bottom: 2px solid green;

    @media (max-width: 768px) {
        font-size: 32px;
    }
    @media (max-width: 525px) {
        font-size: 24px;
        width: 40vw;
    }
    @media (max-width: 325px) {
        font-size: 24px;
        width: 50vw;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }
`
export const MissionText = styled.p`
    font-family: 'Noto', sans-serif;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    line-height: 1.8;
    width: 60vw;
    margin: 0 auto;

    @media (max-width: 768px) {
        font-size: 18px;
        width: 65vw;
    }
    @media (max-width: 525px) {
        font-size: 14px;
        width: 75vw;
    }
    @media (max-width: 325px) {
        font-size: 14px;
        width: 90vw;
    }
`
export const MissionLink = styled(Link)`
    font-family: 'Noto', sans-serif;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    color: green;
    margin-top: 20px;

    @media (max-width: 525px) {
        font-size: 18px;
    }
`