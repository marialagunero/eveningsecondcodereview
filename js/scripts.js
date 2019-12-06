$(document).ready(function(){
  $(form#language).submit(function(event){
    event.preventDefault();
    var animalChoice = parseInt($("#animalChoice").val());
    var colorChoice = parseInt($("#colorChoice")).val();
    var hobbyChoice = parseInt($("#hobbyChoice")).val();
    var result = (colorChoice + foodChoice + hobbyChoice);

    if (result <=3) {
      $("#Ruby").show();
      $("#Python,#Csharp").hide();

    } else if (result <=6) {
      $("#Python").show();
      $("#Ruby, #Csharp").hide();

    } else if (result <=9) {
      $("#Csharp").show();
      $("#Ruby, #Python").hide();


      return (result)

    };




  });

});
