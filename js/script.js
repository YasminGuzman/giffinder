// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/*global $*/
$(document).ready(function(){
  
  $.ajax({
  url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC",
  method: "GET",
  success: function(response) {
    //Below log the response object to the console
    console.log(response);
    //Log the data array to the console
    console.log(response.data);
    //Log the first gif object from the data array
    console.log(response.data[0]);
    //Log the images array to the console
    
    //Log the original image to the console
    
    //Log the url from the orignial gif to the console  
    var gif= response.data[0].images.fixed_width.url;
        console.log(gif);
        
        $('body').append('<img src=' + gif + '>');
        
  },
});
  
  
});
