
function show() {

    document.getElementById("pay").style.display = "block";

    const donate = document.querySelector("#donating");

    const radio = document.querySelectorAll(".radio");

    const selection = document.querySelector(".selection");

    let choice;

    for (const dollar of radio) {
        if (dollar.checked) {
            choice = dollar.value;
            break;
        }
    }

    const para = document.createElement("p");
    para.classList.add("para");

    para.textContent = `Thank you for donating ${choice}!`;
    para.style = "font-size: 20px; text-align: center;";

    const thanks = document.createElement("p");
    thanks.classList.add("thanks");
    thanks.textContent = "Please pay below.";
    thanks.style = "font-size: 20px; text-align: center;";

    selection.appendChild(para);
    selection.appendChild(thanks);

}
