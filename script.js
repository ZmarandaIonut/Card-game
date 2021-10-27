const colors = ["green","red"];
let chosenColor;
let itemsLeft = 9;
let [green, red] = [0,0];
let [wins,loses] = [0,0];

window.addEventListener("load", () => {
   const container = document.getElementsByClassName("cards-storage")[0];
   for(let i = 0; i<container.childNodes.length-1; i++){
       container.childNodes[i].onclick = pickColor;
       container.childNodes[i].id = i;
   }
})
 const pickColor = (e) => {
    const container = document.getElementsByClassName("cards-storage")[0];
    const random = Math.floor(Math.random() * colors.length);
    chosenColor = colors[random];
    const currentItemID = e.target.id;
    for(let i = 0; i<container.childNodes.length-1; i++){
        if(container.childNodes[i].id === currentItemID){
            if(chosenColor === "red"){
                container.childNodes[i].classList += " red";
                red++;
            }
            else{
                container.childNodes[i].classList += " green";
                green++;
            }
            container.childNodes[i].onclick = "";
        }
    }
    itemsLeft--;
    if(itemsLeft === 0){
        const resetButton = document.getElementsByClassName("restart")[0];
        const restart = document.getElementsByClassName("restart")[0];
        resetButton.classList += " active";
        if(green > red){
            restart.innerHTML = "You WIN! Reset cards"
            wins++;
        }
        else{
            restart.innerHTML = "You LOSE! Reset cards"
            loses++;
        }
        endGame();
    }
  }

  const endGame = () => {
    const container = document.getElementsByClassName("cards-storage")[0];
    const winElement = document.getElementById('wins-count');
    const loseElement = document.getElementById("loses-count");
    container.classList += " blur";
    winElement.innerHTML = `Win: ${wins}`;
    loseElement.innerHTML = `Lose: ${loses}`;
  }
  const resetGame = () => {
    const container = document.getElementsByClassName("cards-storage")[0];
    const restart = document.getElementsByClassName("restart")[0];
    restart.classList = "restart";
    for(let i = 0; i<container.childNodes.length-1; i++){
        container.childNodes[i].classList = "card";
        container.childNodes[i].onclick = pickColor;
    }
    container.classList = "cards-storage"
    itemsLeft = 9;
    green = 0;
    red = 0;
  }