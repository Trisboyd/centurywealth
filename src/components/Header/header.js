import { HeaderBar, HeaderLink, HeaderLinks, PageLink } from './styledHeader';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Header = (props) => {

    const location = useLocation().pathname;

    const openPopup = () => {
        props.openPopup();
    }

    const handleClientClick = () => {
        props.loggedIn ? Navigate('/accounthome') : openPopup();
    }

    return (
        <HeaderBar>
            <HeaderLinks>
                <HeaderLink
                    to='/home'>
                    Home
                </HeaderLink>
                {location === '/home' &&
                    <>
                        <PageLink
                            activeClass="active"
                            to='about'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            About
                        </PageLink>
                        <PageLink
                            activeClass="active"
                            to='mission'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Mission
                        </PageLink>
                    </>}
                <HeaderLink
                    to='/contact'>
                    Contact
                </HeaderLink>
                <HeaderLink
                    to='#'
                    onClick={handleClientClick}>
                    Clients
                </HeaderLink>
            </HeaderLinks>
        </HeaderBar>
    )
}

export default Header;