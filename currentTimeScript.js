// JavaScript source code
document.addEventListener("DOMContentLoaded", function () {
    // Function to get the current time
    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    }

    // Function to update the content of the 'currentTime' element
    function updateCurrentTime() {
        const currentTimeElement = document.getElementById("currentTime");
        currentTimeElement.textContent = `Current Time: ${getCurrentTime()}`;
    }

    // Event listener for the button click
    const timeButton = document.getElementById("currentTimeButton");
    timeButton.addEventListener("click", updateCurrentTime);
});