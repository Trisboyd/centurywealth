import React from 'react';
import { LoginForm, LoginTitle, Overlay, Input, InputLabel, Submit, InputContainer, Close, FormSwitch, FormSwitchSpan } from "./styledPopup";
import exit from '../../images/close-icon.svg';

const Popup = (props) => {

    // _______________________________ref that allows us to check form for validity
    const formRef = React.useRef();

    // __________________________________________________________________________________________________SIGNIN VS SIGNUP
    //_________form state for determining which form should be shown (sign in or sign up)
    // ____________________________________________________0 = signin, 1 = signup
    const [formState, setFormState] = React.useState(0);
    const [isValid, setIsValid] = React.useState('false');

    const formTitle = ['Sign in', 'Sign up'];

    const swapFormTitle = () => {
        if (formState === 0) {
            setFormState(1)
        }
        else setFormState(0);
    }

    const otherTitle = () => {
        return formTitle.filter((title) => title !== formTitle[formState]);
    }

    // _____________________________________________________________________________________________INPUTS AND VALIDATION
    const [hasValue, setHasValue] = React.useState(false);
    const [inputs, setInputs] = React.useState({
        email: '',
        password: '',
        name: ''
    })

    // ______________________________ reset inputs everytime popup is opened
    React.useEffect(() => {
        resetInputs();
    }, [props.isOpen]);

    // _____________________________________update submit button based on validity of form inputs
    const checkFormValidity = (event) => {
        setIsValid(formRef.current.checkValidity());
    }

    // ______________________________________________________ Validation messages
    const [errorMessages, setErrorMessages] = React.useState(
        { email: '', password: '', name: '' }
    );

    const updateErrorMessages = (event) => {
        const { name, validationMessage } = event.target;
        setErrorMessages({
            ...errorMessages,
            [name]: validationMessage
        })
    }

    // _______________________________________________________change inputs and error messages based on user input
    const handleChange = (event) => {
        checkInput(event);
        const { name, value } = event.target;
        errorMessages[name] && updateErrorMessages(event);
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    // _____________________________________ check if input has any values inputted, 
    // ______________________________________if so the label will remain transformed above the input
    const checkInput = (event) => {
        if (event.target.value) {
            setHasValue(true);
        }
        else setHasValue(false);
    }

    // ______________________________________________________reset inputs
    const resetInputs = () => {
        setInputs({
            email: '',
            password: '',
            name: ''
        })
        setErrorMessages({
            email: '',
            password: '',
            name: ''
        })
    }

    // _______________________________________login/signup function
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formState === 0) {
            props.handleSignin(inputs);
        }
        else
            props.handleSignup(inputs);
    }

    const closePopup = () => {
        props.closePopup();
    }

    return (
        <Overlay
            isOpen={props.isOpen}
        >
            <LoginForm
                onSubmit={handleSubmit}
                ref={formRef}
                onChange={checkFormValidity}
                novalidate>
                <Close
                    src={exit}
                    onClick={closePopup} />
                <LoginTitle>
                    {formTitle[formState]}
                </LoginTitle>
                {formState === 1 &&
                    <InputContainer>
                        <InputLabel
                            hasValue={hasValue}
                            for={'name'}>
                            name
                        </InputLabel>
                        <Input
                            onChange={handleChange}
                            onBlur={updateErrorMessages}
                            name='name'
                            type='text'
                            id={'name'}
                            value={inputs.name}>
                        </Input>
                    </InputContainer>
                }
                <InputContainer>
                    <InputLabel
                        hasValue={hasValue}
                        for={'email'}>
                        email
                    </InputLabel>
                    <Input
                        onChange={handleChange}
                        onBlur={updateErrorMessages}
                        name='email'
                        type='text'
                        id={'email'}
                        value={inputs.email}>
                    </Input>
                </InputContainer>
                <InputContainer>
                    <InputLabel
                        hasValue={hasValue}
                        for={'password'}>
                        password
                    </InputLabel>
                    <Input
                        onChange={handleChange}
                        onBlur={updateErrorMessages}
                        name='password'
                        type='password'
                        id={'password'}
                        value={inputs.password}>
                    </Input>
                </InputContainer>
                <Submit
                    isValid={isValid}
                    disabled={!isValid}>
                    {formTitle[formState]}
                </Submit>
                <FormSwitch> or
                    <FormSwitchSpan onClick={swapFormTitle}>
                        {otherTitle()}</FormSwitchSpan>
                </FormSwitch>
            </LoginForm>
        </Overlay>
    )
}

export default Popup;