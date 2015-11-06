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
  var image = 'images/' + page;

  $('#ipad-wrapper .container').find('img').attr('src',image)




});
