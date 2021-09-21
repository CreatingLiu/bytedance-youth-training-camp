const foo = require('./foo')
const bar = require("./bar")

jest.mock("./bar.js", () => {
    return jest.fn()
})

test("foo", () => {
    foo();

    expect(bar).toHaveBeenCalled()
})