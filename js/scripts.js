$(document).ready(function(){
    $(".here").click(function(){
        $(".show").show(300);
    });

    $(".list").click(function(){
        $("#listed").show(3000);
    });

    $(".close-page").click(function(){
        $("#listed").hide(3000);
    });
});

