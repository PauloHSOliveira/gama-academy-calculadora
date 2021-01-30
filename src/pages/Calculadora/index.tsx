import React, { useState } from 'react';

import buttons from './constants/buttons'

import Screen from '../../components/ScreenComponent'
import Button from '../../components/Button'
import { ActionsList } from './types'
import { Container, ButtonsContainer } from './StyledComponents'

import './style.css'

function App() {
  const [expression, setExpression] = useState('')
  const [result, setReasult] = useState('')

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const click = event.currentTarget.innerText

    if (click === ActionsList.calc) {
      return calc(expression)
    }

    if (click === ActionsList.clear) {
      return clear()
    }

    if (click === ActionsList.clearLastItem) {
      return clearLastItem()
    }

    setReasult(result + click)
  }

  const calc = (expression: string) => {
    return
  }

  const clear = (): void => {
    setReasult('')
    setExpression('')
  }

  const clearLastItem = (): void => {
    setReasult(result.slice(0, -1))
  }

  return (
    <Container>
      <Screen expression={expression} result={result} />
      <ButtonsContainer>
        {buttons.map((item) => <Button onClick={handleOnClick} label={item.label} background={item.background} color={item.color} key={item.label} />)}
      </ButtonsContainer>
    </Container>
  );
}

export default App;
