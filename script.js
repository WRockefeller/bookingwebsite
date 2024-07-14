document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = document.getElementById('day').value;
    const email = document.getElementById('email').value;

    fetch('https://script.google.com/macros/s/AKfycbzcMjbxhsYDgPFivHGl0H4xZID5IuzGyHjT9drE3vtbT-L9109hU_4QKIaKXdOCJfyWBQ/exec', {
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





