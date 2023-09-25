document.addEventListener('DOMContentLoaded', function() {
    const validateBTN = document.getElementById('validate');

    const passwordValidation = (event) => {
        
        const password = document.getElementById('password').value;
        const passwordRepeat = document.getElementById('passwordRepeat').value;
        let validpassword = true;
        let validpasswordRepeat = true;
        let matchingPassword = true;

        const passwordRegex = /[^a-zA-Z]/g;

        if (passwordRegex.test(password)) {
            validpassword = false;
            console.log('password invalid' + password);
        }else {
            document.getElementById('passwordError').textContent = "";
        }

        if (passwordRegex.test(passwordRepeat)) {
            validpasswordRepeat = false;
            console.log('passwordRepeat invalid' + passwordRepeat);
        }else {
            document.getElementById('passwordRetryError').textContent = "";
    } 

    if (password !== passwordRetry) {
        matchingPassword = false;
        console.log("Passwords do not match");
        document.getElementById('passwordMatchingError').textContent = "Passwords do not match!!";
      } else {
        document.getElementById('passwordMatchingError').textContent = "";
      }
  
}
});