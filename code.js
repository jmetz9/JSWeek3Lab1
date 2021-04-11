$(document).ready(function(){
    $("button").on("click", sayHello)
})

function sayHello(event){

    let selectedRank = $("input[name=rank]:checked").data("rank")
    let rankColor = $("input[name=rank]:checked").data("color")
    let name = $("#fname").val() + " " + $("#lname").val()

    $("p#output").text(`Hello ${selectedRank} ${name}`);
    $("p#output").css("color",rankColor);
}