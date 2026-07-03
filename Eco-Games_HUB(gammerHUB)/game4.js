// ==============================
// ECO GAME - GAME 4
// Deniz Temizleme
// ==============================

const sea = document.getElementById("sea");
const scoreText = document.getElementById("score");
const trashText = document.getElementById("trash");
const lifeText = document.getElementById("life");

let score = 0;
let trashCount = 0;
let life = 3;
let gameOver = false;

// Çöp emojileri
const trashList = [
    "🛍️",
    "🧴",
    "🥤",
    "🗑️",
    "📦",
    "🥫"
];

// Deniz canlıları
const fishList = [
    "🐟",
    "🐠",
    "🐡",
    "🐢"
];

// Rastgele sayı
function random(min,max){

    return Math.floor(Math.random()*(max-min))+min;

}

// Nesne oluştur
function createItem(type){

    if(gameOver) return;

    const item=document.createElement("div");

    item.className="item";

    if(type=="trash"){

        item.innerHTML=trashList[random(0,trashList.length)];

        item.dataset.type="trash";

    }else{

        item.innerHTML=fishList[random(0,fishList.length)];

        item.dataset.type="fish";

    }

    item.style.left=random(20,window.innerWidth-80)+"px";

    item.style.top=random(20,500)+"px";

    item.onclick=function(){

        clickItem(item);

    };

    sea.appendChild(item);

}

// Tıklama
function clickItem(item){

    if(gameOver) return;

    if(item.dataset.type=="trash"){

        score+=10;

        trashCount++;

        scoreText.innerHTML=score;

        trashText.innerHTML=trashCount;

        item.remove();

        if(trashCount>=20){

            win();

        }

    }

    else{

        life--;

        lifeText.innerHTML=life;

        item.remove();

        if(life<=0){

            lose();

        }

    }

}

// Yeni nesneler oluştur
setInterval(function(){

    if(gameOver) return;

    if(document.querySelectorAll(".item").length<10){

        if(Math.random()<0.7){

            createItem("trash");

        }

        else{

            createItem("fish");

        }

    }

},900);

// Kazanma
function win(){

    gameOver=true;

    document.getElementById("endScreen").style.display="flex";

    document.getElementById("result").innerHTML=
    "🏆 Tebrikler!<br>Denizi Temizledin!";

}

// Kaybetme
function lose(){

    gameOver=true;

    document.getElementById("endScreen").style.display="flex";

    document.getElementById("result").innerHTML=
    "💀 Deniz Canlılarına Zarar Verdin!";

}