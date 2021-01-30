import styled from 'styled-components';

interface ButtonContainerProps {
    background: string,
    color: string,
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background: ${props => props.background};
  color: ${props => props.color};
  width: 50px;
  height: 50px;
  border: 0;
  outline: 0;
  border-radius: 0.8rem;
  font-size: 2.5rem;
`;
