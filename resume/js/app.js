/*---- a little bit of animation, taken from chris coyier's css tricks example ----*/



var animateHTML = function() {
    var elems, windowHeight
    var init = function() {
        elems = document.getElementsByClassName('hidden')
        windowHeight = window.innerHeight
        _addEventHandlers()
    }
    var _addEventHandlers = function() {
        window.addEventListener('scroll', _checkPosition)
        window.addEventListener('resize', init)
    }
    var _checkPosition = function() {
        for (var i = 0; i < elems.length; i++) {
            var posFromTop = elems[i].getBoundingClientRect().top
            if (posFromTop - windowHeight <= 0) {
                elems[i].className = elems[i].className.replace('hidden', 'bump-up-element')
            }
        }
    }
    return {
        init: init
    }
}
animateHTML().init()

var animateOnLoad = function() {
    var elems = document.getElementsByClassName('initial-hidden')
    elems[i].className = elems[i].className.replace('initial-hidden', 'bump-up-element')
};

window.onload = animateOnLoad;





/*----- 
/*----- 
  
  
  $(document).ready(function(){
    var menuTitle = document.getElementById('menu-toggle');
      $(".nav a").click(function(){
        $(".overlay").fadeToggle(100);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
        if ($(this).text()=='Work')
        {
          $(this).text('Close');
        } 
        else {
          $(this).text('Work');
        }
  
      });
  }); 
  
  this is some js for the navigation overlay ---*/
/*----- 
  
  
  $(document).ready(function(){
    var menuTitle = document.getElementById('menu-toggle');
      $(".nav a").click(function(){
        $(".overlay").fadeToggle(100);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
        if ($(this).text()=='Work')
        {
          $(this).text('Close');
        } 
        else {
          $(this).text('Work');
        }
  
      });
  }); 
  
  this is some js for the navigation overlay ---*/
$(document).ready(function() {
    var menuTitle = document.getElementById('menu-toggle');
    $(".nav a").click(function() {
        $(".overlay").fadeToggle(100);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
        if ($(this).text() == 'Work') {
            $(this).text('Close');
        } else {
            $(this).text('Work');
        }
        /*----- 
          
          
          $(document).ready(function(){
            var menuTitle = document.getElementById('menu-toggle');
              $(".nav a").click(function(){
                $(".overlay").fadeToggle(100);
                $(this).toggleClass('btn-open').toggleClass('btn-close');
                if ($(this).text()=='Work')
                {
                  $(this).text('Close');
                } 
                else {
                  $(this).text('Work');
                }
          
              });
          }); 
          
          this is some js for the navigation overlay ---*/
    });
});
/*----- 
  
  
  $(document).ready(function(){
    var menuTitle = document.getElementById('menu-toggle');
      $(".nav a").click(function(){
        $(".overlay").fadeToggle(100);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
        if ($(this).text()=='Work')
        {
          $(this).text('Close');
        } 
        else {
          $(this).text('Work');
        }
  
      });
  }); 
  
  this is some js for the navigation overlay ---*/
this is some js
for the navigation overlay-- - * /