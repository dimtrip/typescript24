//game
    const enemySpeed = 1;
    const enemyHealth = 100;

    let gameOver = false;
    let score = 0;
    let totalEnemies = 0;
    let enemyInterval;

    function createEnemy() {
    if (gameOver) return;

    const enemy = document.createElement("div");

    enemy.classList.add("enemy");
    enemy.textContent = "👽";
    document.body.appendChild(enemy);

    const startX = Math.random() * (window.innerWidth - 100);

    enemy.style.left = startX + "px";
    enemy.style.top = "0px";

    let health = enemyHealth;

    const healthBar = document.createElement("div");

    healthBar.classList.add("health-bar");

    const healthFill = document.createElement("div");

    healthFill.classList.add("health");
    healthBar.appendChild(healthFill);
    enemy.appendChild(healthBar);
    totalEnemies++;

    function moveEnemy() {
    if (gameOver) return;
    let top = parseFloat(enemy.style.top || 0);
    top += enemySpeed;
    if (top >= window.innerHeight - 100) {
    gameOver = true;
    document.querySelector(".game-over").style.display = "block";
    return;
}
    enemy.style.top = top + "px";
    healthFill.style.width = health + "%";
    if (health <= 0) {
    enemy.innerHTML = "☠️";
    score += 10;
    updateScore();
    return;
}
    requestAnimationFrame(moveEnemy);
}
    moveEnemy();
    enemy.addEventListener("click", () => {
    if (gameOver) return;
    health -= 50;
    if (health <= 0) {
    enemy.innerHTML = "☠️";

    updateScore();
}
});
}
    function updateScore() {
    const scoreBar = document.querySelector(".score");
    const scorePercentage = (score / (totalEnemies * 10)) * 100;
    scoreBar.style.width = scorePercentage + "%";
    scoreBar.textContent = "Score: " + score;
}

    function restartGame() {
    clearInterval(enemyInterval);
    gameOver = false;
    score = 0;
    totalEnemies = 0;
    document.querySelector(".game-over").style.display = "none";

    const enemies = document.querySelectorAll(".enemy");
    enemies.forEach(enemy => enemy.remove());

    enemyInterval = setInterval(createEnemy, 1000);
}
    enemyInterval = setInterval(createEnemy, 1000);
    document.querySelector(".game-over").addEventListener("click", restartGame);
    window.addEventListener("resize", () => {
    if (gameOver) {
    restartGame();
}
});
