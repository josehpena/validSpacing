const {validSpacing} = require('../src/index.js');

describe('validSpacing', () =>{
    it('Should return true if has no space', () =>{
        let result = validSpacing('');

        expect(result).toBe(true);
    });

    it('Should return false if has only a space without any word', () =>{
        let result = validSpacing(' ');

        expect(result).toBe(false);
    })

    it('Should return false if has a space at the start or end of the string', () =>{
        expect(validSpacing(' Hello World')).toBe(false);
        expect(validSpacing('Hello World ')).toBe(false);
        expect(validSpacing(' Hello World ')).toBe(false);
    })

    it('Should return false if has more than 2 spaces together', () =>{
        expect(validSpacing('Hello  World')).toBe(false);
        expect(validSpacing('Hello   World')).toBe(false);
    })

    it('should return true if has valid spacing', () =>{
        expect(validSpacing('Hello World')).toBe(true);
    })
})