// at least 12 characters
// capital and not capital char
// at least a special char
// at least a number
// no spaces inside 
// see password function

// objects
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let see1 = document.getElementById("see1");
let see2 = document.getElementById("see2");
let requirements = document.getElementsByClassName("requirements");
let buttonCheckPassword = document.getElementById("buttonCheckPassword");

// all the requirements in red
for (let i = 0; i < requirements.length; i++) {
    console.log(requirements[i].style.color = "red");
}

// "see" button behavior (changing the "type" attribute: password/text)
see1.addEventListener("click", () => {
    pass1.attributes[1].value = "text";
})
see1.addEventListener("focusout", () => {
    pass1.attributes[1].value = "password";
})

see2.addEventListener("click", () => {
    pass2.attributes[1].value = "text";
})
see2.addEventListener("focusout", () => {
    pass2.attributes[1].value = "password";
})


// behaviors: every requirement is solved as a function
function IsMore12(pass) {
    return pass.length >= 12;
}

function IsCapNoCap(pass) {
    let isUpper = false;
    let isLower = false;
    for (let char of pass) {
        if (char === char.toUpperCase())
            isUpper = true;
        if (char === char.toLowerCase()) {
            isLower = true;
        }
        if (isUpper && isLower) {
            break;
        }
    }
    return isUpper && isLower;
}

function isSpecialCharInside(pass) {
    function isSpecialChar(ch) {
        return /[^a-zA-Z0-9]/.test(ch);
    }
    let isSpecial = false;
    for (let char of pass) {
        if (isSpecialChar(char)) {
            isSpecial = true;
            break;
        }
    }
    return isSpecial;
}

function isDigitInside(pass) {
    debugger;
    let isDigit = false;
    for (let char of pass) {
        // if the character is a number
        if (!isNaN(Number(char))) {
            isDigit = true;
            break;
        }
    }
    return isDigit;
}

function isSpaceInside(pass) {
    return pass.includes(" ");
}



buttonCheckPassword.addEventListener("click", () => {
    let pw1 = pass1.value;
    let pw2 = pass2.value;
    if (IsMore12(pw1)) {
        requirements[0].style.color = "green";
    }
    else {
        requirements[0].style.color = "red";

    }
})

