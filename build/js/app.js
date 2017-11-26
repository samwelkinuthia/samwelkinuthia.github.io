(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// COUNTDOWN JAVASCRIPT
// Set the date we're counting down to
var countDownDate = new Date("Dec 1, 2017 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
    minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//AJAX FORM SENDING LOGIC
// $(document).ready(function () {
//   var $contactForm = $('#contact-form');
//   $contactForm.submit(function(e) {
//     e.preventDefault();
//     $.ajax({
//       url: 'https://formspree.io/eskay007@yahoo.com',
//       method: 'POST',
//       data: $(this).serialize(),
//       dataType: 'json',
//       beforeSend: function() {
//         $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
//       },
//       success: function(data) {
//         $contactForm.find('.alert--loading').hide();
//         $contactForm.append('<div class="alert alert--success">Message sent!</div>');
//       },
//       error: function(err) {
//         $contactForm.find('.alert--loading').hide();
//         $contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
//       }
//     });
//   });
//   //your code here
// });

},{}]},{},[1]);
