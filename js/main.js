document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved user preference, if any, on load of the website
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        htmlElement.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Mobile Menu Logic
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = menuToggle.querySelectorAll('span');
        if (mainNav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(0px, 6px)';
            spans[1].style.display = 'none';
            spans[2].style.transform = 'rotate(-45deg) translate(0px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.display = 'block';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!link.classList.contains('dropbtn')) {
                mainNav.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.display = 'block';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // Open Dropdown on hover, keep open if clicked
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            if (dropdown.classList.contains('clicked')) {
                dropdown.classList.remove('active', 'clicked');
            }
            else {
                dropdown.classList.add('active', 'clicked');
            }
        });
        dropdown.addEventListener('mouseenter', () => {
            dropdown.classList.add('active');
        });
        dropdown.addEventListener('mouseleave', () => {
            if (!dropdown.classList.contains('clicked')) {
                dropdown.classList.remove('active');
            }
        });
    });

    // Close dropdown when clicked outside or on dropbtn
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active', 'clicked');
            });
        }
    });
});
