//perimeters
let counter = 0;
let firstSelection = "";
let secondSelection = "";
let firstCard;
let secondCard;
let interval;
let clicks = 0;
let add = 0;
// I made all my cards hidden using display none in css i created a function and used a querySelecor to target each card
function handleClick(e) {
    clearInterval(interval)
    const cardImg = e.target.querySelector("img")
    const card = e.target
    cardImg.style.display = "block"

    card.classList.add("clicked");
    clicks++
    let click = document.querySelector(".clicks")

    click.innerHTML = `clicks: ${clicks}`
// when you start the game the counter is 0 and every time the user clicks on the card it adds one to the counter
    if (counter === 0) {
        firstSelection = card.getAttribute("sports");
        firstCard = cardImg
        counter++;
    } else if (counter === 1) {
        secondSelection = card.getAttribute("sports");
        secondCard = cardImg
        counter++;

    }

    if (counter === 2) {
        console.log("check")
        let correctCards;
        if (firstSelection === secondSelection) {
            correctCards = document.querySelectorAll(".card[sports='" + firstSelection + "']")
            console.log(correctCards)
            correctCards[0].classList.add("checked");
            correctCards[0].classList.remove("clicked");
            correctCards[1].classList.add("checked");
            correctCards[1].classList.remove("clicked");
            counter = 0
// the else statement makes it where once counter = 2 it restarts the counter back to 0 (counter max = 2)

        } else {
            interval = setInterval(() => {
                firstCard.style.display = "none";
                secondCard.style.display = "none";
                firstSelection = ""
                secondSelection = ""
                counter = 0
            }, 500)

        }
    }
    // if the cards match add 1 
    if (firstSelection === secondSelection) {
        add++;
    }
    // since there is 6 pairs once adds = 6 display h2 which is "you won"

    if (add === 6) {
        document.getElementById('bob').style.display="block"
      
    }

}

const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
    card.addEventListener("click", handleClick)


})



