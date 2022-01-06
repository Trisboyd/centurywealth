import { AboutContainer, AboutSection, AboutText, Headshot } from "./styledAbout";
import { bioL, bioN } from '../../utilities/constants';
import picL from '../../images/headshot.jpg';
import picN from '../../images/partner.jpg';
import { PageTitle } from "../Mission/styledMission";

const About = () => {

    return (
        <AboutSection>
            <PageTitle>Our Team</PageTitle>
            <AboutContainer>
                <Headshot src={picL} />
                <AboutText>
                    {bioL}
                </AboutText>
            </AboutContainer>
            <AboutContainer>
                <Headshot src={picN} />
                <AboutText>
                    {bioN}
                </AboutText>
            </AboutContainer>
        </AboutSection>
    )
}

export default About;