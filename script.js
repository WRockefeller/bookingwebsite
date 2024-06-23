document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = document.getElementById('day').value;
    const email = document.getElementById('email').value;

    fetch('https://script.google.com/macros/s/YOUR_WEB_APP_URL/exec', {
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





