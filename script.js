let slideindex =0;
showslides();

function showslides() {
    let slides = document.getElementsByClassName("slide");
    for (let i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideindex++;
    if (slideindex > slides.length) {slideindex = 1}
    slides[slideindex-1].style.display = "block";
    setTimeout(showslides, 3000);
}