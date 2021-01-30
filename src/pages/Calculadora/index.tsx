import React from 'react';
import Screen from '../../components/ScreenComponent'
import Button from '../../components/Button'

import { Container, ButtonsContainer } from './StyledComponents'

import './style.css'

function App() {
  const buttons = [
    '(', ')', '⌫', 'C',
    7, 8, 9, '÷',
    4, 5, 6, '×',
    1, 2, 3, '-',
    0, '.', '=', '+'
  ]
  return (
    <Container>
      <Screen expression="2+2" result="4" />
      <ButtonsContainer>
        {buttons.map(item => <Button onClick={() => { }} label="2" background="#ff0000" color="#fff" />)}
      </ButtonsContainer>
    </Container>
  );
}

export default App;
