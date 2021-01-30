import React from 'react';
import Screen from './components/ScreenComponent'
import Button from './components/Button'

import './style.css'

function App() {
  return (
    <>
      <Screen expression="2+2" result="4" />
      <Button onClick={() => { }} label="2" background="#ff0000" color="#fff" />
    </>
  );
}

export default App;
