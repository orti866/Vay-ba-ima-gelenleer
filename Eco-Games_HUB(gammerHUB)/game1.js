// =========================
// ECO GAME - GAME 1
// Dünya Kıyameti
// =========================

let health = 100;
let temperature = 1.0;
let score = 0;

const healthBar = document.getElementById("health");
const tempText = document.getElementById("temp");
const scoreText = document.getElementById("score");
const message = document.getElementById("message");

function updateUI(){

    healthBar.style.width = health + "%";
    tempText.innerText = temperature.toFixed(1);
    scoreText.innerText = score;

    if(health > 70){
        healthBar.style.background="lime";
    }
    else if(health > 40){
        healthBar.style.background="orange";
    }
    else{
        healthBar.style.background="red";
    }

    checkGame();

}

function good(action){

    health += 5;
    if(health > 100) health = 100;

    temperature -= 0.2;
    if(temperature < 0) temperature = 0;

    score += 10;

    message.innerHTML = action + " başarılı! 🌍";

    updateUI();

}

function bad(action){

    health -= 10;
    if(health < 0) health = 0;

    temperature += 0.4;

    score -= 5;
    if(score < 0) score = 0;

    message.innerHTML = action + " çevreye zarar verdi! ☠";

    updateUI();

}

// --------------------
// Doğru Hareketler
// --------------------

function tree(){

    good("🌳 Ağaç dikmek");

}

function solar(){

    good("☀️ Güneş paneli kurmak");

}

function recycle(){

    good("♻️ Geri dönüşüm yapmak");

}

function filterFactory(){

    good("🏭 Fabrikaya filtre takmak");

}

// --------------------
// Yanlış Hareketler
// --------------------

function burnForest(){

    bad("🔥 Ormanı yakmak");

}

function plastic(){

    bad("🛍️ Plastik kullanmak");

}

function coal(){

    bad("🪨 Kömür santrali kurmak");

}

function trash(){

    bad("🗑️ Çöp atmak");

}

// --------------------
// Oyun Sonu
// --------------------

function checkGame(){

    if(temperature >= 4){

        document.getElementById("end").style.display="flex";

        document.getElementById("result").innerHTML="☠ KIYAMET OLDU";

    }

    if(health >= 100 && score >= 100){

        document.getElementById("end").style.display="flex";

        document.getElementById("result").innerHTML="🏆 DÜNYAYI KURTARDIN";

    }

}

updateUI();