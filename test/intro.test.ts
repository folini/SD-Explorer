// ----------------------------------------------------------------------------
// © 2021 - Franco Folini
// ----------------------------------------------------------------------------
import {actions} from "../src/sections/intro"

import "jest-get-type"
import "html-validate/jest"
import "jest-chain"
import "jest-extended"

test("report() generates valid HTML", () => {
  return actions.reporter('', undefined).then(data => {
    expect(data).toBeString().toHTMLValidate()
  })
})

test("injector() always returns 'undefined'", () => {
  expect(actions.injector()).toBeUndefined()
})

test("eventManager() always returns 'undefined'", () => {
  expect(actions.eventManager()).toBeUndefined()
})
