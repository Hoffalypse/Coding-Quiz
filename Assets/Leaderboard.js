let list = document.getElementById("list");
let erase = document.getElementById("erase");
let one = document.createElement("td");
let nameInput = localStorage.getItem("data");
let total = localStorage.getItem("totalScore");
let array = [];
let totalInput = nameInput + " " + total;

function renderScores() {
  if (total !== null) {
    for (var i = 0; i < array.length; i++) {
      var createLi = document.createElement("li");
      createLi.textContent = array[i];
      list.appendChild(createLi);
    }
  } else {
    localStorage.clear();
  }
}

//store leaderboard data
function storeScores() {
  localStorage.setItem("final", JSON.stringify(array));
  
}

//pulls past data into the leaderboard
function getScores() {
  let storeArray = JSON.parse(localStorage.getItem("final"));

  if (storeArray !== null ) {
    array = storeArray;
  }
  //adds new array to existing one
  array.push(totalInput);

  renderScores();
  storeScores();
}
if (total !== null) {
  getScores();
}
//erases all stored data and shows empty leaderboard 
erase.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
