
var slideIndex = 0;
showSlides(); 
   
function showSlides()
{
    var i;
  
    var slides = document.getElementsByClassName("slide_container_1"); 
      
    var dots = document.getElementsByClassName("dot"); 
  
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
   
    slideIndex++; 
   
    if (slideIndex > slides.length) 
    {
        slideIndex = 1;
    }
   
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.
                            replace(" act", "");
    }
   
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " act";
  
    setTimeout(showSlides, 2000); 
}
showSlides_2(); 
   
function showSlides_2()
{
    var i;
  
    var slides = document.getElementsByClassName("slide_container_2"); 
      
    var dots = document.getElementsByClassName("dot_2"); 
  
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
   
    slideIndex++; 
   
    if (slideIndex > slides.length) 
    {
        slideIndex = 1;
    }
   
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.
                            replace(" active", "");
    }
   
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  
    setTimeout(showSlides_2, 2000); 
}
showSlides_3(); 
   
function showSlides_3()
{
    var i;
  
    var slides = document.getElementsByClassName("slide_container_3"); 
      
    var dots = document.getElementsByClassName("dot_3"); 
  
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
   
    slideIndex++; 
   
    if (slideIndex > slides.length) 
    {
        slideIndex = 1;
    }
   
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.
                            replace(" active", "");
    }
   
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  
    setTimeout(showSlides_3, 2000); 
}
showSlides_4(); 
   
function showSlides_4()
{
    var i;
  
    var slides = document.getElementsByClassName("slide_container_4"); 
      
    var dots = document.getElementsByClassName("dot_4"); 
  
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
   
    slideIndex++; 
   
    if (slideIndex > slides.length) 
    {
        slideIndex = 1;
    }
   
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.
                            replace(" active", "");
    }
   
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  
    setTimeout(showSlides_4, 2000); 
}
showSlides_5(); 
   
function showSlides_5()
{
    var i;
  
    var slides = document.getElementsByClassName("slide_container_5"); 
      
    var dots = document.getElementsByClassName("dot_5"); 
  
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
   
    slideIndex++; 
   
    if (slideIndex > slides.length) 
    {
        slideIndex = 1;
    }
   
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.
                            replace(" active", "");
    }
   
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  
    setTimeout(showSlides_5, 2000); 
}
showSlides_6(); 
   
function showSlides_6()
{
    var i;
  
    var slides = document.getElementsByClassName("slide_container_6"); 
      
    var dots = document.getElementsByClassName("dot_6"); 
  
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
   
    slideIndex++; 
   
    if (slideIndex > slides.length) 
    {
        slideIndex = 1;
    }
   
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.
                            replace(" active", "");
    }
   
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  
    setTimeout(showSlides_6, 2000); 
}