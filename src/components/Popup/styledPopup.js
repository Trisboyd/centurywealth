import styled from 'styled-components';

export const Overlay = styled.section`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    background-color:rgba(0, 0, 0, 0.4);
    z-index: 1;
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: visibility 1s, opacity 1s ease;
    `
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    background-color: rgba(107,131,153,0.85);
    border-radius: 75px;
    position: relative;

    @media (max-width: 768px) {
        width: 60%;
    }
    @media (max-width: 525px) {
        width: 70%;
    }
    @media (max-width: 400px) {
        width: 80%;
    }
`
export const LoginTitle = styled.h3`
    font-family: 'Noto', sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 1.2;
    color: white;
    text-align: center;
`

// make this all a separate component: Login Input component
export const InputContainer = styled.div`
    position: relative;
    width: 80%;
    margin: 25px auto;

    @media (max-width: 525px) {
        width: 90%;
        margin: 15px auto;
    }
`
export const Input = styled.input`
    width: 100%;
    height: 32px;
    margin: 0 auto;
`
export const InputLabel = styled.label`
    font-family: 'Noto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    position: absolute;
    margin-left: 1%;
    transition: 0.3s ease all;
    transform: ${props => props.hasValue ? 'translate(0, -28px) scale(1)' : ''};
    color: ${props => props.hasValue ? 'white' : 'black'};

    ${InputContainer}:hover & {
        transform: translate(0, -28px) scale(1);
        color: white;
    }
`
export const Submit = styled.button`
    margin: 40px auto;
    border-radius: 100px;
    font-size: 18px;
    line-height: 1.33;
    text-align: center;
    outline: none;
    width: 50%;
    height: 40px;
    background: ${props => props.isValid ? '#058CBA' : '#2F71E5'};
    color: white;
    cursor: pointer;

    @media (max-width: 525px) {
        margin: 20px auto;
    }
`
export const Close = styled.img`
    position: absolute;
    top: -15px;
    right: -15px;
    cursor: pointer;
`
export const FormSwitch = styled.p`
    font-family: 'Noto', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 17px;
    text-align: center;
    color: #FFF;
`
export const FormSwitchSpan = styled.a`
    color: #6DFB9E;
    margin-left: 12px;
    cursor: pointer;
`
