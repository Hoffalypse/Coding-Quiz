let list = document.getElementById("list");
let erase = document.getElementById("erase");
let one = document.createElement("td");
let scoreString = [];
let initialsString = [];


let nameInput = localStorage.getItem("data")
let total = localStorage.getItem("totalScore")

let totalInput = initials +  total;
console.log(totalInput);

if (totalInput !== null) {

    for (var i = 0; i < localStorage.length/2; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = nameInput + " " + total;
        list.appendChild(createLi);

    }
}




erase.addEventListener("click", function() {

localStorage.clear();
location.reload();
})

  
