var slider = document.getElementById("servings");
var peopleCount = document.getElementById("peopleCount");



function updateValue(ev) {

    peopleCount.innerHTML = ev.target.value;
    var amountSpans = document.querySelectorAll("span.amount");
    amountSpans.forEach(element => {
        var amount = parseFloat(element.dataset.amount);
        element.innerHTML = Number.parseFloat(amount * ev.target.value).toFixed(1); //0.1 + 0.2 blir inte 0.3, fick googla för att fixa.
    });

}
slider.addEventListener('input', updateValue);








