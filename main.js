// LIGHT BOX JAVASCRIPT

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

    
    var slides=document.getElementsByClassName("my-imgs");
    var demos=document.getElementsByClassName("demo");
    

    if(n<1){
        slideIndex=slides.length;
    }

    if(n>slides.length){
        slideIndex=1;
    }

    for ( var i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }

    for (var i=0; i<demos.length; i++){
        demos[i].className=demos[i].className.replace(" active","");
    }

    slides[slideIndex-1].style.display="block";
    demos[slideIndex-1].className += " active";

}





function plusMinusItem(n){
    var itemValue= parseInt(document.getElementById("amount").innerText);
    
    if(n==1){
        itemValue++;
    }else if(n==-1 && itemValue>=1){
        itemValue--;
    }
    document.getElementById("amount").innerText=itemValue;
}

// pseudo

// when clicked, amount,itemvalue becomes 0 
// current amount shows up on nav cart


function addToCart(){
    console.log("clicked");
    var amount__added=parseInt(document.getElementById("amount").innerText);
    console.log(amount__added);
    if(amount__added>=1){
        document.getElementById("amount__added").innerText=amount__added;
        document.getElementById("amount").innerText=0;
    }
}
