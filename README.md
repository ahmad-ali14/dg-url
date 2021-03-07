# dg-url : dropbox and google drive url converter

[![Package Quality](https://npm.packagequality.com/shield/dg-url.svg)](https://packagequality.com/#?package=dg-url)
![npm](https://img.shields.io/npm/dt/dg-url)
[![version](https://img.shields.io/badge/version-1.3.2-blue)](#)

## Issues

please report any issues or bugs, or ask any question here: <https://github.com/ahmad-ali14/dg-url/issues>

## overview

Reform google drive and dropbox urls so you can host your photos on gDrive or dropbox then use them directly in your html code for img.src attribuite.

dg-url is a client & server side function.

## details

- when you host an image on google drive or dropbox you can't use the direct url of your file to be an image source.
- you need to make changes to this url in order to use it directly as an image source.
- This App will take the url of your image file, and change it to be used directly as an image source.
- Important : you need to check your files permessions first, and wether it's public.
- another live example with react: https://ybmex.csb.app/

## functionality

| Function title: goobox |   tags: image hosting, regex, url, google drive, dropbox, advanced    |
| :--------------------: | :-------------------------------------------------------------------: |
|     return: string     | Returns a string url that can be used directly as source of an image. |

## output Example

```js
let gDriveUrl =
  "https://drive.google.com/file/d/1VctOazcyDrm8nxoWFAWM_t5bxlpyLI9s/view?usp=sharing";
let dropboxUrl = "https://www.dropbox.com/s/degru93hceo26m6/30sec.png?dl=0";

dg(gDriveUrl); // https://drive.google.com/uc?id=1VctOazcyDrm8nxoWFAWM_t5bxlpyLI9s
dg(dropboxUrl); // https://dl.dropbox.com/s/degru93hceo26m6/30sec.png?dl=0
```

## installation

`npm i dg-url`

## usage:

react.js:

```javascript
import dg from "dg-url";

<img src={dg(url) /*your shared photo's url (google drive or dropbox);*/} />;
```

node.js:

```javascript
//server
const dg = require("dg-url");

app.get("/", (req, res) => {

let url = //your shared photo's url (google drive or dropbox);

req.render( 'index',  { imageSrc: dg(url) } ); //to the client

} );



//client : EJS
<img src = <%= imageSrc %>   />


```

<hr />

## Tests

- live at: https://url-converter-for-gdrive-dropbox.netlify.app/

## contact

https://www.ahmad-ali.co.uk/

ahmad.ali.uk14@gmail.com
