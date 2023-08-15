
function show() {

    document.getElementById("pay").style.display = "block";

    document.getElementById("selection").style.display = "block";

    const radio = document.querySelectorAll(".radio");

    const selection = document.querySelector("#selection");

    let choice;

    for (const dollar of radio) {
        if (dollar.checked) {
            choice = dollar.value;
            break;
        }
    }

    const para = document.createElement("p");
    para.classList.add("para");

    para.textContent = choice ? `Thank you so much for donating ${choice}!`: "Thank you for visiting our website!\nOur cats appreciate any donations or simply\na visit from you.";
    para.style = "font-size: 20px; text-align: center;";

    const thanks = document.createElement("p");
    thanks.classList.add("thanks");
    thanks.textContent = choice ? "Please submit your payment using the form below." : "Come visit us soon!";
    thanks.style = "font-size: 20px; text-align: center;";

    selection.appendChild(para);
    selection.appendChild(thanks);

}
