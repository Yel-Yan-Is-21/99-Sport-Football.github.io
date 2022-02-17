//  mobile nav  toggle
const navToggle = document.querySelector(".nav__toggle");
const navLInks = document.querySelectorAll(".nav__link");
// event listeners
navToggle.addEventListener("click", navOpenToggleFunction);

// functions
function navOpenToggleFunction(event){
    document.body.classList.toggle("nav__open")
}
navLInks.forEach(function(link){
    link.addEventListener("click", function(){
        document.body.classList.remove("nav__open");
    });
});

// Jquery
$(document).ready(function (){
// fade in animation

    $("#fade_in_down").waypoint(function(direction){
        my_fadeInDown_func(this.element, direction); //when using waypoint, this refers to the waypoint object
    }, {offset: '60%'});
    $("#fade_in_left").waypoint(function(direction){
        my_fadeInLeft_func(this.element, direction); 
    }, {offset: '60%'});
    $("#fade_in_right").waypoint(function (direction){
        my_fadeInRight_func(this.element, direction);
    }, {offset: '60%'})

    function my_fadeInDown_func (target, direction){
        if(direction === "down"){
            $(target).addClass("animated fadeInDown");

            setTimeout(function(){
                $(target).removeClass("animated fadeInDown");
                $(target).removeClass("hidden")
            }, 300);
        }
    }

    function my_fadeInLeft_func(target, direction){
        if(direction === "down"){
            $(target).addClass("animated fadeInLeft");

            setTimeout(function (){
                $(target).removeClass("animated fadeInLeft");
                $(target).removeClass("hidden");
            }, 300)
        }
    }

    function my_fadeInRight_func(target, direction){
        if(direction === "down"){
            $(target).addClass("animated fadeInRight");

            setTimeout(function (){
                $(target).removeClass("animated fadeInRight");
                $(target).removeClass("hidden")
            }, 300)
        }
    }
});