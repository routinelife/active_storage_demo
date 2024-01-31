import $ from 'jquery';


var formData = new FormData();
var image = document.getElementById('image-select').files[0];
formData.append('photo', image, image.name);

// Create new request
var httpRequest = new XMLHttpRequest();

// Setup events for when the request returns
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}

// Configure request type and URL
httpRequest.open('POST', 'memories');

// Configure header for Rails CSRF authenticity
httpRequest.setRequestHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').getAttribute('content'));

// Send the request with formData as the body
httpRequest.send(formData);

var newRequest = {
    type: 'POST',
    url: 'memories',
    contentType: false,  // sets this to false, formData will automatically set this to the correct type which is multipart/form-data; see https://api.jquery.com/jquery.ajax/
    processData: false, // set this to false so jQuery doesn't turn the formData object into a query string see https://api.jquery.com/jquery.ajax/
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    },
    data: formData,
    success: function(response){
      console.log(response);
    },
    error: function(request, error){
      console.log(request);
      console.log(error);
    },
  };
  
  $.ajax(newRequest);



  $(document).on('click', '#post-image', function() {
    var formData = new FormData();
    var image = document.getElementById('image-select').files[0];
    formData.append('photo', image, image.name);
  
    var newRequest = {
      type: 'POST',
      url: 'memories',
      contentType: false,  // sets this to false, formData will automatically set this to the correct type which is multipart/form-data; see https://api.jquery.com/jquery.ajax/
      processData: false, // set this to false so jQuery doesn't turn the formData object into a query string see https://api.jquery.com/jquery.ajax/
      headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      data: formData,
      success: function(response){
        console.log(response);
      },
      error: function(request, error){
        console.log(request);
        console.log(error);
      },
    };
  
    $.ajax(newRequest);
  });