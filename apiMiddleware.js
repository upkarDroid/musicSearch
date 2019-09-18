var express = require("express");
var cors = require("cors");
var app = express();

var fetch = require("node-fetch");
app.use(cors());

app.get("/search/:searchTerm", (req, res) => {
  fetch(
    `https://itunes.apple.com/search?term=${req.params.searchTerm}&limit=200&entity=musicTrack`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }
  )
    .then(res => res.json())
    .then(body => {
      res.json(body);
    })
    .catch(error => {
      res.sendStatus(500).end("Unable to fetch results at moment");
    });
});

app.listen(3002, (req, res) => {
  console.log("server running on port 3002");
});
