var myVariable = "Code Weekend";
//alert ("I'm learning the basics of JavaScript at " + myVariable);

function square (number) {
  return number * number;
}

// This is a single line comment that does not need to be closed.

/* This is a multi-line comment
that only ends when we do this */

console.log(square (5)); // This prints the result to the javascript console in your browser's (Chrome or Firefox) developer tools.

// We can also write the above function as the following:
var square = function (number) {
  return number * number;
}

// Here's an anonymous function that calculates the square of 5:
(function (number) {
  return number*number;
}) (5);

// In that case, we were executing the anonymous function immediately, but we don't have to always do that:
function idPlusString (number) {
  var cube = number * number * number;
  return function (name) {
    return "Hi "+ name + ". " + "Your ID is " + cube + ".";
  }
}

var infoColor = '#888888';
var errorColor = 'red';
var messageColor = '#000000';
var nameColor = 'blue';

var formatMessage = function(user, message) {
  return '<span style="color: ' + nameColor + '">' + user + '</span>' +
    ': ' + message;
};

var postMessage = function (color, contents) {
  console.log('Error: jQuery not ready yet');
};

$(function() {
  postMessage = function(color, contents) {
    $('<li><span style="color: ' + color + '">' 
        + contents + '</span></li>').hide().appendTo('#messages').fadeIn(200);
  };

  $('#message-form').submit(function (event) {
    event.preventDefault();

    //client side messaging only
    postMessage('black', formatMessage('Me', $('#message').val()));
    $('#message').val('');
  });
});