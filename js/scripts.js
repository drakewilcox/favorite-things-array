$(document).ready(function() {
  $("form#things").submit(function(event) {
    event.preventDefault();
    var answer1 = $("input#answer1").val();
    var answer2 = $("input#answer2").val();
    var answer3 = $("input#answer3").val();
    var answer4 = $("input#answer4").val();
    var array = []
    array.push(answer1, answer2, answer3, answer4);
    
    var newArray = array

    $("ul").append("<li>"+newArray[0]+"</li>");
    $("ul").append("<li>"+newArray[1]+"</li>");
    $("ul").append("<li>"+newArray[2]+"</li>");
    $("ul").append("<li>"+newArray[3]+"</li>");
    
    // $("ul").append("<li id='li1'></li>");
    // $("#li1").append(newArray[0]);
    // $("ul").append("<li id='li2'></li>");
    // $("#li2").append(newArray[1]);
    // $("ul").append("<li id='li3'></li>");
    // $("#li3").append(newArray[2]);
    // $("ul").append("<li id='li4'></li>");
    // $("#li4").append(newArray[3]);
    
    
    $(".output").show();

    console.log(newArray[0]);

  });
});