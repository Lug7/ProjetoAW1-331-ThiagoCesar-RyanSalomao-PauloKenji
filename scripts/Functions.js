var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n)
}

function showDivs(n){
    var slides = $(".MovieBanner");
    if(n > slides.length){
        slideIndex = 1; 
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    $(".MovieBanner").each(function( index ){
        $(this).css("display", "none");
    })
    $(slides[slideIndex-1]).css("display", "block");
}