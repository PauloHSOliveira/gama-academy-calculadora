import React, { FC } from 'react';

import { ButtonContainer } from './StyledComponents'

import { IProps } from './types'

const Button: FC<IProps> = ({ onClick, label, color, background, icon }) => {
    return (
        <ButtonContainer
            onClick={onClick}
            background={background}
            color={color}
        >
            {icon && <i>{icon}</i>}
            {label}
        </ButtonContainer>)
}

export default Button;