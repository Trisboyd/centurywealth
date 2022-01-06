import styled from 'styled-components';

export const InputContainer = styled.div`
    grid-column-start: ${props => props.columnStart};
    grid-column-end: ${props => props.columnEnd};
    grid-row-start: ${props => props.rowStart};
    grid-row-end: ${props => props.rowEnd};
    background: #EAEBEC;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 80%;
    margin: 0 auto 15px;
    margin-left: ${props => props.marginL && '19%'};
    margin-right: ${props => props.marginR && '20%'};
    padding-left: 10px;

    @media (max-width: 425px) {
        width: 90%;
        margin: 0 auto;
    }
`
export const InputLabel = styled.label`
    font-size: 20px;
    margin: 10px 0;

    @media (max-width: 525px) {
        font-size: 16px;
    }
`
export const ContactInput = styled.input`
    border: none;
    background: #EAEBEC;
    margin-bottom: 10px;
    font-size: 15px;
    height: 20px;

    @media (max-width: 525px) {
        font-size: 12px;
    }
`
export const ContactTextArea = styled.textarea`
    border: none;
    background: #EAEBEC;
    margin-bottom: 10px;
    height: ${props => props.height};

    @media (max-width: 525px) {
        font-size: 12px;
    }
    @media (max-width: 425px) {
        height: 120px;
    }
`