function changeHeading() {
    let text = document.getElementById("newHeading").value;
    if (text) {
        document.getElementById("heading").textContent = text;
    }
}

function changeBackground() {
    const randomNum = Math.floor(Math.random() * 16777215);
    const hexColor = "#" + randomNum.toString(16).padStart(6, "0");
    document.body.style.backgroundColor = hexColor;
}

function increaseFont() {
    let para = document.getElementById("paragraph");
    let size = parseInt(window.getComputedStyle(para).fontSize);
    para.style.fontSize = (size + 2) + "px";
}

function toggleParagraph() {
    let para = document.getElementById("paragraph");
    para.style.display = (para.style.display === "none") ? "block" : "none";
}

function resetPage() {
    document.getElementById("heading").textContent = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "white";
    document.getElementById("paragraph").style.fontSize = "16px";
    document.getElementById("paragraph").style.display = "block";
    document.getElementById("newHeading").value = "";
}