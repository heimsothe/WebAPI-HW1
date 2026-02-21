/*
 * echo.test.js - Tests for the Echo Server
 * Author: Elijah Heimsoth
 * Date: 02/21/2026
 * Assignment: WebAPI-HW1
 * Class: CSCI 3916
 * ============================================================
 * This file contains tests for the Echo Server
 * ============================================================
*/


// Load Dependencies
var chai = require('chai'); // loads Assertion library
var chai_http = require('chai-http'); // loads HTTP testing capabilities
var app = require('../server'); // loads express app from server.js

// Configure Chai
chai.use(chai_http); // register chai-http with Chai
chai.should(); // activate should syntax

// TEST SUITE

// describe groups related tests together
describe('Echo Server', function () {
    // TEST 1: plain text echo
    // it defines a single test case
    it('should echo back plain text with correct content-type', function (done) {
        // creates a temporary test server from our Express app
        chai.request(app)
            // Send a POST request to the '/' endpoint
            .post('/')
            // Set the Content-Type header to text/plain
            .set('Content-Type', 'text/plain')
            // Send 'hellow world' as the request body
            .send('hello world')
            // .end() fires the request and gives us the response
            .end(function (err, res) {
                // Verify: Status code is 200 (OK)
                res.should.have.status(200);
                // Verify: Response body matches what we sent
                res.text.should.equal('hello world');
                // Verify: Response Content-Type includes 'text/plain'
                // Regex used because the full header might be 'text/plain; charset=utf-8'
                res.should.have.header('content-type', /text\/plain/);
                // Signal to Mocha that this async test is complete
                done();
            });
    });

    // TEST 2: JSON echo with content-type preservation
    it('should echo back JSON and preserve content-type', function (done) {
        chai.request(app)
            .post('/')
            .set('Content-Type', 'application/json')
            .send('{"message":"hello"}')
            .end(function (err, res) {
                res.should.have.status(200);
                res.text.should.equal('{"message":"hello"}');
                res.should.have.header('content-type', /application\/json/);
                done();
            });
    });

    // TEST 3: Empty body handling
    it('should handle empty body gracefully', function (done) {
        chai.request(app)
            .post('/')
            .send('')
            .end(function (err, res) {
                res.should.have.status(200);
                res.text.should.equal('');
                done();
            });
    });

});
