import styled from "styled-components";
import {Box} from "@mui/system";


export const AddressTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-right: 14%;
`;




export const EditProfileContainer = styled.div`

`
// edit form
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    //width: 100%;
    padding: 20px;
    //border: 1px solid #000;
    //border-radius: 1px;
`

export const ProfileImageContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    margin-right: 25%;
    margin-left: 11%;
    border: 3px solid #f5f5f5;
    border-radius: 14px;
    padding: 32px 16px 48px;
    background-color: #f5f5f5;
  
    @media (max-width: 940px) {
      margin-right: 15%;
      margin-left: 11%;
    }
`

export const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`

export const UploadButton = styled.button`
    margin-top: 10px;
    padding: 5px 10px;
    cursor: pointer;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
    border: 3px solid #e8e8e8;
    border-radius: 4px;
    padding: 32px 16px 48px;
`

export const InputLabel = styled.label`
    margin-bottom: 5px;
`

export const InputField = styled.input`
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
`

export const SubmitButton = styled.button`
    padding: 10px 20px;
    cursor: pointer;
    background-color: #008000;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #006600;
    }
`

export const EditLine = styled.hr`
    width: 80%;
    margin: 2rem 0;
    //margin-right: 2rem;
    border: none;
    height: 3px;
    background-color: #e8e8e8;
    border-radius: 4px;
`

export const ProfilePageWelcome = styled(Box)`
  && {
    display: flex;
    //align-items: flex-start;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f5f5f5;
  }
`




// wrapper
