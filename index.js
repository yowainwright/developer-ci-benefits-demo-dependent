/**
 * asserter
 * ----
 * tests the method provided by developer-ci-benefits-demo
 * @param expected
 * @param result
 * @param message
 * @returns console.assert expected === result, message
 */
import { asserter } from 'developer-ci-benefits-demo'

export const asserterFunc = (expected, result, message) => asserter(expected, result, message)
