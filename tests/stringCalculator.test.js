import { expect, it, describe } from 'vitest'
import {add} from "../stringCalculator";

describe('test of function add',() => {

    it('returns 0 for empty string', () => {
        expect(add('0')).toBe(0)
    })

    it('return infinity numbers', () => {
        expect(add('1,2,3,4,5,6,7,8,9,10')).toBe(55)
    })
})
