const square1 = document.querySelector(".square1")
const square2 = document.querySelector(".square2")
const square3 = document.querySelector(".square3")
const square4 = document.querySelector(".square4")
const square5 = document.querySelector(".square5")
const square6 = document.querySelector(".square6")
const square7 = document.querySelector(".square7")
const square8 = document.querySelector(".square8")
const square9 = document.querySelector(".square9")

const squares = document.querySelectorAll(".square")
const container = document.querySelector(".container")
const alternation = document.querySelector(".alternation span")
let x = true

squares.forEach((square) => {
  square.onclick = (e) => {
    if (x) {
      container.classList.add("Xtime")
      alternation.textContent = "O"
      alternation.style.color = "#1900ff"
      x = false
    } else {
      container.classList.remove("Xtime")
      alternation.textContent = "X"
      alternation.style.color = "#ff1e00"
      x = true
    }

    e.target.setAttribute("disabled", "disabled")

    if (container.classList.contains("Xtime")) {
      document
        .querySelector("." + e.target.classList[1])
        .classList.add("markedX")
    } else {
      document
        .querySelector("." + e.target.classList[1])
        .classList.add("markedO")
    }

    if (
      Array.from(squares).every(function (checkbox) {
        return checkbox.checked
      })
    ) {
      draw()
    }

    let winner

    if (
      (square1.classList.contains("markedX") &&
        square2.classList.contains("markedX") &&
        square3.classList.contains("markedX")) ||
      (square1.classList.contains("markedO") &&
        square2.classList.contains("markedO") &&
        square3.classList.contains("markedO"))
    ) {
      x ? (winner = "O") : (winner = "X")
      show_the_winner(winner)
    } else if (
      (square1.classList.contains("markedX") &&
        square4.classList.contains("markedX") &&
        square7.classList.contains("markedX")) ||
      (square1.classList.contains("markedO") &&
        square4.classList.contains("markedO") &&
        square7.classList.contains("markedO"))
    ) {
      x ? (winner = "O") : (winner = "X")
      show_the_winner(winner)
    } else if (
      (square2.classList.contains("markedX") &&
        square5.classList.contains("markedX") &&
        square8.classList.contains("markedX")) ||
      (square2.classList.contains("markedO") &&
        square5.classList.contains("markedO") &&
        square8.classList.contains("markedO"))
    ) {
      x ? (winner = "O") : (winner = "X")
      show_the_winner(winner)
    } else if (
      (square3.classList.contains("markedX") &&
        square6.classList.contains("markedX") &&
        square9.classList.contains("markedX")) ||
      (square3.classList.contains("markedO") &&
        square6.classList.contains("markedO") &&
        square9.classList.contains("markedO"))
    ) {
      x ? (winner = "O") : (winner = "X")
      show_the_winner(winner)
    } else if (
      (square4.classList.contains("markedX") &&
        square5.classList.contains("markedX") &&
        square6.classList.contains("markedX")) ||
      (square4.classList.contains("markedO") &&
        square5.classList.contains("markedO") &&
        square6.classList.contains("markedO"))
    ) {
      x ? (winner = "O") : (winner = "X")
      show_the_winner(winner)
    } else if (
      (square7.classList.contains("markedX") &&
        square8.classList.contains("markedX") &&
        square9.classList.contains("markedX")) ||
      (square7.classList.contains("markedO") &&
        square8.classList.contains("markedO") &&
        square9.classList.contains("markedO"))
    ) {
      x ? (winner = "O") : (winner = "X")
      show_the_winner(winner)
    } else if (
      (square1.classList.contains("markedX") &&
        square5.classList.contains("markedX") &&
        square9.classList.contains("markedX")) ||
      (square1.classList.contains("markedO") &&
        square5.classList.contains("markedO") &&
        square9.classList.contains("markedO"))
    ) {
      x ? (winner = "O") : (winner = "X")
      show_the_winner(winner)
    } else if (
      (square7.classList.contains("markedX") &&
        square5.classList.contains("markedX") &&
        square3.classList.contains("markedX")) ||
      (square7.classList.contains("markedO") &&
        square5.classList.contains("markedO") &&
        square3.classList.contains("markedO"))
    ) {
      x ? (winner = "O") : (winner = "X")
      show_the_winner(winner)
    }
  }
})

squares.forEach((square) => {
  if ((square.classList.length = 3)) {
  }
})

function show_the_winner(winner) {
  const winner_screen = document.querySelector(".winner_screen")
  winner_screen.classList.add("active")
  winner_screen.querySelector("span").textContent = winner
  if (x) {
    winner_screen.querySelector("span").style.color = "#1900ff"
  } else {
    winner_screen.querySelector("span").style.color = "#ff1e00"
  }

  winner_screen.querySelector("button").onclick = () => window.location.reload()
}

function draw() {
  const draw_screen = document.querySelector(".draw_screen")
  draw_screen.classList.add("active")
  draw_screen.querySelector("button").onclick = () => window.location.reload()
}
