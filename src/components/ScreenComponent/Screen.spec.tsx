import { render, screen, } from '@testing-library/react'
import Screen from './index'

describe('<Visor />', () => {
    it('it should render screen', () => {
        render(<Screen expression="3+1" result="4" />)
        screen.getByText('3+1')
        screen.getByText('4')
    })
})