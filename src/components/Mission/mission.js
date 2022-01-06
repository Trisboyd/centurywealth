import { MissionLink, MissionSection, MissionText, PageTitle } from "./styledMission"
import { missionStatement } from '../../utilities/constants';


const Mission = () => {

    return (
        <MissionSection>
            <PageTitle id={'mission'}>
                Our Purpose
            </PageTitle>
            <MissionText>
                {missionStatement}
            </MissionText>
            <MissionLink
                to='/contact'>
                We would love to help you today!
            </MissionLink>
        </MissionSection>
    )
}

export default Mission;