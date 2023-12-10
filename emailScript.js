// JavaScript source code
document.addEventListener("DOMContentLoaded", function () {
    // Function to handle clicking on an email link
    function handleEmailClick(event) {
        // Prevent the default behavior (opening the email client) to handle it manually
        event.preventDefault();

        // Get the email address from the data attribute
        const emailAddress = event.target.dataset.email;

        // Open the default email client with a new email
        window.location.href = `mailto:${emailAddress}`;
    }

    // Add event listener to all elements with the class "email-link"
    const emailLinks = document.querySelectorAll('.email-link');
    emailLinks.forEach(link => {
        link.addEventListener('click', handleEmailClick);
    });
});
