# Assignment One: Echo Server
- Author: Elijah Heimsoth
- Date: 02/21/2026
- Assignment: WebAPI-HW1
- Class: CSCI 3916

## Description

An Express echo server that accepts POST requests and echoes back the request body, preserving the original Content-Type header. Deployed to Render with automated Postman tests.

## Postman Collection

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/49915090-17c78fbf-99c4-4ef8-9ca0-a66a2ee56ade?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D49915090-17c78fbf-99c4-4ef8-9ca0-a66a2ee56ade%26entityType%3Dcollection%26workspaceId%3D90accc7a-1752-4e0c-a3c0-d1eb3fe4ced6#?env%5Bheimsoth-hw1%5D=W3sia2V5IjoiZWNob19ib2R5IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IkhlbGxvIFdvcmxkISIsImNvbXBsZXRlU2Vzc2lvblZhbHVlIjoiSGVsbG8gV29ybGQhIiwic2Vzc2lvbkluZGV4IjowfV0=)

[Postman Collection](https://www.postman.com/elijah-heimsoth-6556435/workspace/csci-3916-web-api-spring-2026/collection/49915090-17c78fbf-99c4-4ef8-9ca0-a66a2ee56ade?action=share&creator=49915090&active-environment=49915090-eb6e9f6a-4a3f-4708-85df-a5191f84e88d)

### Postman Test Assertions
- Response body matches the `$echo_body` environment variable
- Response status code is 200
- Response time is under 200ms

## API

### POST /

Echoes back the request body with the original Content-Type preserved.

**Request:**
- Body: any content (plain text, JSON, etc.)
- Content-Type: any (echoed back in the response)

**Response:**
- Status: `200 OK`
- Body: the same content that was sent
- Content-Type: matches the request's Content-Type

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

The server listens on port 3000 by default, or the port specified by the `PORT` environment variable.

## Running Tests

```bash
npm test
```

Runs the Mocha test suite, which verifies plain text echo, JSON echo with Content-Type preservation, and empty body handling.