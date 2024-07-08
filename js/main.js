/// <reference type='../@types/@types/jquery' >

/* ########## Loading Page ########## */
$(function(){
    $('.loader').fadeOut(1000,function(){
        $('.loading').slideUp(1000,function(){
            $('body').css('cssText',`
                    overflow : auto
                `)
            $('.loading').remove()
        })
    })
})

/* ########## Show And Hide Side Navbar ########## */
let width = $('.nav-links').outerWidth(true)
$('.aside-nav').css('left' , -width)
$('.slide').css('left', width)

$('.close-icon i').on('click',function(){
    $('.aside-nav').animate({left : -width},100)
})
$('.open').on('click',function(){
    let left = $('.aside-nav').css('left');
    if(left == '0px'){
        $('.aside-nav').animate({left : -width},100)
    } else{
        $('.aside-nav').animate({left : '0px'},100)
    }
})

/* ########## Go To Section By Navbar ########## */
$('.list-links li a[href^="#"]').on('click',function(e){
    let attr = e.target.getAttribute('href' )
    let sectionOffset = $(attr).offset().top;
    $('body,html').animate( {scrollTop: sectionOffset} , 1000 )
})

/* ########## SlideDown Singer Section ########## */
$('.one h3').on('click',function(){
    $('.one p').slideToggle(1000)
    $('.two p').slideUp(1000)
    $('.three p').slideUp(1000)
    $('.four p').slideUp(1000)
})
$('.two h3').on('click',function(){
    $('.two p').slideToggle(1000)
    $('.one p').slideUp(1000)
    $('.three p').slideUp(1000)
    $('.four p').slideUp(1000)
})
$('.three h3').on('click',function(){
    $('.three p').slideToggle(1000)
    $('.one p').slideUp(1000)
    $('.two p').slideUp(1000)
    $('.four p').slideUp(1000)
})
$('.four h3').on('click',function(){
    $('.four p').slideToggle(1000)
    $('.one p').slideUp(1000)
    $('.two p').slideUp(1000)
    $('.three p').slideUp(1000)
})

/* ########## CountDown Date ########## */
// Set the date we're counting down to
var countDownDate = new Date("july 25, 2024 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000  * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Output the result in an element with id="demo"
$('.dayNum').text(days)
$('.hourNum').text(hours)
$('.minNum').text(minutes)
$('.secNum').text(seconds)

// If the count down is over, write some text 
if (distance < 0) {
clearInterval(x);
    $('.dayNum').text('Done')
    $('.hourNum').text('Done')
    $('.minNum').text('Done')
    $('.secNum').text('Done')
}
}, 1000);

let maxLength = 100
$('textarea').on('keyup',function(){
    let len = maxLength - $(this).val().length; 
    $('.charLength').text(len)
})