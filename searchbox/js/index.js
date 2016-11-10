

// var btn = document.querySelectorAll(".searchTerm"),
//     div = document.querySelector("expanded collapsed");


//     btn[0].addEventListener('click', function () {

//     myText.textContent = " Koalas are the best animals ";

// });

    $(document).ready(function() {

$(function(){
  $('.searchTerm').on("focus blur", function(){
    $(this).parent().toggleClass("expanded collapsed");
     $(this).siblings('.suggestionBox').toggle();
    });
});
});