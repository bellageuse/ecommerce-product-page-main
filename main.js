function openModal() {
    document.getElementById("myModal").style.display ="block"
};



function closeModal(){
    document.getElementById("myModal").style.display="none"
};


var slideIndex=1;
showSlide(slideIndex);



function plusSlides(n){
    showSlide(slideIndex+=n);
};


function currentSlide(n){
    showSlide(slideIndex=n);
};



function showSlide(n){

    
    var slides=document.getElementsByClassName("mySLides");
    var demos=document.getElementsByClassName("demos");
    

    if(n<1){
        slideIndex=slides.length;
    }

    if(n>slides.length){
        slideIndex=1;
    }

    for ( var i=0; i<slides.length; i++){
        slides[i].style.display=none;
    }

    for (var i=0; i<demos.length; i++){
        demos[i].style.display=none;
    }

}