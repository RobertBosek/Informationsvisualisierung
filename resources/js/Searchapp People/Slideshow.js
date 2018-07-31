var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
	var timeChangeInMs = 5000; //time in ms, change the slides every 5 seconds
    var slides = document.getElementsByClassName("slide");
    var flags = document.getElementsByClassName("flag");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
		slideIndex = 1
	}    
    for (i = 0; i < flags.length; i++) {
        flags[i].className = flags[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    flags[slideIndex-1].className += " active";
    setTimeout(showSlides, timeChangeInMs);
}