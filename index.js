var jsonObject = {};
var userOrder = 0;

function submitInfo(){
    jsonObject["user"+userOrder] = {};
    const firstNameInput = document.getElementById("firstNameInput");
    jsonObject["user"+userOrder].firstName = firstNameInput.value;
    const lastNameInput = document.getElementById("lastNameInput");
    jsonObject["user"+userOrder].lastName = lastNameInput.value;
    const ageInput = document.getElementById("ageInput");
    jsonObject["user"+userOrder].age = ageInput.value;

    if (ageInput.value != "" && lastNameInput.value != "" && firstNameInput.value != ""){
        localStorage.setItem("jsonObject", JSON.stringify(jsonObject));
        window.location.href = "../index2.html";
        userOrder++;
        return false;
    } 
}