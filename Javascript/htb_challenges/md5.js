/***************************************************************************************
**  AUTHOR: Thomas V.                                                                 **
**  CREATED: 01/03/2020, 20:20:20                                                     **
**  A Small script for hackthebox.eu's web challenge Emdee                            **
**                                                                                    **
**  This script queries a URL hosted by hackthebox.eu for a string in an html page.   **
**  It then hashes the string and passes the string and a cookie to a second function **
**  that makes a request back to the URL with the string hased using the md5 hashing  **
**  alogrithm.                                                                        **
****************************************************************************************/

const http = require('http');
var querystring = require('querystring');
var request = require('request');
const chee = require('cheerio');
const crypto = require('crypto');
const url = "http://docker.hackthebox.eu";
let file = "";
let cookie = "";

function second(str, cookie){
  var parsed = chee.load(str);
  c_value = cookie.split(';')[0];
  let digest = crypto.createHash('md5').update(parsed('h3').text()).digest("hex");
  var form = {
    hash: digest
  };
  var formData = querystring.stringify(form);
  var contentLength = formData.length;

  request({
    headers: {
      'Content-Length': contentLength,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': c_value
    },
    uri: 'http://docker.hackthebox.eu',
    body: formData,
    method: 'POST'
  }, function (err, res, body) {
    console.log(res);
  }); 
}

function first(){
  http.get(url, (res) => {
    const {statusCode} = res;
    res.setEncoding('utf-8');
    res.on('data', (chunk) => {
      file += chunk;
    });
    res.on('close', () => {
      var setcookie = res.headers["set-cookie"];
      if ( setcookie ) {
        setcookie.forEach(
          function ( cookiestr ) {
            // console.log(cookiestr);
            cookie += cookiestr;
          }
        );
      }
      second(file, cookie);
    });
  });
}
first();
