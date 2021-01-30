import React from 'react'
export interface IProps {
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
    label: string;
    color: string;
    background: string;
    icon?: string;
}