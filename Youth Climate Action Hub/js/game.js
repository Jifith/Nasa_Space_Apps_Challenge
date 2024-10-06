document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    let carbonFootprint = 100;

    const actions = [
        {
            choice: "Plant trees",
            effect: -20,
            color: "#4caf50" // Green
        },
        {
            choice: "Use renewable energy",
            effect: -30,
            color: "#8bc34a" // Light Green
        },
        {
            choice: "Drive more cars",
            effect: 30,
            color: "#f44336" // Red
        },
        {
            choice: "Recycle waste",
            effect: -10,
            color: "#ffeb3b" // Yellow
        }
    ];

    function loadGame() {
        gameContainer.innerHTML = `
            <h2>Carbon Footprint: ${carbonFootprint}</h2>
            <div>
                ${actions.map((action, index) => `
                    <button onclick="takeAction(${index})" style="background-color: ${action.color}">${action.choice}</button>
                `).join('')}
            </div>
        `;
    }

    window.takeAction = function (index) {
        const action = actions[index];
        carbonFootprint += action.effect;

        // Add a progress effect
        const footprintColor = carbonFootprint <= 50 ? "#4caf50" : carbonFootprint <= 100 ? "#ffeb3b" : "#f44336";
        gameContainer.querySelector('h2').style.color = footprintColor;

        if (carbonFootprint <= 0) {
            gameContainer.innerHTML = `<h2 style="color: #4caf50;">You saved the planet! Carbon footprint is now zero!</h2>`;
        } else if (carbonFootprint >= 200) {
            gameContainer.innerHTML = `<h2 style="color: #f44336;">Oh no! The carbon footprint is too high. Try again.</h2>
                                       <button onclick="restartGame()">Play Again</button>`;
        } else {
            loadGame();
        }
    };

    window.restartGame = function () {
        carbonFootprint = 100;
        loadGame();
    };

    loadGame();
});
