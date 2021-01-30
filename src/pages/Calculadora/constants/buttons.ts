import changeStyles from '../utils/changeStyle'
import { ButtonsList } from '../types'

const symbols = [
    '(', ')', '⌫', 'C',
    7, 8, 9, '÷',
    4, 5, 6, '×',
    1, 2, 3, '-',
    0, '.', '=', '+'
]

const buttons: ButtonsList[] = symbols.map((s: string | number) => {
    const style = changeStyles(s)
    return {
        label: s.toString(),
        background: style.background,
        color: style.color,
    }
})

export { }

export default buttons