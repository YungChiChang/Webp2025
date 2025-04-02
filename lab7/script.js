document.addEventListener("DOMContentLoaded", function () {
    let container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);
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
    function initializeContainer() {
        let container = document.getElementById("container");
        container.textContent = getRandomChars(0, 2);
    }
    window.addEventListener("keyup", function (e) {
        console.log(e.key);
        let container = document.getElementById("container");

        if (container.textContent.length > 0 && e.key === container.textContent[0]) {
            container.textContent = container.textContent.substring(1);
        }
        add_new_chars();
    });
    initializeContainer();
});