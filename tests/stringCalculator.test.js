import { expect, it, describe } from 'vitest'
import {add} from "../stringCalculator";

describe('test of function add',() => {
        it('returns 0 for empty string', () => {
        expect(add('')).toBe(0)
    })
})
