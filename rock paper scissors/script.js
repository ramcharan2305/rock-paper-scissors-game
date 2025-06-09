function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    const resultElement = document.getElementById("result");
    resultElement.innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
    resultElement.style.opacity = "1"; // Fade-in effect

    // Highlight the selected button
    document.querySelectorAll(".choices button").forEach(btn => btn.classList.remove("selected"));
    document.querySelector(`button[onclick="playGame('${userChoice}')"]`).classList.add("selected");

    // Add 3D animation to the user's choice
    const userChoiceElement = document.querySelector(`button[onclick="playGame('${userChoice}')"]`);
    userChoiceElement.classList.add(userChoice);

    // Remove the animation class after it completes
    setTimeout(() => {
        userChoiceElement.classList.remove(userChoice);
    }, 800);
}