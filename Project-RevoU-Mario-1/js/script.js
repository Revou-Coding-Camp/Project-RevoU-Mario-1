document.addEventListener("DOMContentLoaded", function() {
    const name = prompt("Please enter your name:");
    const welcomeText = document.getElementById("welcome-text");
    if (name) {
        welcomeText.textContent = `Hi ${name}, Welcome To Website`;
    }
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let output = document.getElementById("output");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{8,15}$/;

    if (!name || !email || !phone || !message) {
        alert("All fields are required!");
        return;
    }
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address!");
        return;
    }
    if (!phone.match(phonePattern)) {
        alert("Phone number must be 8-15 digits!");
        return;
    }

    output.style.display = "block";
    output.innerHTML = `
        <h3>Form Submitted Successfully!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    document.getElementById("contactForm").reset();
});

