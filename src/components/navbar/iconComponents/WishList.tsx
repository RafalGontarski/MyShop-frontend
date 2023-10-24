import React from "react";
import {
    Title,
    Container,
    MenuWrapper,
    WrapperMenuButton,
    MyProfileContainer,
    MyProfileLeftContainer,
} from "../../editPages/editPages.styles";

import {StyledMenuIcon} from "../Navbar.styles";
import {CategoryTitleContainer} from "../../editPages/categoriesEditPanel/CategoryEditPanel.styles";
import {WelcomeText} from "../../tools/drawer/Drawer.styles";
import {
    FormContainer,
    ProfileImageContainer,
    ProfilePageWelcome
} from "../../editPages/bookAdressEditPanel/AdressBookEditPanel.styles";

import NewStorage from "../../tools/button/NewStorage";


export const WishList: React.FC = () => {
    return (
        <MyProfileContainer>
            <MyProfileLeftContainer>
                <NewStorage label={'Nowy'}/>
            </MyProfileLeftContainer>

            <Container>
                <MenuWrapper>
                    <WrapperMenuButton
                        edge="start"
                        aria-label="menu"
                        onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
                        onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
                        disableRipple
                        // onClick={handleIconClick}
                    >
                        <StyledMenuIcon />
                    </WrapperMenuButton>
                </MenuWrapper>
                <CategoryTitleContainer>
                    <Title style={{borderBottomColor: 'black'}}>Aktualnie nie masz schowka</Title>
                </CategoryTitleContainer>

                <FormContainer>
                    <ProfileImageContainer style={{backgroundColor: '#f5f5f5'}}>
                        <ProfilePageWelcome style={{backgroundColor: '#f5f5f5'}}>
                            <WelcomeText variant="h4" gutterBottom style={{color: 'lightgray', backgroundColor: '#f5f5f5'}}>
                                NIE MASZ NIC DO OBEJRZENIA. PUSTO.
                            </WelcomeText>
                        </ProfilePageWelcome>
                    </ProfileImageContainer>
                </FormContainer>
            </Container>
        </MyProfileContainer>
    )
}