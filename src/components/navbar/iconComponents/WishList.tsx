import React from "react";
import {
    Container,
    MenuWrapper, MyProfileContainer,
    MyProfileLeftContainer,
    Title,
    WrapperMenuButton
} from "../../editPages/editPages.styles";
import {LinksContainer, ProfileDrawerLink, ProfileLine} from "../../tools/drawer/ProfileDrawer.styles";
import {Link} from "react-router-dom";
import {HelpDeskAdvantageChildLink} from "../../helpDesk/HelpDeskTools.styles";
import {StyledMenuIcon} from "../Navbar.styles";
import {CategoryTitleContainer} from "../../editPages/categoriesEditPanel/CategoryEditPanel.styles";
import {WelcomeText} from "../../tools/drawer/Drawer.styles";
import {
    FormContainer,
    ProfileImageContainer,
    ProfilePageWelcome
} from "../../editPages/bookAdressEditPanel/AdressBookEditPanel.styles";
import CustomButton from "../../tools/button/Button";


export const WishList: React.FC = () => {
    return (
        <MyProfileContainer>
            <MyProfileLeftContainer>
                <CustomButton
                    label={"nowy schowek"}
                    // disabled={!isEmailValid || !isPasswordValid}
                    // onClick={handleUpdateAddressBook}
                />

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
                    <ProfileImageContainer>
                        <ProfilePageWelcome>
                            <WelcomeText variant="h4" gutterBottom>
                                NOTHING TO SEE. SUCH EMPTY.
                            </WelcomeText>
                        </ProfilePageWelcome>
                    </ProfileImageContainer>
                </FormContainer>
            </Container>
        </MyProfileContainer>
    )
}