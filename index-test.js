const assert = require('assert')

const TimeConvert = require('./index')

// describe('math'), () => {
//   assert.equal(math.add(1,1),2)
// }

// assert.equal(math.add(1, 2), 4)

describe('convert', () => {
  it('should returns 1:0 if input is 60', () => {
    assert.equal(TimeConvert(60), ("1:0"))
  })
})