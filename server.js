'use strict';
// ================================Import section
let express = require('express');

// ================================Variable section
let port = process.env.PORT || 8080,
    app = express();

let server = app.listen(port, function(){
  console.log('Server is working on PORT: ' + port);
});
