// Toggle mobile navigation menu
const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
});

// Basic form validation for contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm[0].value.trim();
        const email = contactForm[1].value.trim();
        const message = contactForm[2].value.trim();

        if (name && email && message) {
            alert('Thank you for your message!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}
