document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var day = document.getElementById('day').value;
    var email = document.getElementById('email').value;

    if (day && email) {
        fetch('https://script.google.com/macros/s/AKfycbznaDeaiRZq3WRrTL17qIMnEVuQh8L0O0bixsVoZJxAi3uLoufdJcfHPt4RthZ1YMtCrQ/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ day: day, email: email }),
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert('Please fill out all fields.');
    }
});






