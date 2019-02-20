function randomCard() {
    let cardNumber = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let cardSuit = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
    let cardNumberSelector = Math.floor(Math.random() * cardNumber.length);
    let cardSuitSelector = Math.floor(Math.random() * cardSuit.length);
    
    let colorSelector = document.querySelector("#full-card");
    colorSelector.style.color = "black";
    if (cardSuitSelector >= 2) {
        colorSelector.style.color = "red";
    }
    
    document.querySelector("#top-suit").innerHTML = cardSuit[cardSuitSelector];
    document.querySelector("#middle-number").innerHTML = cardNumber[cardNumberSelector];
    document.querySelector("#bottom-suit").innerHTML = cardSuit[cardSuitSelector];
    
}