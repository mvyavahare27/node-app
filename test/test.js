// var mocha = require('mocha');
// var describe = mocha.describe;
// var it = mocha.it;
// var assert = require('chai').assert
var request = require('supertest');
var app = require('../app.js');

describe('GET /', function () {
    it('respond with hello world', function (done) {

        //navigate to root and check the the response is "hello world"
        request(app).get('/').expect('Test Hello World', done);
    });
});
