let sheClickedNo = false;
function yesButton(){
    var obrazek = document.getElementById("obrazek");
    var napis = document.getElementById("napis");
    var audio = document.getElementById("happySound");
    var przycisk1 = document.getElementById("button1");
    var przycisk2 = document.getElementById("button2");
    if (sheClickedNo === false){
        ukrytaOpcja();
    }

    setTimeout(function() {
        audio.volume = 0.05;
        audio.play()
        obrazek.src = "images/happyCat.gif";
        napis.textContent = "Supi! Jesteśmy umówieni!";
        przycisk1.style.display = "none";
        przycisk2.style.display = "none";
        obrazek.style.opacity = 1;
        napis.style.opacity = 1;
        setInterval(generujSerduszko, 150);
    }, 1000); // Poczekaj 1 sekundę, aby animacja zaczęła się po zniknięciu elementów
}

function noButton(){
    var obrazek = document.getElementById("obrazek");
    var przycisk = document.getElementById("button2");
    var audio = document.getElementById("susSound");
    sheClickedNo = true;

    obrazek.style.opacity = 0;

    setTimeout(function() {
        audio.volume = 0.1;
        audio.play()
        obrazek.src = "images/susCat.jpg";
        obrazek.width = 238;
        obrazek.height = 212;
        przycisk.style.display = "none";
        obrazek.style.opacity = 1;
    }, 1000); // Poczekaj 1 sekundę, aby animacja zaczęła się po zniknięciu elementów
}

function generujSerduszko() {
    var serduszko = document.createElement("div");
    serduszko.innerHTML = "❤️";
    serduszko.className = "serduszko";
    serduszko.style.left = Math.random() * window.innerWidth + "px";
    serduszko.style.fontSize = Math.floor(Math.random() * 20 + 20) + "px";
    serduszko.style.animationDuration = (Math.random() * 2 + 2) + "s";
    document.body.appendChild(serduszko);

    // Usuwanie serduszka po zakończeniu animacji
    serduszko.addEventListener("animationend", function() {
        serduszko.parentNode.removeChild(serduszko);
    });

    function removeHeart() {
        if (serduszko.getBoundingClientRect().top >= 600) {
            serduszko.remove();
            clearInterval(checkInterval);
        }
    }
    const checkInterval = setInterval(removeHeart, 100);
}

function ukrytaOpcja() {
    var przycisk = document.getElementById("ukrytyPrzycisk");
    var obrazek = document.getElementById("ukrytyObrazek");

    przycisk.style.display = "block";
    obrazek.style.display = "block";

    przycisk.addEventListener('mouseover', function(){
        if(obrazek.style.display === "block") { obrazek.style.display = "none"; }
        if(przycisk.style.position === "relative") {
            przycisk.style.position = "absolute";
            przycisk.style.top = "400px";
            przycisk.style.left = "400px";
        } else {
            const i= Math.floor(Math.random()*600)-300 ;
            const j= Math.floor(Math.random()*600)-300 ;
            // Ustawianie nowej pozycji przycisku
            this.style.left = i + "px";
            this.style.top = j + "px";
        }

    });
}
