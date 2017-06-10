
$(document).ready(function(){

$("#siguiente").click(function(){

$("li").next("li").css("color","red");

});

$("#siguiente").click(function(){

$("li").prev("li").css("color","red");

});

});