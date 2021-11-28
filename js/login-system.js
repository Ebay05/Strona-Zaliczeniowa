const users = [{
    login: "ola",
    email: "example@gmail.com",
    password: "mazan"
}]

// LOGIN
const loginBtn = document.querySelector('#login-btn');
if(loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const login = document.querySelector('#login').value;
        const pass = document.querySelector('#pass').value;
        const areCredentialsValid = users.some(user => (user.login === login) && (user.password === pass))
        if(areCredentialsValid) {
            location.href = "table.html"
        } else {
                const error = document.querySelector('#errors');
                error.style.color = "red";
                error.innerHTML="Login or password is incorrect. Try again.";
        }
    })
}



// REGISTER

function registration() {

    const login = document.querySelector("#login").value;
    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#pass").value;
    const rpass = document.querySelector("#rpass").value;

    //email and pass expression
    const pass_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // errors field
    const error = document.querySelector('#errors');
    error.style.color = "red";

    if (login == '') {
        error.innerHTML += 'Please enter your login <br/>';
    } else if (email == '') {
        error.innerHTML += 'Please enter your user email id <br/>';
    } else if (!filter.test(email)) {
        error.innerHTML += 'Invalid email <br/>';
    } else if (login == '') {
        error.innerHTML += 'Please enter the login. <br/>';
    } else if (pass == '') {
        error.innerHTML = 'Please enter Password <br/>';
    } else if (rpass == '') {
        error.innerHTML += 'Please rewrite password <br/>';
    } else if (!pass_expression.test(pass)) {
        error.innerHTML += ('Password required upper case, lower case and number <br/>');
    } else if (pass != rpass){
        error.innerHTML += ('Passwords are not the same <br/>');
    } else if (rpass.length < 6) {
        error.innerHTML += 'Password minimum length is 6 characters <br/>';
    } else {
        const newUser = {
            login, email, pass
         }
          
         users.push([...users, newUser]);

        error.style.color = "green";
        error.innerHTML = "Successful registration! For 5 sec you will redirect. <br/>";
        setTimeout(() => {
            window.location = "table.html";
        }, 5000);
    }
}
const registerBtn = document.querySelector('#register-btn');

if(registerBtn) {
    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        registration()
    })
}
