// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/*global $*/
$(document).ready(function(){
  $('button').click(function(){
     $('body').append('<img src=' + gif + '>');
  $.ajax({
  url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC",
  method: "GET",
  success: function(response) {
    
       var giphyUrl = "https://api.giphy.com/v1/gifs/random?rating=pg&api_key=dc6zaTOxFJmzC";
    
    $.ajax({
        url: giphyUrl,
        method: "GET",
        success: function(response) {
            // STEP 2: Get the URL for the random GIF
            var imageSrc= response.data.images.original.url;
            
            // STEP 3: Magic
            var imageTag = '<img src="' + imageSrc + '">';
            $('#gifHolder').html(imageTag);
        }
    });

    }
    
    
    
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
        +
        $('body').append('<img src=' + gif + '>');
        
  },
});
  
  
});
