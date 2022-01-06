import styled from 'styled-components';

export const ContactForm = styled.form`
    width: 80vw;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: repeat(6, auto);
    grid-column-gap: 15px;
    grid-row-gap: 20px;
    background: #F6F7F8;
    margin: 100px auto;
    border-radius: 20px;

    @media (max-width: 525px) {
        grid-row-gap: 10px;
    }
    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
        width: 90%;
    }
`
export const ContactTitle = styled.h3`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    font-size: 40px;
    margin: 20px auto;
    text-align: center;

    @media (max-width: 525px) {
        font-size: 32px;
    }
`
export const ContactSubmit = styled.button`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 8;
    grid-row-end: 10;
    margin: 20px auto 50px;
    width: 50%;
    height: 50px;
    background: #6C89A2;
    color: #F1F2F4;
    font-size: 18px;
    border-radius: 40px;

    @media (max-width: 525px) {
        margin: 10px auto 30px;
    }
`
