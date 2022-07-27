//to api
let inputText = document.getElementById("input-text");
let errorLink = document.getElementById("error-link");

//to display

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
            <p>
                ${url}
            </p>
        </div>
        <div class="linkShort">
            <p>
                ${data.result.full_short_link}
            </p>
            <button class="btn-copy">Copy</button>
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
        }
    }
});