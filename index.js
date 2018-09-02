/**
 * asserter
 * ----
 * tests the method provided by developer-ci-benefits-demo
 * @param expected
 * @param result
 * @param message
 * @returns console.assert expected === result, message
 */
import asserter from 'developer-ci-benefits-demo'

const expected = 1
const result = 1
const message = '1 === 1'

asserter(expected, result, message)

