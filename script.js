let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Update dot indicators
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}

// Call showSlides() to start the slideshow
showSlides(slideIndex);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get form values
        const idNumber = document.getElementById('IDNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;
        const paymentAmount = document.getElementById('payment-amount').value;
        const paymentDate = document.getElementById('paymentDate').value;
        const verifyCardNumber = document.getElementById('verify-card-number').value;
        
        // Basic validation
        if (!idNumber || !expiryDate || !cvv || !paymentAmount || !paymentDate || !verifyCardNumber) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Process the payment (this is a placeholder, actual implementation will vary)
        alert('Payment processed successfully!');
    });
});

document.getElementById('sign-upForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('confirmPasswordError').style.display = 'none';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    let valid = true;

    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required.';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').innerText = 'Confirm Password is required.';
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    }

    if (valid) {
        alert("Registration successful!");
        window.location.href = 'index.html'; 
    }
});

