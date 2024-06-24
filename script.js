document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = document.getElementById('day').value;
    const email = document.getElementById('email').value;

    fetch('https://script.google.com/macros/s/AKfycbxRGJ1nFb7zfeH6SxcbuTYO84de84SBm-Vw3hHVACJbc-gAqJPt-bwEmbfgdfCxVx-MMQ/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ day, email })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        alert('Error: ' + error.message);
    });
});





