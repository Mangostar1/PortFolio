let inputText = document.getElementById("input-text");
let inputBtn = document.getElementById("input-btn");

document.addEventListener('click', (e) => {
    if (e.target.id == "input-btn") {
        console.log(inputText.value);
    }
});