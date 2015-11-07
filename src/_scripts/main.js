// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Link = require('../_modules/link/link');


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}



$(function() {
  new Link(); // Activate Link modules logic



  var page = getParameterByName('page');
  var index = 'pages/' + getParameterByName('index');

  $('#ipad-wrapper .container').find('iframe').attr('src',index);




});
