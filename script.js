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
var texts = ["Meridian Apartments", "Accessibility", "Safety", "Aesthetics"];
var texts2 = ["Is a place where you can live without any need.THE POSSIBILITY OF SPENDING TIME TOGETHER WHILE RESPECTING EVERYONE'S PERSONAL SPACE IS THE GUIDING PRINCIPLE BEHIND Meridian'S APARTMENT DESIGNS, WHICH START WITH TWO-BEDROOM EUROPEAN-STYLE APARTMENTS AND END WITH SEVEN-BEDROOM PENTHOUSES AND TWO-STOREY TERRACED APARTMENTS.", "Is a place where you can find anything. Groceries, Markets, Shops, Worldwide Brands, Restaurants, Coffee and all other need are located in Meridian itself.", "Meridian is built in a safe and beautiful place. MEridian FEATURES A CLOSED COURTYARD WITHOUT CAR.  A VIDEO SURVEILLANCE SYSTEM WITH THE ABILITY TO CONNECT RESIDENTS AND PROVIDE ARCHIVE RECORDINGS. AND ACCESS CONTROL WITH A BIOMETRIC READER, CARDS, KEY FOBS AND A MOBILE PHONE APP.", "An awesome view will be with you everyday. RISING ABOVE THE URBAN LANDSCAPE, MEridian IS BECOMING A VISIBLE METAPHOR FOR THE CAREER RISE AND DIZZYING SUCCESS OF ITS RESIDENTS."];

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

let sq = document.getElementById('ee');
let ivan = document.getElementById('ivan');
window.addEventListener('scroll', function(){
let value = window.scrollY;
ivan.style.marginTop = value * 0.05 + 'px';

})


let tee = document.getElementById('tt');
 window.addEventListener('scroll', function(){
    let value = window.scrollY;
    tee.style.marginTop = value * 0.05 + 'px';
    })

    let ev = document.getElementById('ev');

    window.addEventListener('scroll', function(){
    let value = window.scrollY;
    ev.style.marginLeft = value * 0.17 + 'px';
    
    })
    let ev1 = document.getElementById('ev1');

    window.addEventListener('scroll', function(){
    let value = window.scrollY;
    ev1.style.marginLeft = value * 0.17 + 'px';
    
    })
    let ev2 = document.getElementById('ev2');

    window.addEventListener('scroll', function(){
    let value = window.scrollY;
    ev2.style.marginLeft = value * 0.17 + 'px';
    
    })
      
    let yn = document.getElementById('yn');
  
    window.addEventListener('scroll', function(){
    let value = window.scrollY;
    yn.style.marginLeft = value * -0.16 + 'px';
    
    })
    let yn1 = document.getElementById('yn1');
  
    window.addEventListener('scroll', function(){
    let value = window.scrollY;
    yn1.style.marginLeft = value * -0.16 + 'px';
    
    })
    let we = document.getElementById('we');
  
    window.addEventListener('scroll', function(){
    let value = window.scrollY;
    we.style.marginTop = value * -0.16 + 'px';
    
    })    