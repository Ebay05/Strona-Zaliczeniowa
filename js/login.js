document.querySelector('#login-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const login = document.querySelector('#login').value;
    const pass = document.querySelector('#pass').value;

    for (i = 0; i < users.length; i++) {
        if (login == users[i].login && pass == users[i].password) {
            location.href = "table.html";
        } else {
            const error = document.querySelector('#errors');
            error.style.color = "red";
            error.innerHTML="Login or password is incorrect. Try again.";
        }
    }
})


