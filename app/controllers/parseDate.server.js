'use strict';
var strftime = require("strftime");

function parseDate (date) {

    var dateObject = {unix: null, natural: null};
    
    if (!isNaN(parseFloat(date))) {
        date = parseFloat(date)*1000;
    }
    
    date = new Date(date);
    
    if (!isNaN(date)) {
        dateObject.unix = date/1000;
        dateObject.natural = strftime('%B %d, %Y', new Date(date));
    }
    return dateObject

}

module.exports = parseDate;