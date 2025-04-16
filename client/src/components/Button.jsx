import styled from 'styled-components';

const Button = styled.button`
  font-weight: bold;
  align-self: center;
  background: transparent;
  cursor:pointer;
  padding: 1rem 1rem;
  margin: 0 1rem;
  transition: all 0.2s ease;
  color: #000000;
  font-size: 1rem;
  letter-spacing: 1px;
  outline: none;
  box-shadow: 10px 10px 0px 0px hsla(0, 0, 0, 0.5);
  border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;

  &:hover {
    box-shadow: 0px 0px 0px 0px hsla(0, 0, 0, 0.5);
  }

  &.box1 {
    border: solid 6px #000000;
  }
    &:focus {
    outline: 3px solid #ffbf47;
    outline-offset: 2px; 
  }
`;

export default Button;
