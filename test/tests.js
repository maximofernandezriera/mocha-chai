var chai = require('chai');
var should = require('chai').should();
var expect = require('chai').expect;
var assert = chai.assert;
var Add = require('../maths');
var sinon = require('sinon');

describe('Addition Test', function()
{
    it ('should not return 4 when passed one and two', function(){

       var numberOne =1;
       var numberTwo = 2;

       var actualResult = Add(numberOne,numberTwo);
       var expectedResult = 4;
       
       //Using some asserts statements from chai
       actualResult.should.not.equal(expectedResult);

    });

    it ('Should not return 7 when passed one and two', function(){

        var numberOne =1;
        var numberTwo = 2;
 
        var actualResult = Add(numberOne,numberTwo);
        var expectedResult = 7;
        
        //Using some asserts statements from chai
        expect(actualResult).to.not.equal(expectedResult);
 
     });

    it ('should return 3 when passed one and two', function(){

        var result = Add(1,2);
        var expectedResult = 3;
        //Using a simple assert statement from mocha (nodejs)
        assert.equal(expectedResult,result);
 
     });

});