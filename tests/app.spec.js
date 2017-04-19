 /*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;

const app = require('../app.js');

describe('app function', () => {
  it('should be a function', () => {
    expect(app).to.be.a('function');
  });

  it('should return true if string circually exists in other string', () => {
    expect(app('tree','eet')).to.equal(true);
  });

  it('should return false if string does not exists in other string', () => {
    expect(app('tree','eetpr')).to.equal(false);
  });
});