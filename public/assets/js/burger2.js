// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".submit").on("click", function(event) {
    event.preventDefault();
      
    //filters user inputs
    var userInput = $("#newBurger").val().trim().toLowerCase();
    if(userInput.includes("burger")) {
      var newBurger = {
        burger_name: userInput
      }
    } else if (userInput) {
      var newBurger = {
        burger_name: userInput + " burger"
      }
    } else {
      alert("C'mon just order a burger already!");
      return;
    }
    
    // Send the POST request.
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
    var id = $(this).data("id");
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
  