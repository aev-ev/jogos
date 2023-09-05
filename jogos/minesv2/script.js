const boardElement = document.querySelector(".board");
const overlayElement = document.querySelector(".overlay");
const statusElement = document.querySelector(".status");
const generateHintButton = document.querySelector(".generate-hint");

function generateHint() {
    statusElement.style.display = "block";
    statusElement.parentNode.style.opacity = "1";
    boardElement.style.opacity = "0";
    const diamond_positions = randomDiamondPositions();
    const board = generateMinesBoard(diamond_positions);
    renderBoard(board);
    setTimeout(() => {
        overlayElement.style.display = "none";
        statusElement.style.display = "none";
        statusElement.parentNode.style.opacity = "0";
        boardElement.style.opacity = "1";
    }, 3000);
}

function randomDiamondPositions() {
    return Array.from({ length: 5 }, () => Math.floor(Math.random() * 25));
}

function generateMinesBoard(diamond_positions) {
    const grid = Array.from({ length: 25 }, (_, i) => 
        diamond_positions.includes(i) ? "💎" : "💣"
    );
    return Array.from({ length: 5 }, (_, i) =>
        grid.slice(i * 5, i * 5 + 5)
    );
}

function renderBoard(board) {
    boardElement.innerHTML = board
        .map((row) =>
            row
                .map(
                    (cell) =>
                        `<div><img decoding="async" src="${
                            cell === "💎" ? "./images/star1.webp" : "./images/miss1.webp"
                        }" alt="${cell}"></div>`
                )
                .join("")
            )
            .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    generateHint();
});