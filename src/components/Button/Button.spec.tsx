import { fireEvent, render, screen } from '@testing-library/react'
import Button from './index'

describe('<Button />', () => {
    it('it should run onclick event', () => {
        const handleOnClick = jest.fn()
        render(<Button onClick={handleOnClick} label="test_label" background="#000" color="#fff" />)
        fireEvent.click(screen.getByText('test_label'))
        expect(handleOnClick).toBeCalled()
    })

    it('it should render icon', () => {
        render(<Button onClick={() => { }} label="test_label" icon="❤" background="#000" color="#fff" />)
        screen.getByText('❤')
    })
})