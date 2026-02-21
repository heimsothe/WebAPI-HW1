/*
 * server.js - Express Echo Server
 * Author: Elijah Heimsoth
 * Date: 02/21/2026
 * Assignment: WebAPI-HW1
 * Class: CSCI 3916
 * ============================================================
 * This server receives a POST request and echoes back the same
 * body, preserving the original Content-Type header.
 * ============================================================
 */

// Load Express from node_modules
var express = require('express');

// Create the Express application
var app = express();

// Set the port for the server to listen on.
var port = process.env.PORT || 3000;

/*
 * express.raw() reads the request body and stores it as a
 * buffer in req.body.
 * 
 * {type: '* /*'} means "accept ANY content type."
 */
app.use(express.raw({type: '*/*'}));

/*
 * app.post() registers a handler for HTTP POST requests
 * at the root path '/'.
 * 
 * req = the incoming request
 * res = the outgoing response
 */
app.post('/', function (req, res) {
    // Read the Content-Type header from the incoming request.
    // Default to text/plain if no Content-Type header is provided.
    var content_type = req.headers['content-type'] || 'text/plain';

    // Set the response's Content-Type to match what was sent.
    // .type() is an Express helper that sets the Content-Type header.
    res.type(content_type);

    // Send the body back. req.body contains the raw buffer that express.raw() parsed from the request.
    // If no body was sent, req.body will be undefined, so we fall back to an empty string ''.
    res.send(req.body || '');

});

/*
 * Start the server listening on the port.
 * Only start the server if the file is run directly (not imported by another file).
 * 
 * if (require.main === module) checks if file was run directly with 'node server.js'
 */
if (require.main === module) {
    app.listen(port, function () {
        console.log('Echo server listening on port ' + port);
    });
}

// Export the app for testing
module.exports = app;