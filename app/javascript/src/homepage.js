import $ from 'jquery';

$(document).on('click', '#post-image', function() {
  var formData = new FormData();
  console.log(document.getElementById('image-select').files);
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