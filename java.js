function showError(message) {
    alert("Unavailable: " + message);
}

// Example usage:
document.addEventListener('click', function() {
    showError("Copying to clipboard is not supported in this browser.");
});