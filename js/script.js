let regButton = document.querySelector('#regButton');
let signInForm = document.querySelector('#sign-in');
let logButton = document.querySelector('#logButton');
let signUpForm = document.querySelector('#sign-up');

//Animations

regButton.onclick = showSignUpForm;

logButton.onclick = showSignInForm;

function showSignUpForm(){

    signInForm.style.opacity = '0';
    setTimeout(function(){
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
        signUpForm.style.opacity = '1'
        
    }, 900);
    
    document.querySelector('.wrapper').style.height = '540px'
    
    
    
    return false;
}

function showSignInForm(){

    signUpForm.style.opacity = '0';
    setTimeout(function(){
        signUpForm.style.display = 'none';
        signInForm.style.display = 'block';
        signInForm.style.opacity = '1';
        
    }, 900);

    document.querySelector('.wrapper').style.height = '430px'
    
    
    
    return false;
}

// Interaction with the server

document.getElementById('sign-up').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const repPassword = document.getElementById('regRepPassword').value;
    const email = document.getElementById('regEmail').value;
    

    if (password != repPassword){
        alert('Пароли не совпадают.')
    }
    else{
        document.getElementById('regUsername').value = '';
        document.getElementById('regPassword').value = '';
        document.getElementById('regRepPassword').value = '';
        document.getElementById('regEmail').value = '';

        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&email=${encodeURIComponent(email)}`
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => console.error('Error:', error));
    }
    

    
});

document.getElementById('sign-in').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    document.getElementById('loginUsername').value = '';
    const password = document.getElementById('loginPassword').value;
    document.getElementById('loginPassword').value = '';

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => console.error('Error:', error));
});




