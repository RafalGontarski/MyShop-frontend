import styled from "styled-components";

export const StyledCheckbox = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  outline: none;
  position: relative;

  &:before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    transition: border-color 0.2s;
  }

  &.checked:before {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23000" d="M9 16.2l-4.2-4.2l-1.4 1.4L9 19L21 7l-1.4-1.4L9 16.2z"/></svg>');
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position: center;
    border-color: #000;
  }

  &:hover:before {
    border-color: #000;
  }
`;

export const CheckboxIcon = styled.div`
  width: 16px;
  height: 16px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23000" d="M9 16.2l-4.2-4.2l-1.4 1.4L9 19L21 7l-1.4-1.4L9 16.2z"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;




















