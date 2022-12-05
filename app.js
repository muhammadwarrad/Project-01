//perimeters
let counter = 0;
let firstSelection = "";
let secondSelection = "";
let firstCard;
let secondCard;
let interval;
let clicks = 0;
let add = 0;
function handleClick(e) {
    clearInterval(interval)
    const cardImg = e.target.querySelector("img")
    const card = e.target
    cardImg.style.display = "block"

    card.classList.add("clicked");
    clicks++
    let click = document.querySelector(".clicks")

    click.innerHTML = `clicks: ${clicks}`

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
    if (firstSelection === secondSelection) {
        add++;
    }
    if (add === 6) {
        alert("You Win")
    }

}

const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
    card.addEventListener("click", handleClick)


})



