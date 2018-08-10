import {testAddFunction} from 'ducks/app'

describe('test function', () => {
    test('1 + 2 = 3', () => {
        expect(testAddFunction(1,2)).toBe(3)
    })
})