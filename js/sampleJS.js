function evalNumber(){
    var inputValue = prompt("Enter Any five-digit number without commas")

    if (isNaN(inputValue)){
        alert(inputValue + " is not a number")

    }

    else if (inputValue % 2 == 0){

        alert(inputValue + " is an even number.")  
     } 
     else{
        alert(inputValue + " is an odd number.")
        }
    
}

function changeTitle(){
    let selectedElement  = document.getElementById("changeMe")
    console.log(selectedElement)
    selectedElement.innerText = "DIGS"
}

function minuteOfTheDay(){
    var d = new Date()
    var min = d.getMinutes()
    let selectedElement  = document.getElementById("time")
    console.log(selectedElement)
    selectedElement.innerText =  "It is minute "+ min + " of hour  " + d.getHours() + " of the day!"
}


function goodBye(){
    let selectedElement = document.getElementById("goAway")
    selectedElement.style.display = 'none'

}

function howdy(){
    document.getElementById('goAway').style.display = 'block'
}