//Validate Names
function validateName(input, errorId) {
    const nameRegex = /^[A-Za-z\s]+$/;
    const name = input.value;

    if (name == "")
        (document.getElementById(errorId)).textContent = "Name is required";
    else if (!nameRegex.test(name)) {
        (document.getElementById(errorId)).textContent = "Numbers are not allowd";
    }
    else
        (document.getElementById(errorId)).textContent = "";
}

//Validate Birth Date
function validateDate() {
    const birthDateRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/[0-9]{4}$/;
    const birthDate = document.getElementById("birthDate").value;
    if (birthDate == "")
        (document.getElementById("birthDateError")).textContent = "Birth Date is required";
    else if (!birthDateRegex.test(birthDate)) {
        (document.getElementById("birthDateError")).textContent = "Date should be DD/MM/YYYY";
    }
    else
        (document.getElementById("birthDateError")).textContent = "";
}

//Validate Email
function validateEmail() {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const email = document.getElementById("email").value;
    if (email == "")
        (document.getElementById("emailError")).textContent = "Email is required";
    else if (!emailRegex.test(email)) {
        (document.getElementById("emailError")).textContent = "Invalid Email";
    }
    else
        (document.getElementById("emailError")).textContent = "";
}

//Validate Password
function validatePassword() {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,}$/;
    const password = document.getElementById("password").value;
    if (!passwordRegex.test(password)) {
        (document.getElementById("passwordError")).textContent = "Password should be at least 8 characters including numbers, upper and lower case letters ";
    }
    else
        (document.getElementById("passwordError")).textContent = "";
}

//Match Email and password
function match(input1, input2, errorId) {
    if (input1.value != input2.value)
        (document.getElementById(errorId)).textContent = "Does not match";
    else
        (document.getElementById(errorId)).textContent = "";
}