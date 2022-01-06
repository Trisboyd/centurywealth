import logo from '../../images/logo.png';
import brokerLogo from '../../images/brokerCheck.jpg';
import { address } from '../../utilities/constants';
import { BrokerImage, BrokerLink, FooterInfo, FooterSection, FooterText, Logo } from './styledFooter';

const Footer = () => {

    return (
        <FooterSection>
            <Logo src={logo} alt='logo' />
            <FooterInfo>
                <FooterText>
                    {address}
                </FooterText>
                <BrokerLink href={'https://brokercheck.finra.org/</FooterInfo>'} target='_blank'>
                <BrokerImage src={brokerLogo} />
                </BrokerLink>
            </FooterInfo>
        </FooterSection>
    )
}

export default Footer;