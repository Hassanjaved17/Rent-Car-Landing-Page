// main.js start

document.addEventListener('DOMContentLoaded', () => {
    // =======================
    //   Initialize AOS
    // =======================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    // =======================
    //  Mobile Navbar Toggle
    // =======================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }

    // =======================
    // Sticky "Book Now" Button
    // =======================
    const bookNowBtn = document.getElementById('book-now-btn');
    if (bookNowBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) { // Show button after scrolling 500px
                bookNowBtn.classList.add('show');
            } else {
                bookNowBtn.classList.remove('show');
            }
        });
    }

    // =======================
    //   Scroll progress bar
    // =======================
    const scrollBar = document.getElementById('scroll-bar');
    if (scrollBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollBar.style.width = scrollPercent + '%';
        });
    }
});

// main js end
