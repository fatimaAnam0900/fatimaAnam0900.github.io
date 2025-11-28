document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let msg = document.getElementById("msg");

    let nameVal = name.value.trim();
    let emailVal = email.value.trim();
    let phoneVal = phone.value.trim();

    let formValid = true; 

    let nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(nameVal) || nameVal === "") {
        name.style.border = "2px solid red";
        formValid = false;
    } else {
        name.style.border = "2px solid green";
    }

    if (!emailVal.endsWith("@gmail.com") || emailVal === "") {
        email.style.border = "2px solid red";
        formValid = false;
    } else {
        email.style.border = "2px solid green";
    }

    let phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phoneVal) || phoneVal === "") {
        phone.style.border = "2px solid red";
        formValid = false;
    } else {
        phone.style.border = "2px solid green";
    }

    if (!formValid) {
        msg.style.color = "red";
        msg.textContent = "Not properly filled!";
    } else {
        msg.style.color = "green";
        msg.textContent = "✔ Form submitted successfully!";
    }
});
