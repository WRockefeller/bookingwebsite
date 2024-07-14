document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = document.getElementById('day').value;
    const email = document.getElementById('email').value;

    fetch('https://script.google.com/macros/s/AKfycbzBq5z4-evFwaB0bJj0l-W4z19R7CaMcileFTkUC0Swb7yVVudvAoG3szP0Nn2jsIHe8g/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ day, email, time })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        alert('Error: ' + error.message);
    });
});





