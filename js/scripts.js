$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    var animalChoice = parseInt($("#animalChoice").val());
    var colorChoice = parseInt($("#colorChoice").val());
    var hobbyChoice = parseInt($("#hobbyChoice").val());
    var drinkChoice = parseInt($("#drinkChoice").val());
    var foodChoice = parseInt($("#foodChoice").val());
    var result = (animalChoice + colorChoice + hobbyChoice + drinkChoice + foodChoice)

    if (result <= 5) {
      $("#Ruby").fadeIn();
      $("#Python,#Csharp").hide();

    } else if (result <= 10) {
      $("#Python").fadeIn();
      $("#Ruby, #Csharp").hide();

    } else if (result <= 15) {
      $("#Csharp").fadeIn();
      $("#Ruby, #Python").hide();


      return (result)

    };




  });

});
