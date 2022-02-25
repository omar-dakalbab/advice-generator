async function getAdvice() {
    const resp = await fetch("https://api.adviceslip.com/advice");

    const data = await resp.json();

    console.log(data.slip);

    displayData(data.slip);


}

function displayData(data) {
    document.getElementById("displayAdvice").innerHTML = "“" + data.advice + "”";
    document.getElementById("advice_id").innerHTML = data.id;

}

window.onload(getAdvice());