// validation.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('notification-form');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form values
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const phone = form.elements.phone.value;
        
        // Regular expressions for validation
        const nameRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const phoneRegex = /^\d{10}$/;
        
        // Validate name
        if (!name.match(nameRegex)) {
            alert('Please enter a valid name.');
            return;
        }
        
        // Validate email
        if (!email.match(emailRegex)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Validate phone number
        if (!phone.match(phoneRegex)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }
        
        // Form submission successful
        alert('Submitted Successfully');
        
        // Reset the form
        form.reset();
    });
});
