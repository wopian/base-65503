const { encode, decode } = require('./')

describe('Base 65503 Encoder', () => {
    it('should encode 0 to  ', () => {
        expect(encode(0)).toBe(' ')
    })

    it('should encode 1 to !', () => {
        expect(encode(1)).toBe('!')
    })

    it('should encode 10 to *', () => {
        expect(encode(10)).toBe('*')
    })

    it('should encode 100 to ', () => {
        expect(encode(100)).toBe('')
    })

    it('should encode 1000 to Ј', () => {
        expect(encode(1000)).toBe('Ј')
    })

    it('should encode 10000 to ✰', () => {
        expect(encode(10000)).toBe('✰')
    })

    it('should encode 100000 to !蛡', () => {
        expect(encode(100000)).toBe('!蛡')
    })

    it('should encode 1000000 to /䑏', () => {
        expect(encode(1000000)).toBe('/䑏')
    })

    it('should encode 10000000 to ¸꨸', () => {
        expect(encode(10000000)).toBe('¸꨸')
    })

    it('should encode 100000000 to ؖꗖ', () => {
        expect(encode(100000000)).toBe('ؖꗖ')
    })
})

describe('Base 65503 Decoder', () => {
    it('should decode   to 0', () => {
        expect(decode(' ')).toBe(0)
    })

    it('should decode ! to 1', () => {
        expect(decode('!')).toBe(1)
    })

    it('should decode * to 10', () => {
        expect(decode('*')).toBe(10)
    })

    it('should decode  to 100', () => {
        expect(decode('')).toBe(100)
    })

    it('should decode Ј to 1000', () => {
        expect(decode('Ј')).toBe(1000)
    })

    it('should decode ✰ to 10000', () => {
        expect(decode('✰')).toBe(10000)
    })

    it('should decode !蛡 to 100000', () => {
        expect(decode('!蛡')).toBe(100000)
    })

    it('should decode /䑏 to 1000000', () => {
        expect(decode('/䑏')).toBe(1000000)
    })

    it('should decode ¸꨸ to 10000000', () => {
        expect(decode('¸꨸')).toBe(10000000)
    })

    it('should decode ؖꗖ to 100000000', () => {
        expect(decode('ؖꗖ')).toBe(100000000)
    })
})
