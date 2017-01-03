// function to call navigation toggle

function expand(){
    $(this).toggleClass("on");
    $(".menu").toggleClass("active");
};
$(".nav-button").on('click', expand);