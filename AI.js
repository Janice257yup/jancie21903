document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav");
    const links = document.querySelectorAll("nav ul li a");
    const dropdowns = document.querySelectorAll(".dropdown");

    // Animasi Navbar saat Scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(0, 0, 40, 0.95)";
            navbar.style.boxShadow = "0px 0px 30px rgba(0, 170, 255, 0.7)";
        } else {
            navbar.style.background = "rgba(0, 0, 20, 0.9)";
            navbar.style.boxShadow = "0px 0px 20px rgba(0, 170, 255, 0.5)";
        }
    });

    // Efek glitch pada hover
    links.forEach(link => {
        link.addEventListener("mouseenter", function () {
            link.classList.add("glitch-effect");
            setTimeout(() => link.classList.remove("glitch-effect"), 500);
        });
    });

    // Dropdown dengan animasi masuk dan keluar
    dropdowns.forEach(dropdown => {
        let content = dropdown.querySelector(".dropdown-content");

        dropdown.addEventListener("mouseenter", () => {
            content.style.display = "block";
            content.style.animation = "dropdown-slide 0.4s ease";
        });

        dropdown.addEventListener("mouseleave", () => {
            content.style.animation = "fade-out 0.3s ease";
            setTimeout(() => content.style.display = "none", 300);
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const photoSecti = document.querySelector(".photosecti");

    photoSecti.addEventListener("mousedown", () => {
        photoSecti.classList.remove("clicked"); // Reset state
        setTimeout(() => {
            photoSecti.classList.add("clicked"); // Stop glitch after 2s
        }, 2000);
    });
});

/*GABISA INSPECT*/
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.addEventListener('keydown', function(e) {
    // Disable F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
    // Disable Ctrl+U
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
});
