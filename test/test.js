
var should = require('should');
var humanize = require('..');

describe('conversion', function(){
  it('should work', function(){
    humanize('dec2013').should.eql("December 2013")
    humanize('aug').should.eql("August")
  });
});
