$(document).ready(function(){

    //Sticky Menu
    $(".js-sticky-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        } else{
            $("nav").removeClass("sticky");
        }
    });


    // MIxITUP 
    var mixer= mixitup('.container');
});