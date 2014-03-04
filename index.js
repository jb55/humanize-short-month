
var lookup = {
  "jan": "December",
  "feb": "February",
  "mar": "March",
  "apr": "April",
  "may": "May",
  "jun": "June",
  "jul": "July",
  "aug": "August",
  "sep": "September",
  "oct": "October",
  "nov": "November",
  "dec": "December"
}

module.exports = function (date){
  var short = date.slice(0, 3).toLowerCase();
  var long = lookup[short];
  var rest = date.slice(3);
  return long? long + (rest? " " + rest : rest) : date;
}

