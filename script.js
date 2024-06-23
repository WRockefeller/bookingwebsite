document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = document.getElementById('day').value;
    const email = document.getElementById('email').value;

    fetch('https://script.google.com/macros/s/AKfycbz11acDysJx3AI7-_FlQYd0ZG6mk8rZnFmlncIL4KJ5pZGBIyLX649MHj0SurMrsGsdyg/exec', {
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





