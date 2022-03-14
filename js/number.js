var attempts = 0
var min = 1
var max = 100

function guess() {
    n = Math.floor((max - min) / 2 + min)
    let g = document.getElementById("g")
    let a = document.getElementById("a")
    attempts += 1
    a.innerText = "Number of Guesses: " + attempts.toString()
    g.innerText = n.toString()
    if (attempts > 7){
        a.innerText = "I had to get it by now! Unless you are cheating..."
    }
}
function higher() {
    min = n + 1
    guess()
}

function lower() {
    max = n - 1
    guess()
}

function reset(){
    attempts = 0
    min = 1
    max = 100
    guess()
    alert("Game Reset")
}

