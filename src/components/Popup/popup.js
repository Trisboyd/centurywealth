import { LoginForm, LoginTitle, Overlay, Input, InputLabel, Submit, InputContainer, Close } from "./styledPopup";
import exit from '../../images/close-icon.svg';

const Popup = (props) => {

    const closePopup = () => {
        props.closePopup();
    }

    return (
        <Overlay
            isOpen={props.isOpen}
        >
            <LoginForm>
                <Close 
                src={exit}
                onClick={closePopup} />
                <LoginTitle>
                    Log in
                </LoginTitle>
                <InputContainer>
                    <InputLabel
                        for={'email'}>
                        email
                    </InputLabel>
                    <Input
                        id={'email'}>
                    </Input>
                </InputContainer>
                <InputContainer>
                    <InputLabel
                        for={'password'}>
                        password
                    </InputLabel>
                    <Input
                        id={'password'}>
                    </Input>
                </InputContainer>
                <Submit>Login</Submit>
            </LoginForm>
        </Overlay>
    )
}

export default Popup;