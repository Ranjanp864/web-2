// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;

    // Create output message
    const output = `
            <h3>Registration Successful!</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Gender:</strong> ${gender}</p>
        `;

    // Show the output message
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = output;
    outputDiv.style.display = "block"; // Make the output visible
  });
});