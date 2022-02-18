import styled from 'styled-components';
import wallStreet from '../../images/wallStreet.jpg';

export const HomeSection = styled.section`
    width: 100vw;
    background: #E8E8E8;
    color: #FFF;
`
export const HomeDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70vw;
    margin: auto;
`
export const ClientTitle = styled.h2`
    font-family: 'Noto', sans-serif;
    font-weight: 500;
    font-size: 40px;
    text-align: center;
    padding: 20px 0;
    color: black;

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
export const AccountDiv = styled.div`
    background: ${props => props.$market ? `url(${wallStreet})` : 'white'};
    background-position: top;
    width: ${props => props.size};
    margin: 50px 0;
    padding: 15px 30px;
    border-radius: 10px;
`
export const AccountsPic = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 20px;
    margin: 10px auto;
`
export const AccountsText = styled.p`
    font-style: 'Noto', sans-serif;
    font-weight: ${props => props.$bold ? 500 : 400};
    font-size: ${props => props.size};
    color: black;
    grid-column-start: ${props => props.cStart};
    grid-column-end: ${props => props.cEnd};
    text-align: ${props => props.tAlign};
    margin: 10px;
`
export const AccountsRow = styled.div`
    border: 0.2px solid #525252;
    border-radius: 10px;
    box-shadow: ${props => props.$total && '1px 1px black'};
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: space-between;
    padding: 5px 15px;
    background-color: #E8F4F8;
    margin: 0 auto 20px;
`