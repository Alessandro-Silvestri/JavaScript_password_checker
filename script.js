/*
    JavaScript: Password checker
    Author: Alessandro Silvestri <alessandro.silvestri.work@gmail.com>
    2025
*/

// objects
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let see1 = document.getElementById("see1");
let see2 = document.getElementById("see2");
let requirements = document.getElementsByClassName("requirements");
let buttonCheckPassword = document.getElementById("buttonCheckPassword");
let p_passwordOk = document.getElementById("p_passwordOk");

// all the requirements in red
for (let i = 0; i < requirements.length; i++) {
    requirements[i].style.color = "red";
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

// hide password OK
p_passwordOk.style.display = "none";

// behaviors: every requirement is solved as a function
function IsMore12(pass) {
    return pass.length >= 12;
}

function IsCapNoCap(pass) {
    let isUpper = false;
    let isLower = false;
    for (let char of pass) {
        // this loop avoids the numbers 
        if (isNaN(char)) {
            if (char === char.toUpperCase())
                isUpper = true;
            if (char === char.toLowerCase())
                isLower = true;
            if (isUpper && isLower)
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
        if(char === " ")
            continue;
        if (isSpecialChar(char)) {
            isSpecial = true;
            break;
        }
    }
    return isSpecial;
}

function isDigitInside(pass) {
    let isDigit = false;
    for (let char of pass) {
        if(char === " ")
            continue;
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

function equalPws(pass1, pass2) {
    return pass1 === pass2;
}

function checkAllGreen() {
    let allGreen = true;
    for (let i = 0; i < requirements.length; i++) {
        if (requirements[i].style.color === "red") {
            allGreen = false;
            break;
        }
    }
    return allGreen;
}

buttonCheckPassword.addEventListener("click", () => {
    let pw1 = pass1.value;
    let pw2 = pass2.value;
    if(pw1 === "" && pw2 === "")
        return;
    if (IsMore12(pw1))
        requirements[0].style.color = "green";
    else
        requirements[0].style.color = "red";
    if (IsCapNoCap(pw1))
        requirements[1].style.color = "green";
    else
        requirements[1].style.color = "red";
    if (isSpecialCharInside(pw1))
        requirements[2].style.color = "green";
    else
        requirements[2].style.color = "red";
    if (isDigitInside(pw1))
        requirements[3].style.color = "green";
    else
        requirements[3].style.color = "red";
    if (!isSpaceInside(pw1))
        requirements[4].style.color = "green";
    else
        requirements[4].style.color = "red";
    if (equalPws(pw1, pw2))
        requirements[5].style.color = "green";
    else
        requirements[5].style.color = "red";
    if (checkAllGreen())
        p_passwordOk.style.display = "";
    else
        p_passwordOk.style.display = "none";
})

