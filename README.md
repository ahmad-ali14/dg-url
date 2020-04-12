# dg-url : use google drive and dropbox as hosting services
[![Build Status](https://travis-ci.org/aa947/dg-url.svg?branch=master)](https://travis-ci.org/aa947/dg-url)  [![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) ![](https://david-dm.org/aa947/dg-url.svg) 
[![Package Quality](https://npm.packagequality.com/shield/dg-url.svg)](https://packagequality.com/#?package=dg-url)
![npm](https://img.shields.io/npm/dt/dg-url)

## overview

dg-url is a javascript library that gives you handy functionalities to work with urls. 

### 1- `dg.goobox()`:
 
 Reform google drive and dropbox urls so you can host your photos on gDrive or dropbox then use them directly in your html code for img.src attribuite.

 dg-url is a client & server side function.

### 2- `dg.anchor()` :
automatically generate fully functional anchor tags, with the text and the title automatically extracted from the submitted url. 

you have options to enter your own data, or stop the function completely, or leave it to do the work, or you can overwrite some of its data. 



## installation 
 
 ``` npm i dg-url ```
 
## usage:

### 1- `dg.goobox(url)` 
react.js:

```javascript
import dg from "dg-url";

let url = //your shared photo's url (google drive or dropbox);

<img src={ dg.goobox(url) } / >

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

### 2- `dg.anchor(id, url, options:?{}, ...args)`

1- the simplest cenario => let the function do its work:
```javascript
<div id="dg-test">
     { dg.anchor('dg-test', 'https://github.com/aa947/dg-url/' ) }
</div>
```
      will give you this link:  <a href="https://github.com/aa947/dg-url" title="github  github aa947 dg url ">github aa947 dg url </a>
 
2- provide some anchor data and let the function do the rest:
```javascript

let options = {
   text: 'life is complicated'  //link text that will be shown on the screen 
}

<div id="dg-test">
     { dg.anchor('dg-test', 'https://github.com/aa947/dg-url/', options ) }
</div>

```
     you will get this answer:   <a href="https://github.com/aa947/dg-url" title="github  github aa947 dg url ">life is complicated </a>
     ` text is provided by you, others came from the function `
## contact

 https://www.ahmad-ali.co.uk/
 
 ahmadali14@acm.org
 
## licence 

 [![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)
