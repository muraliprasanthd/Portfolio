$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



const name1 = document.getElementById("uname");
const email = document.getElementById("umail");
const sub = document.getElementById("usub");
const message = document.getElementById("umsg");

const submit = document.getElementById("submit");

const database = firebase.database();

submit.addEventListener('click', (e) =>{
	e.preventDefault();

database.ref('/users/' + name1.value).set({
	Name: name1.value,
	Email: email.value, 
    Subject:sub.value,
	Message: message.value    
});
document.getElementById('uname').value="";
document.getElementById('umail').value="";
document.getElementById('usub').value="";
document.getElementById('umsg').value="";
console.log("Message sent");
window.alert("Message sent");
});

