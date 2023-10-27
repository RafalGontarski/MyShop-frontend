import styled from "styled-components";

export const SuccessfullyToastCont = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 30rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 1000;
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    font-size: 1rem;
    cursor: pointer;
`;
