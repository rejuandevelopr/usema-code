


// Initialize AOS with once: true
AOS.init({
    once: true,  // Animations will only happen once
    disable: false,
    duration: 1100, // Animation duration in milliseconds (default: 400)
});

AOS.init({
    offset: 80, // Adjust to make it start earlier
    duration: 700,
    easing: 'ease-out',
});



document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".absolute-fade-in");

    function handleScroll() {
        animatedElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;

            if (isVisible && !el.classList.contains("show")) { 
                el.classList.add("show");
            }
        });
        
        // Check if all elements have been animated, then remove event listener
        const allAnimated = [...animatedElements].every(el => el.classList.contains("show"));
        if (allAnimated) {
            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load in case elements are already visible
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
        clickable: true,
    },
    initialSlide: 2,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 800,

    // Responsive breakpoints
    breakpoints: {
        1200: {
            slidesPerView: 4, // Large screens
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3, // Tablets & small laptops
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2, // Tablets & large phones
            spaceBetween: 15,
        },
        480: {
            slidesPerView: 2, // Small phones
            spaceBetween: 10,
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem("visited")) {
        document.querySelector(".preloader").style.display = "none";
        document.body.classList.add("loaded");
        document.querySelector(".content").style.visibility = "visible";
        document.body.style.overflow = "auto"; // Ensure scrolling is enabled
        setTimeout(initNavbarScroll, 200); // Ensure navbar scroll function runs after preloader
    } else {
        sessionStorage.setItem("visited", "true");
        window.addEventListener("load", function () {
            setTimeout(() => {
                document.querySelector(".circle").classList.add("expand");
                setTimeout(() => {
                    document.querySelector(".preloader").classList.add("fade-out");
                    document.querySelector(".content").style.visibility = "visible";
                    document.body.style.background = "#E7E3BF";

                    setTimeout(() => {
                        document.querySelector(".preloader").style.display = "none";
                        document.body.classList.add("loaded");
                        document.body.style.overflow = "auto"; // Enable scrolling after preloader

                        // Ensure navbar scroll function runs AFTER preloader disappears
                        setTimeout(initNavbarScroll, 200);
                    }, 1000);
                }, 2000);
            }, 1000);
        });
    }
});

// ✅ Navbar Scroll Hide/Show (Works After Preloader)
function initNavbarScroll() {
    let lastScrollTop = 0;
    const header = document.querySelector(".header");

    if (!header) return; // Prevent errors if header is missing

    header.style.transition = "transform 0.3s ease-in-out"; // Ensure smooth transition

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.style.transform = "translateY(-100%)"; // Hide navbar
        } else {
            header.style.transform = "translateY(0)"; // Show navbar
        }

        lastScrollTop = scrollTop;
    });
}

// ✅ Toggle Mobile Menu & Prevent Background Scrolling
function toggleMenu() {
    const menu = document.getElementById("menu");
    const isActive = menu.classList.toggle("active");

    // If menu is open, disable scrolling; otherwise, enable scrolling
    document.body.style.overflow = isActive ? "hidden" : "auto";
}




document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        offset: 40, // Start animation 80px before entering viewport
        duration: 300, // Animation duration in ms
        easing: 'ease-out', // Smooth exit transition
    });

    document.querySelectorAll('.content-card-effect').forEach(el => {
        el.addEventListener('transitionend', function() {
            el.classList.add('h2-aos-animate'); 
        });
    });
});
