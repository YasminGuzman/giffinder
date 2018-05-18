// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/*global $*/
$(document).ready(function() {
$('button').click(function() {
var srch= $('#srch-term').val();
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/random?rating=pg&api_key=dc6zaTOxFJmzC" + "&tag=" + srch,
            method: "GET",
            success: function(response) {




console.log(response.data);
                // STEP 2: Get the URL for the random GIF
                var imageSrc = response.data.images.original.url;

                // STEP 3: Magic
                var imageTag = '<img src="' + imageSrc + '">';
                $('#gifHolder').html(imageTag);
            }
        });

    })
});
