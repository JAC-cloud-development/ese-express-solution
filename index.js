// require the express module
import express from "express";
import { db } from './db/fakedb.js'
// create an object from the express function which we contains methods for making requests and starting the server




// NECESSARIO PER LEGGERE IL BODY JSON IN POST E PUT
app.use(express.json());
///////////////////////////////////////////////////

// create a route for a GET request to '/' - when that route is reached, run a function
app.get("/items", function (request, response) {
  /* inside of this callback we have two large objects, request and response
        request - can contain data about the request (query string, url parameters, form data)
        response - contains useful methods for determining how to respond (with html, text, json, etc.)
    let's respond by sending the text Hello World!
    */
  return response.send(db.list());
});

// let's tell our server to listen on port 3000 and when the server starts, run a callback function that console.log's a message
