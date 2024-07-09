const parent = document.querySelector(".root");

const inputDiv = document.createElement("div");
const inputTag = document.createElement("input");
const btn = document.createElement("button");
const resDiv = document.createElement("div");
const yearDiv = document.createElement("div");
const monthDiv = document.createElement("div");
const dayDiv = document.createElement("div");

const btnClear = document.createElement("button");

inputDiv.setAttribute("class", "input-div");
inputTag.setAttribute("class", "input-tag");
btn.setAttribute("class", "btn");
resDiv.setAttribute("class", "result-div");
yearDiv.setAttribute("class", "res-div-display");
monthDiv.setAttribute("class", "res-div-display");
dayDiv.setAttribute("class", "res-div-display");
btnClear.setAttribute("class", "clear-btn");
inputDiv.appendChild(inputTag);
inputDiv.appendChild(btn);

const yearSpan = document.createElement("span");
const monthSpan = document.createElement("span");
const daySpan = document.createElement("span");
yearSpan.setAttribute("id", "year-span");
monthSpan.setAttribute("id", "month-span");
daySpan.setAttribute("id", "day-span");

yearSpan.textContent = "-";
monthSpan.textContent = "-";
daySpan.textContent = "-";
btnClear.textContent = "Clear";

const yearPara = document.createElement("p");
const monthPara = document.createElement("p");
const dayPara = document.createElement("p");

yearPara.setAttribute("class", "para");
monthPara.setAttribute("class", "para");
dayPara.setAttribute("class", "para");

yearPara.textContent = "years";
monthPara.textContent = "months";
dayPara.textContent = "days";

yearDiv.appendChild(yearSpan);
yearDiv.appendChild(yearPara);
monthDiv.appendChild(monthSpan);
monthDiv.appendChild(monthPara);
dayDiv.appendChild(daySpan);
dayDiv.appendChild(dayPara);

resDiv.appendChild(yearDiv);
resDiv.appendChild(monthDiv);
resDiv.appendChild(dayDiv);

inputTag.type = "date";
btn.textContent = "Calculate";

parent.appendChild(inputDiv);
parent.appendChild(resDiv);
parent.appendChild(btnClear);

btn.addEventListener("click", function () {
    let today = new Date();
    const c = today.toLocaleDateString("en-us", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
    const date = inputTag.value;
    const [year, month, day] = date.split("-");

    const format = new Date(year, month - 1, day);

    let years = today.getFullYear() - format.getFullYear();
    const moonth = today.getMonth() - format.getMonth();
    if (moonth < 0 || (moonth === 0 && today.getDate() < format.getDate())) {
        years--;
    }

    let months = moonth;
    if (today.getDate() < format.getDate()) {
        months--;
    }
    if (months < 0) {
        months += 12;
    }
    let days = today.getDate() - format.getDate();
    if (days < 0) {
        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    yearSpan.textContent = years;
    monthSpan.textContent = months;
    daySpan.textContent = days;
});

btnClear.addEventListener("click", function () {
    yearSpan.textContent = "-";
    monthSpan.textContent = "-";
    daySpan.textContent = "-";
    inputTag.value = "";
});
