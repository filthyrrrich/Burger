// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".submit").on("click", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#newBurger").val().trim()
        }
    
        console.log("woorkingggggg");
      
      // Send the PUT request.
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".devour").on("click", function(event) {

        console.log("ashdasdasfafadfsadf");
        var id = $(this).data("id");
        // var devoured = $(this).data("devoured");
    
        var newBurgerState = {
          devoured: true
        };
    
        // Send the PUT request.
        
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newBurgerState
        }).then(
          function() {
            
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });
  });
  