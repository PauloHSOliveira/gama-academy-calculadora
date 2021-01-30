import tokenizer from './tokenizer'

describe('tokenizer', () => {
    it('it should tokenizer expression in polish notation', () => {
        expect(tokenizer('(+ 2 2 2)'))
            .toEqual(['(', '+', 2, 2, 2, ')'])
    })
})