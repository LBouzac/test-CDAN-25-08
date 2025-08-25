import { expect, it, describe } from 'vitest'
import {add} from "../stringCalculator";

describe('test of function add',() => {
        it('returns 0 for empty string', () => {
        expect(add('0')).toBe(0)
        expect(add('1')).toBe(1)
        expect(add('2')).toBe(2)
    })
})
