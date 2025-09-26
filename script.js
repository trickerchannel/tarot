document.addEventListener("DOMContentLoaded", function() {
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // --- Close menu when a link is clicked ---
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
    
    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Initialize AOS (Animate on Scroll) Library ---
    AOS.init({
        duration: 800,      // Animation duration in ms
        once: true,         // Whether animation should happen only once
        offset: 100,        // Offset (in px) from the original trigger point
        easing: 'ease-in-out',
    });


    // --- PHẦN MỚI ĐƯỢC THÊM VÀO ---
    // --- Back to Top Button Logic ---
    const backToTopButton = document.getElementById("backToTopBtn");

    // Show or hide the button based on scroll position
    const scrollFunction = () => {
        // Show button after scrolling down 200px
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            if(backToTopButton) backToTopButton.classList.add("show");
        } else {
            if(backToTopButton) backToTopButton.classList.remove("show");
        }
    };

    window.onscroll = () => {
        scrollFunction();
    };

    // Scroll to top smoothly when the button is clicked
    if(backToTopButton) {
        backToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
    // --- KẾT THÚC PHẦN MỚI ---
});