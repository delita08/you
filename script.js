/* =========================================
   A LITTLE SURPRISE
   FUTSAL × LIGHT × ALPA
========================================= */


/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const target = document.getElementById(pageId);

    if (target) {
        target.classList.add("active");
    }
}


/* =========================================
   PAGE 1
   WELCOME
========================================= */

const startYes = document.getElementById("start-yes");
const startNo = document.getElementById("start-no");


if (startYes) {

    startYes.addEventListener("click", function() {

        showPage("password-page");

    });

}


if (startNo) {

    startNo.addEventListener("click", function() {

        showPage("password-page");

    });

}


/* =========================================
   PASSWORD
========================================= */

/*
   GANTI PASSWORD DI SINI
*/

const SECRET_PASSWORD = "alpa";


const passwordInput =
    document.getElementById("password-input");

const unlockButton =
    document.getElementById("unlock-btn");

const wrongOverlay =
    document.getElementById("wrong-overlay");

const tryAgainButton =
    document.getElementById("try-again-btn");

const passwordHint =
    document.getElementById("password-hint");


function checkPassword() {

    if (!passwordInput) return;

    const enteredPassword =
        passwordInput.value.trim().toLowerCase();


    if (enteredPassword === SECRET_PASSWORD) {

        if (wrongOverlay) {
            wrongOverlay.classList.remove("active");
        }

        createFlowerExplosion();

        setTimeout(function() {

            showPage("flowers-page");

        }, 2800);


    } else {

        if (wrongOverlay) {
            wrongOverlay.classList.add("active");
        }

    }

}


if (unlockButton) {

    unlockButton.addEventListener(
        "click",
        checkPassword
    );

}


if (passwordInput) {

    passwordInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {
                checkPassword();
            }

        }
    );

}


if (tryAgainButton) {

    tryAgainButton.addEventListener(
        "click",
        function() {

            if (wrongOverlay) {
                wrongOverlay.classList.remove("active");
            }

            if (passwordInput) {
                passwordInput.value = "";
                passwordInput.focus();
            }

        }
    );

}


/* =========================================
   PASSWORD SUCCESS
   FLOWER BOOM
========================================= */

function createFlowerExplosion() {

    const container =
        document.getElementById("flower-explosion");

    if (!container) return;


    container.innerHTML = "";

    container.classList.add("active");


    const flowers = [
        "🌸",
        "🌷",
        "🌹",
        "🌺",
        "🌼",
        "💐",
        "🌻"
    ];


    for (let i = 0; i < 45; i++) {

        const flower =
            document.createElement("span");

        flower.className =
            "explosion-flower";


        flower.textContent =
            flowers[
                Math.floor(
                    Math.random() * flowers.length
                )
            ];


        flower.style.left =
            Math.random() * 100 + "%";


        flower.style.top =
            Math.random() * 100 + "%";


        flower.style.fontSize =
            (18 + Math.random() * 35) + "px";


        flower.style.animationDelay =
            Math.random() * 0.8 + "s";


        flower.style.setProperty(
            "--move-x",
            (Math.random() * 300 - 150) + "px"
        );


        flower.style.setProperty(
            "--move-y",
            (Math.random() * 300 - 150) + "px"
        );


        container.appendChild(flower);

    }


    setTimeout(function() {

        container.classList.remove("active");

        container.innerHTML = "";

    }, 3000);

}


/* =========================================
   PAGE 3
   LETTER
========================================= */

const letterButton =
    document.getElementById("letter-btn");


if (letterButton) {

    letterButton.addEventListener(
        "click",
        function() {

            showPage("letter-page");

        }
    );

}


/* =========================================
   PAGE 4
   QUESTION
========================================= */

const questionButton =
    document.getElementById("question-btn");


if (questionButton) {

    questionButton.addEventListener(
        "click",
        function() {

            showPage("question-page");

        }
    );

}


/* =========================================
   PAGE 5
   NO BUTTON
========================================= */

const noButton =
    document.getElementById("no-final");


let noMoveCount = 0;


if (noButton) {

    noButton.addEventListener(
        "mouseenter",
        moveNoButton
    );


    noButton.addEventListener(
        "touchstart",
        function(event) {

            event.preventDefault();

            moveNoButton();

        }
    );


    noButton.addEventListener(
        "click",
        function() {

            moveNoButton();

        }
    );

}


function moveNoButton() {

    if (!noButton) return;


    noMoveCount++;


    const maxX =
        Math.min(
            window.innerWidth * 0.35,
            180
        );


    const maxY =
        Math.min(
            window.innerHeight * 0.25,
            140
        );


    const randomX =
        (Math.random() * 2 - 1) * maxX;


    const randomY =
        (Math.random() * 2 - 1) * maxY;


    noButton.style.transform =
        `translate(${randomX}px, ${randomY}px)`;


    /*
       Setelah beberapa kali dikejar,
       kasih sedikit pesan.
    */

    if (noMoveCount === 5) {

        showNoMessage(
            "hmm... still trying? 😭"
        );

    }


    if (noMoveCount === 10) {

        showNoMessage(
            "you really don't give up huh? 😭"
        );

    }

}


function showNoMessage(text) {

    const message =
        document.createElement("div");

    message.className =
        "no-message";

    message.textContent =
        text;


    document.body.appendChild(message);


    setTimeout(function() {

        message.classList.add("show");

    }, 20);


    setTimeout(function() {

        message.classList.remove("show");

        setTimeout(function() {

            message.remove();

        }, 400);

    }, 1800);

}


/* =========================================
   PAGE 5
   YES
========================================= */

const yesButton =
    document.getElementById("yes-final");


if (yesButton) {

    yesButton.addEventListener(
        "click",
        function() {

            showPage("ending-page");

            createHeartRain();

        }
    );

}


/* =========================================
   YES ENDING
   HEART RAIN
========================================= */

function createHeartRain() {

    const container =
        document.getElementById("heart-container");

    if (!container) return;


    container.innerHTML = "";

    container.classList.add("active");


    const hearts = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💘",
        "💞",
        "♡",
        "♥"
    ];


    for (let i = 0; i < 70; i++) {

        const heart =
            document.createElement("span");

        heart.className =
            "falling-heart";


        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            (18 + Math.random() * 30) + "px";


        heart.style.animationDuration =
            (2.5 + Math.random() * 3) + "s";


        heart.style.animationDelay =
            Math.random() * 2 + "s";


        container.appendChild(heart);

    }


    setTimeout(function() {

        container.classList.remove("active");

    }, 7000);

}


/* =========================================
   PREVENT NO BUTTON FROM GOING OFF SCREEN
   WHEN WINDOW RESIZES
========================================= */

window.addEventListener(
    "resize",
    function() {

        if (noButton) {

            noButton.style.transform =
                "translate(0, 0)";

        }

    }
);


/* =========================================
   START
========================================= */

console.log(
    "A Little Surprise is ready. 💡⚽"
);