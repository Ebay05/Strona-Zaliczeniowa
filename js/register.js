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
            window.location = "login.html";
        }, 5000);
    }
}


document.querySelector('#register-btn').addEventListener('click', (e) => {
    e.preventDefault();
    registration()
})