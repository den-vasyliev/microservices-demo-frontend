(function (){
  'use strict';

  var express = require("express")
    , client  = require('prom-client')
    , app     = express()

  const version = "version v0.0.3"

  app.get("/version", function(req, res) {
      res.header("content-type", "text/plain");
      return res.end(version)
  });

  module.exports = app;
}());
