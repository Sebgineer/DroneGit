const drone = document.getElementById('drone');
const droneText = document.getElementById('dronetext');
let droneCount = 0;
let timeout;

const text = ["Ingen damer her", "Der er ingen damer!", "Stadig Ingen Damer!", "NUUUUL DAMER"]

addEventListener('load', (event) => {
    drone.addEventListener('click', (event) => {
        droneCount++;
        switch (droneCount) {
            case 0:
            case 1:
            case 2:
                droneText.innerText = text[0];
                break;
            case 3:
            case 4:
            case 5:
                droneText.innerText = text[1];
                break;
            case 6:
            case 7:
                droneText.innerText = text[2];
                break;
            case 8:
            case 9:
                droneText.innerText = text[3];
                break;
            case 10:
                window.location.replace("https://www.wikihow.com/Attract-Women")
                break;
        }

        timeout = setTimeout(() => {
            droneText.innerHTML = "";
        }, 5000);
    });
});