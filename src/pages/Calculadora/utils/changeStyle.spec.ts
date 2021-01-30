import changeStyle from './changeStyle'

describe('change style', () => {
    it('it should returns number styles', () => {
        expect(changeStyle(2)).toEqual({ background: "#0a0a0a", color: '#808080' })
    })

    it('it should returns equal styles', () => {
        expect(changeStyle('=')).toEqual({ background: "#d10028", color: '#fff' })
    })

    it('it should returns C styles', () => {
        expect(changeStyle('C')).toEqual({ background: "#ea4900", color: '#fff' })
    })

    it('it should returns default styles', () => {
        expect(changeStyle('+')).toEqual({ background: "#d3d3d3", color: '#0a0a0a' })
    })
})