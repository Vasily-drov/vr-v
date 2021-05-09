const express = require("express");
const fetch = require("node-fetch");

const app = express();
// make all the files in 'public' available
app.use(express.static('public'));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

// https://expressjs.com/en/starter/basic-routing.html
app.get("/a", (request, response) => {
    response.sendFile(__dirname + "/public/index1.html");
});



// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});

