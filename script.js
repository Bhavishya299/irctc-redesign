// Initialize Lucide icons
lucide.createIcons();

// Mobile Navigation
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const languageToggle = document.getElementById('languageToggle');
const langToggleMobile = document.getElementById('langToggleMobile');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Language Toggle
let currentLang = 'en';
const translations = {
    en: {
        home: 'Home',
        findTrains: 'Find Trains',
        luxuryTrains: 'Luxury Trains',
        trainHistory: 'Train History',
        cabinGallery: 'Cabin Gallery',
        switchLang: 'हिंदी'
    },
    hi: {
        home: 'होम',
        findTrains: 'ट्रेन खोजें',
        luxuryTrains: 'लक्जरी ट्रेन',
        trainHistory: 'ट्रेन का इतिहास',
        cabinGallery: 'केबिन गैलरी',
        switchLang: 'English'
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    updateLanguage();
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[currentLang][key];
    });
    
    languageToggle.querySelector('span').textContent = translations[currentLang].switchLang;
}

languageToggle.addEventListener('click', toggleLanguage);
langToggleMobile.addEventListener('click', toggleLanguage);

// Scroll to Top
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Star Rating
const stars = document.querySelectorAll('.star');
let currentRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        currentRating = rating;
        updateStars();
    });
});

function updateStars() {
    stars.forEach(star => {
        const rating = parseInt(star.getAttribute('data-rating'));
        if (rating <= currentRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Feedback Form
const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        rating: currentRating,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to a server
    console.log('Feedback submitted:', formData);
    
    // Show success message
    alert('Thank you for your feedback!');
    
    // Reset form
    feedbackForm.reset();
    currentRating = 0;
    updateStars();
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.stat-item, .feedback-form');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check