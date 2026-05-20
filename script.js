/* ============================================= */
/* OLD MUTUAL FAMILY SHIELD BOTSWANA - script.js */
/* Behavioural Layer - JavaScript Interactivity  */
/* ============================================= */

document.addEventListener('DOMContentLoaded', function () {

    console.log('%c✅ Old Mutual Family Shield Botswana - JavaScript loaded successfully!', 'color: #006633; font-weight: bold;');

    // 1. Smooth scrolling for all anchor links (improves UX)
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 2. Navbar mobile menu auto-close after clicking a link (Bootstrap enhancement)
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click(); // Close mobile menu
            }
        });
    });

    // 3. "Get a Free Quote" button enhancement (appears on multiple pages)
    const quoteButtons = document.querySelectorAll('.btn-warning, .btn-outline-light');
    quoteButtons.forEach(button => {
        if (button.textContent.includes('Quote') || button.textContent.includes('Get')) {
            button.addEventListener('click', function (e) {
                // Optional: Add a small visual feedback before navigating
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        }
    });

    // 4. Form Validation Helper (ready for contact.html)
    // This will work on any form that has class "needs-validation"
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                console.log('❌ Form validation failed - please check required fields');
            } else {
                console.log('✅ Form submitted successfully (simulated)');
                // In real contact.html we will show a success message
                alert('🎉 Thank you! Your message has been received. We will contact you within 24 hours.');
                form.reset(); // Clear the form after successful submission
            }
            form.classList.add('was-validated');
        }, false);
    });

    // 5. Back-to-Top Button (appears after scrolling down)
    const createBackToTop = () => {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        btn.className = 'btn btn-success position-fixed bottom-0 end-0 m-4 shadow';
        btn.style.display = 'none';
        btn.style.borderRadius = '50%';
        btn.style.width = '50px';
        btn.style.height = '50px';
        btn.style.zIndex = '9999';
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                btn.style.display = 'block';
            } else {
                btn.style.display = 'none';
            }
        });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };

    // Only create back-to-top on pages that need it
    if (window.innerWidth > 768) {
        createBackToTop();
    }

    console.log('%c🚀 All JavaScript features active – ready for full website!', 'color: #FF8C00; font-weight: bold;');
});