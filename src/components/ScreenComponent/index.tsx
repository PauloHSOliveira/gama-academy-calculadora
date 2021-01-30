import React from 'react';
import { ScreenContainer } from './StyledComponents'
import { IProps } from './types'

const ScreenComponent: React.FC<IProps> = ({ expression, result }) => {
    return <ScreenContainer>
        <div>{expression}</div>
        <div>{result}</div>
    </ScreenContainer>
}

export default ScreenComponent;