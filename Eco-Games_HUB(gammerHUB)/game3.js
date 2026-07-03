// ==============================
// ECO GAME - GAME 3
// Orman Kurtarma
// ==============================

const forest = document.getElementById("forest");
const treeCountText = document.getElementById("treeCount");
const timeText = document.getElementById("time");

let treeCount = 0;
let time = 120;
let gameOver = false;

// Ağaç dikme
forest.addEventListener("click", function(e){

    if(gameOver) return;

    const tree = document.createElement("div");

    tree.className = "tree";
    tree.innerHTML = "🌳";

    tree.style.left = e.clientX + "px";
    tree.style.top = e.clientY + "px";

    forest.appendChild(tree);

    treeCount++;

    treeCountText.innerHTML = treeCount;

    // Her 10 ağaçta çiçek ekle
    if(treeCount % 10 === 0){

        const flower = document.createElement("div");

        flower.className = "tree";
        flower.innerHTML = "🌼";

        flower.style.left = (e.clientX + 30) + "px";
        flower.style.top = (e.clientY + 20) + "px";

        forest.appendChild(flower);

    }

    checkWin();

});

// Sayaç
const timer = setInterval(function(){

    if(gameOver) return;

    time--;

    timeText.innerHTML = time;

    if(time <= 0){

        lose();

    }

},1000);

// Kazanma kontrolü
function checkWin(){

    if(treeCount >= 100){

        gameOver = true;

        clearInterval(timer);

        document.getElementById("endScreen").style.display="flex";

        document.getElementById("result").innerHTML =
        "🏆 Tebrikler!<br>100 Ağaç Diktin!";

    }

}

// Kaybetme
function lose(){

    gameOver = true;

    clearInterval(timer);

    document.getElementById("endScreen").style.display="flex";

    document.getElementById("result").innerHTML =
    "😢 Süre Doldu!<br>Diktiğin Ağaç: " + treeCount;

}