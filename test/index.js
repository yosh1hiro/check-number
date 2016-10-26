var expect = require('chai').expect,
  checkNumber = require('../index');

describe('checkNumber', function() {
  it('check a argument what is number', () => {
    expect(checkNumber(1)).to.be.true;
  });
});
