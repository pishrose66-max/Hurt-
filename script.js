// JavaScript functionality for Sales Page

// Smooth Scrolling
const scrollToElement = (element) => {
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
};

// Interactive Elements
const toggleElement = (trigger, target) => {
    document.querySelector(trigger).addEventListener('click', () => {
        const element = document.querySelector(target);
        element.classList.toggle('active');
    });
};

// Form Handling
const handleFormSubmit = (formSelector) => {
    const form = document.querySelector(formSelector);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        // Process the form data here
        console.log('Form submitted', Object.fromEntries(formData));
        form.reset();  // Reset form after submission
    });
};

// Initialize functionality
document.addEventListener('DOMContentLoaded', () => {
    // Example usage
    scrollToElement('#some-section');
    toggleElement('.trigger-button', '.toggle-target');
    handleFormSubmit('#contact-form');
});