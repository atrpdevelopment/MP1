let selectedPaymentMethod = null;

function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.payment-option').forEach(option => {
        option.style.backgroundColor = option.id === method + '-option' ? '#ff0000' : '#fff';
        option.style.color = option.id === method + '-option' ? '#fff' : '#000';
    });
}

function checkout() {
    const email = document.getElementById('email').value;
    const fname = document.getElementById('fname').value;
    const did = document.getElementById('did').value;

    if (selectedPaymentMethod && email && fname && did) {
        alert(`Checkout completed using ${selectedPaymentMethod}. Email: ${email}. Full Name: ${fname}. Discord ID: ${did}`);
    } else {
        alert('Please fill out all of the boxes');
    }
}