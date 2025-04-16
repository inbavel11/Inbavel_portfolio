// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button Functionality
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

document.getElementById("backToTop").onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

// Optional: Animate Paragraph on Click in About Section
function animateParagraph() {
    const paragraph = document.querySelector('#about p');
    paragraph.classList.add('animate');
    setTimeout(() => {
        paragraph.classList.remove('animate');
    }, 1000); // Adjust duration as needed
}

// Optional: Fade In Effect for About Section on Mouse Enter
function fadeInAbout() {
    const aboutSection = document.getElementById('about');
    aboutSection.style.opacity = 1;
    aboutSection.style.transition = "opacity 1s ease-in";
}

// Optional: Add Event Listener for the About Section
document.getElementById('about').addEventListener('mouseenter', fadeInAbout);
