# dg-url : handy functionalities to work with urls

[![Build Status](https://travis-ci.org/aa947/dg-url.svg?branch=master)](https://travis-ci.org/aa947/dg-url) ![](https://david-dm.org/aa947/dg-url.svg)
[![Package Quality](https://npm.packagequality.com/shield/dg-url.svg)](https://packagequality.com/#?package=dg-url)
![npm](https://img.shields.io/npm/dt/dg-url)
[![version](https://img.shields.io/badge/version-1.2.1-blue)](#)

## Issues

please report any issues or bugs, or ask any question here: <https://github.com/ahmad-ali14/dg-url/issues>

## overview

dg-url is a javascript library that gives you handy functionalities to work with urls.

### 1- `dg.goobox()`:

Reform google drive and dropbox urls so you can host your photos on gDrive or dropbox then use them directly in your html code for img.src attribuite.

dg-url is a client & server side function.

## installation

`npm i dg-url`

## usage:

### 1- `dg.goobox(url)`

react.js:

```javascript
import dg from "dg-url";

let url = (
  <img
    src={
      dg.goobox(url) //your shared photo's url (google drive or dropbox);
    }
  />
);
```

node.js:

```javascript

/*
* server
*/

const dg = require("dg-url");

app.get("/", (req, res) => {

let url = //your shared photo's url (google drive or dropbox);

req.render( 'index',  { imageSrc: dg.goobox(url) } ); //to the client

} );

}


/*
* client : EJS
*/

<img src = <%= imageSrc %>   />


```

<hr />

## Tests

- inside `tests` folder there is a `test.html` file, you can test the functions there.
- dynamic testing soon.

## TODOS

- make it aware of query params.
- for now it's ignoring any part of url witch is completely numbers, make it extract numbers from the text and delete it.
- make it smarter when preparing the link text.

## contact

https://www.ahmad-ali.co.uk/

ahmad.ali14@zohomail.eu
