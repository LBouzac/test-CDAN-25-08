import { expect, it, describe } from 'vitest'
import {add} from "../stringCalculator";

describe('test of function add',() => {

    it('returns 0 for empty string', () => {
        expect(add('0')).toBe(0)
    })

    it('returns infinity numbers', () => {
        expect(add('1,2,3,4,5,6,7,8,9,10')).toBe(55)
    })

    it('returns numbers with init number contains \\n , ', () => {
        expect(add('1\\n2,3')).toBe(6)
    })

    it('returns numbers with split //[delimiter]\\n[numbers...]', () => {
        expect(add('//;\\n1;2')).toBe(3)
    })

    it('returns with negative number , ', () => {
        expect(add('//\\n-2')).toBe("Negatives not allowed. -2")
    })

    it('returns with negative numbers , ', () => {
        expect(add('//;\\n-2;-9;-4')).toBe("Negatives not allowed. -2;-9;-4")
    })

    it('returns numbers except 1000 or more , ', () => {
        expect(add('1,2,1002')).toBe(3)
    })
})
