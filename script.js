function showMessage() {
    alert("Thank you for visiting my portfolio!");
}
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email");

    if (name === "" || email === "") {
        alert("Please fill all required fields!");
        return false;
    }

    alert("Message Sent Successfully!");
    return true;
}