// ==============================
// ECO GAME - GAME 2
// Geri Dönüşüm Avcısı
// ==============================

const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const message = document.getElementById("message");

let score = 0;
let time = 60;
let gameOver = false;

const trashList = [
    {emoji:"🧴", type:"plastic"},
    {emoji:"🥤", type:"plastic"},
    {emoji:"🛍️", type:"plastic"},

    {emoji:"🍾", type:"glass"},
    {emoji:"🫙", type:"glass"},

    {emoji:"📄", type:"paper"},
    {emoji:"📦", type:"paper"},
    {emoji:"📰", type:"paper"}
];

function random(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

function createTrash(){

    if(gameOver) return;

    let item = trashList[random(0,trashList.length)];

    let div = document.createElement("div");

    div.className="trash";

    div.innerHTML=item.emoji;

    div.dataset.type=item.type;

    div.style.left=random(20,window.innerWidth-80)+"px";

    div.style.top=random(20,350)+"px";

    div.onclick=function(){

        collect(div);

    };

    gameArea.appendChild(div);

}

function collect(div){

    if(gameOver) return;

    score+=10;

    scoreText.innerHTML=score;

    message.innerHTML="♻️ Çöp geri dönüştürüldü!";

    div.remove();

}

function spawn(){

    if(gameOver) return;

    if(document.querySelectorAll(".trash").length<8){

        createTrash();

    }

}

setInterval(spawn,800);

setInterval(function(){

    if(gameOver) return;

    time--;

    timeText.innerHTML=time;

    if(time<=0){

        finish();

    }

},1000);

function finish(){

    gameOver=true;

    document.getElementById("endScreen").style.display="flex";

    let result=document.getElementById("result");

    if(score>=200){

        result.innerHTML="🏆 Tebrikler!<br>Puan: "+score;

    }else{

        result.innerHTML="😢 Süre Doldu<br>Puan: "+score;

    }

}

message.innerHTML="Çöplere tıkla ve geri dönüştür!";