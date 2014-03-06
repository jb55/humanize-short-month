
var should = require('should');
var humanize = require('..');

describe('conversion', function(){
  it('with year should work', function(){
    humanize('dec2013').should.eql("December 2013")
  });

  it('months hould parse correctly', function(){
    humanize('jan').should.eql("January")
    humanize('feb').should.eql("February")
    humanize('mar').should.eql("March")
    humanize('apr').should.eql("April")
    humanize('may').should.eql("May")
    humanize('jun').should.eql("June")
    humanize('jul').should.eql("July")
    humanize('aug').should.eql("August")
    humanize('sep').should.eql("September")
    humanize('oct').should.eql("October")
    humanize('nov').should.eql("November")
    humanize('dec').should.eql("December")
  });
});
