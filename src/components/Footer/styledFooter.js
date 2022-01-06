import styled from 'styled-components';

export const FooterSection = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0;
    background: #E8F4F8;
`

export const Logo = styled.img`
    width: 150px;
    height: 150px;
    margin: 0 auto;
`
export const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const FooterText = styled.p`
    font-size: 14px;
    opacity: .8;
    text-align: center;
`
export const BrokerLink = styled.a`
    max-width: 200px;
    max-height: 200px;
    margin: 50px auto 0;
`
export const BrokerImage = styled.img`
    width: 200px;
    object-fit: cover;
`