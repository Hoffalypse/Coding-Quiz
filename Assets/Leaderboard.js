let list = document.getElementById("list");
let erase = document.getElementById("erase");
let one = document.createElement("td");
let nameInput = localStorage.getItem("data");
let total = localStorage.getItem("totalScore");
let array = [];
let totalInput = nameInput + " " + total;



function renderScores() {
  if (array !== null) {
    for (var i = 0; i < array.length; i++) {
      var createLi = document.createElement("li");
      createLi.textContent = array[i];
      list.appendChild(createLi);
    }
  } 
}

function storeScores() {
  localStorage.setItem("final", JSON.stringify(array));
}

function getScores() {
  let storeArray = JSON.parse(localStorage.getItem("final"));

  if (storeArray !== null) {
    array = storeArray;
    
}
    array.push(totalInput);

  renderScores();
  storeScores();
}
getScores();

function ClearBoard() {
  window.localStorage.removeItem("final");
  // window.location.reload;
  localStorage.clear();
  
}
document.getElementById("erase").onclick = ClearBoard();
// erase.addEventListener("click", function () {
 
//   localStorage.clear();
//   location.reload();
// });
