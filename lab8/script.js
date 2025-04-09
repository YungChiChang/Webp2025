document.addEventListener("DOMContentLoaded", function () {
    let container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);

    let wrongCount = 0;

    function getRandomChars(min, max) {
        let length = Math.floor(Math.random() * (max - min + 1)) + min;
        let chars = "";
        for (let i = 0; i < length; i++) {
            chars += String.fromCharCode(97 + Math.floor(Math.random() * 26));
        }
        return chars;
    }

    function add_new_chars() {
        let container = document.getElementById("container");
        container.textContent += getRandomChars(1, 3);
    }

    function add_extra_chars(count) {
        let container = document.getElementById("container");
        for (let i = 0; i < count; i++) {
            container.textContent += getRandomChars(1, 3);
        }
    }

    function initializeContainer() {
        let container = document.getElementById("container");
        container.textContent = getRandomChars(0, 2);
    }

    window.addEventListener("keyup", function (e) {
        let container = document.getElementById("container");
        let firstChar = container.textContent[0];

        if (container.textContent.length > 0 && e.key === firstChar) {
            container.textContent = container.textContent.substring(1);
            add_new_chars();
            wrongCount = 0;
        } else {
            wrongCount++;
            add_new_chars();
            if (wrongCount >= 3) {
                add_extra_chars(6);
                wrongCount = 0;
            }
        }
    });

    initializeContainer();
});