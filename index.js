// Could be called index.js / app.js

const express = require('express');
const path = require('path')
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 5000;
const app = express();

// Set handle bars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set handlebars route
app.get('/', function (request, response) {
    response.render('home', {
      stuff: "Whatever"
    });
});

// use static folder
app.use(
  express.static(
    path.join(
      __dirname, 'public'
    )
  )
);


app.listen(PORT, () => console.log("Server listening on port: " + PORT) )
