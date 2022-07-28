//to api
let inputText = document.getElementById("input-text");
let errorLink = document.getElementById("error-link");

//to display
let padding = '160'; //160px
let numDina = 0;

async function fetchApi() {
    let url = inputText.value;
    let response = await fetch("https://api.shrtco.de/v2/shorten?url=" + url);
    let data = await response.json();
    console.log(data.result.full_short_link);

    function NewDiv() {
        let divForm = document.getElementById("div-middle-form");
        let newDiv = document.createElement("div");
        newDiv.classList.add('newLinkShorten');
        newDiv.innerHTML = 
        `<div class="linkTo">
            <p id="oldLink">
                ${url}
            </p>
        </div>
        <div class="linkShort">
            <p id="shorten">
                ${data.result.full_short_link}
            </p>
            <button id="btn-copy" class="btn-copy">Copy</button>
        </div>`;
        divForm.appendChild(newDiv);
    }
    NewDiv();
}

//event listener
document.addEventListener('click', (e) => {
    if (e.target.id == "input-btn") {
        if (inputText.value == "") {
            errorLink.style.opacity = "1";
        } else {
            fetchApi();
            numDina += 60;
            padding = Number(padding) + numDina;
            document.getElementById('h2-advanced').style.paddingTop = padding + 'px';
        }
    }
    if (e.target.matches('.btn-copy')) {
        let shorten = document.getElementById("shorten").innerText;
        navigator.clipboard.writeText(shorten);
        document.getElementById('btn-copy').innerText = "Copied!";
        document.getElementById('btn-copy').style.backgroundColor = "hsl(257, 27%, 26%)";
    }
});