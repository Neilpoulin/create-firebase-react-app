import {toJS} from './DataUtil'

test('toJS', () => {
    expect(toJS(null)).toBe(null)
})
