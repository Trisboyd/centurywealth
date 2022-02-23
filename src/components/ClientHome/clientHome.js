import React from 'react';
import { AccountDiv, AccountsPic, AccountsRow, AccountsText, ClientTitle, HomeDiv, HomeSection, Overlay } from './styledClientHome';
import pig from '../../images/pig.jpg';
import home from '../../images/home.png';

const ClientHome = (props) => {

    return (
        <HomeSection>
            <ClientTitle>
                Welcome, {props.username}
            </ClientTitle>
            <HomeDiv>
                <AccountDiv
                    size={'35vw'}>
                    <AccountsText
                        $bold={true}
                        size={'20px'}>
                        Century Accounts
                    </AccountsText>
                    <AccountsRow
                        $total={true}>
                        <AccountsText
                            $bold={true}
                            size={'24px'}>
                            Total Century Accounts Value:
                        </AccountsText>
                        <AccountsText
                            $bold={true}
                            size={'24px'}>
                            $21,337
                        </AccountsText>
                    </AccountsRow>
                    <AccountsRow>
                        <AccountsText>
                            Roth IRA-1
                        </AccountsText>
                        <AccountsText>
                            $12,874
                        </AccountsText>
                    </AccountsRow>
                    <AccountsRow>
                        <AccountsText>
                            Joint-1
                        </AccountsText>
                        <AccountsText>
                            $3,528
                        </AccountsText>
                    </AccountsRow>
                    <AccountsRow>
                        <AccountsText>
                            Joint-2
                        </AccountsText>
                        <AccountsText>
                            $4,935
                        </AccountsText>
                    </AccountsRow>
                </AccountDiv>
                <AccountDiv
                    size={'25vw'}>
                    <AccountsText
                        $bold={true}
                        size={'24px'}>
                        Goals
                    </AccountsText>
                    <AccountsRow
                        direction={'column'}>
                        <AccountsPic src={pig} />
                        <AccountsText
                            tAlign={'center'}>
                            {props.username} Retirement
                        </AccountsText>
                        <AccountsText
                            tAlign={'center'}>
                            value: $16,402
                        </AccountsText>
                    </AccountsRow>
                    <AccountsRow
                        direction={'column'}>
                        <AccountsPic src={home} />
                        <AccountsText
                            tAlign={'center'}>
                            {props.username} House Down Payment
                        </AccountsText>
                        <AccountsText
                            tAlign={'center'}>
                            value: $4,935
                        </AccountsText>
                    </AccountsRow>
                </AccountDiv>
            </HomeDiv>
            <HomeDiv>
                <AccountDiv
                    size={'70vw'}
                    $market={true}>
                    <AccountsText
                        tAlign={'center'}
                        $bold={true}
                        size={'32px'}>
                        Market Watch
                    </AccountsText>
                    <AccountsRow>
                        <AccountsText>
                            DJIA
                        </AccountsText>
                    </AccountsRow>
                    <AccountsRow>
                        <AccountsText>
                            COMPQ
                        </AccountsText>
                    </AccountsRow>
                    <AccountsRow>
                        <AccountsText>
                            SPX
                        </AccountsText>
                    </AccountsRow>
                </AccountDiv>
            </HomeDiv>
        </HomeSection>
    )
}

export default ClientHome;