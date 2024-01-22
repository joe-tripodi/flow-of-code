// loadHeader.js
document.addEventListener('DOMContentLoaded', function() {
    // Fetch and inject the header content
    fetch('../header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-container').innerHTML = html;
        });
});
