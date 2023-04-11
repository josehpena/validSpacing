const {validSpacing} = require('../src/index.js');

describe('validSpacing', () =>{
    it('Should return true if has no space', () =>{
        let result = validSpacing('');

        expect(result).toBe(true);
    });
})