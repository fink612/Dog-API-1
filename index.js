'use strict';

function getDogImage(quantity) {
  fetch(`https://dog.ceo/api/breeds/image/random/${quantity}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
 
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let quantity = $('#amount').val()
    
    getDogImage(quantity);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
