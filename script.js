$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".menu").css("background" , "rgb(39, 34, 33)");
        }
  
        else{
            $(".menu").css("background" , "transparent");  	
        }
    })
  })
  
  var lastScrollTop = 0;
  
  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
     if (st > lastScrollTop){
        // downscroll code
        $(".menu").css("top" , "-100px");
     } else {
        // upscroll code
        $(".menu").css("top" , "0px"); 
     }
     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false);
  
  
  var slider_img = document.querySelector('.slider-img');
var text = document.querySelector('.text');
var images = ['1.jpeg', '5.jpeg', '6.jpeg', '7.jpeg'];
var texts = ["page1", "page2", "page3"];
var texts2 = ["AYAU", "loremckjhvlh", "zvkzgvkjgvj"];
var i = 0;

function prev(){
     if(i <= 0)  i = images.length;
     i--;
     document.getElementById("text").innerHTML = texts[i];
     document.getElementById("text2").innerHTML = texts2[i];
     return setImg();
}

function next(){
    if(i >= images.length - 1) i = -1;
    i++;
    document.getElementById("text").innerHTML = texts[i];
    document.getElementById("text2").innerHTML = texts2[i];
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', images[i]);
}

