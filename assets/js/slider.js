document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    let slides = document.querySelectorAll(".slide");
    let captions = document.querySelectorAll(".caption");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("current");
            captions[i].classList.remove("current-caption");

            if (i === index) {
                slide.classList.add("current");
                captions[i].classList.add("current-caption");
            }
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    // Auto Slide Change
    setInterval(nextSlide, 5000);

    // Manual Navigation (Optional)
    document.getElementById("next-slide").addEventListener("click", nextSlide);
    document.getElementById("prev-slide").addEventListener("click", prevSlide);

    // Show first slide initially
    showSlide(slideIndex);
});
