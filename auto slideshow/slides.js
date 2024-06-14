let slideIndex = 0;
ShowSlides();

 function ShowSlides() {
    let i;

    let Slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");

   for (i =0; i < Slides,length; i++){
       Slides[i].style, display ="none";  
   }

   slideIndex++;
   if (slideIndex > Slides.length){slideIndex = 1}
   for (i = 0; i < dots.length; i++){
       dots[i]. className = dots[i].className.replace("active","");  
   }


   Slides[slideIndex-1].style.display ="block";
   dots[slideIndex-1].className +="active";
   setTimeout(ShowSlides,2000); // change imge every 2 seconds
    
    
 }