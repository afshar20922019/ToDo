var stuffToDo = ["Klipp gräset ", "Betala räkningar", "Köp mjölk", "Spika upp tavlor "];
sessionStorage.setItem("ToDo", stuffToDo);
var json_str = JSON.stringify(stuffToDo);
sessionStorage.doList = json_str;
console.log(stuffToDo)

var obj = JSON.parse(json_str);
var printList;
for (var i = 0; i < obj.length; i++) {
    printList += "<h1>" + obj[i] + "</h1>";

}
// document.getElementById("printlist").innerHTML = obj;



var username = "Ali"
var password = "Afshar"

/** Check if username and password from input fields are the same as the global variables and logging in if matched */
function validateForm() {
    var usernameInput = document.getElementById("username").value
    var passwordInput = document.getElementById("password").value

    if (usernameInput == username && passwordInput == password) {
        sessionStorage.setItem("username", usernameInput);
        document.getElementById("printlist").innerHTML = sessionStorage.getItem("username");

    } else {
        document.getElementById("printlist").innerHTML = "Har du glömt ditt lösenord";


    }
}