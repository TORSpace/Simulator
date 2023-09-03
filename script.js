function berechne() {
    const maxspeed = parseFloat(document.getElementById("maxspeed").value);
    const oberflaeche = parseFloat(document.getElementById("oberflaeche").value);

    const maxq = 0.401 / 2 * maxspeed * maxspeed;
    const luftdruck = maxq / 100;
    const luftwiderstand = 0.5 * 0.401 * maxspeed * maxspeed * oberflaeche * 0.50;

    document.getElementById("luftdruck").textContent = luftdruck.toFixed(2);
    document.getElementById("luftwiderstand").textContent = luftwiderstand.toFixed(2);

    const anfangsgeschwindigkeit = 0;
    const endgeschwindigkeit = maxspeed;
    const beschleunigung = 122;

    const zeit = (endgeschwindigkeit - anfangsgeschwindigkeit) / beschleunigung;
    document.getElementById("zeit").textContent = zeit.toFixed(2);

    const ctx = document.getElementById("chart").getContext("2d");

    const geschwindigkeiten = Array.from({ length: maxspeed / 10 + 1 }, (_, i) => i * 10);
    const zeiten = geschwindigkeiten.map((v) => berechne_zeit(anfangsgeschwindigkeit, v, beschleunigung));

    const myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: geschwindigkeiten,
            datasets: [{
                label: "Zeit bis Max-Q (s)",
                data: zeiten,
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
                fill: false,
            }],
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Geschwindigkeit (km/h)",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Zeit bis Max-Q (s)",
                    },
                },
            },
        },
    });
}
// Füge diese Zeile am Anfang deiner script.js-Datei hinzu, um das Chart.js-Objekt zu erstellen.
const ctx = document.getElementById("chart").getContext("2d");

// Definiere die berechne_zeit-Funktion zuerst
function berechne_zeit(anfangsgeschwindigkeit, endgeschwindigkeit, beschleunigung) {
    const zeit = (endgeschwindigkeit - anfangsgeschwindigkeit) / beschleunigung;
    return zeit;
}

function berechne() {
    const maxspeed = parseFloat(document.getElementById("maxspeed").value);
    const oberflaeche = parseFloat(document.getElementById("oberflaeche").value);

    const maxq = 0.401 / 2 * maxspeed * maxspeed;
    const luftdruck = maxq / 100;
    const luftwiderstand = 0.5 * 0.401 * maxspeed * maxspeed * oberflaeche * 0.50;

    document.getElementById("luftdruck").textContent = luftdruck.toFixed(2);
    document.getElementById("luftwiderstand").textContent = luftwiderstand.toFixed(2);

    const anfangsgeschwindigkeit = 0;
    const endgeschwindigkeit = maxspeed;
    const beschleunigung = 122;

    const zeit = berechne_zeit(anfangsgeschwindigkeit, endgeschwindigkeit, beschleunigung);
    document.getElementById("zeit").textContent = zeit.toFixed(2);

    // Erstelle ein Array mit den Geschwindigkeiten von 0 bis maxspeed (Schritte von 10 km/h)
    const geschwindigkeiten = Array.from({ length: maxspeed / 10 + 1 }, (_, i) => i * 10);

    // Erstelle ein Array mit den Zeiten für jede Geschwindigkeit
    const zeiten = geschwindigkeiten.map((v) => berechne_zeit(0, v, beschleunigung));

    // Erstelle das Diagramm
    const myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: geschwindigkeiten,
            datasets: [{
                label: "Zeit bis Max-Q (s)",
                data: zeiten,
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
                fill: false,
            }],
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Geschwindigkeit (km/h)",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Time to Max-Q (s)",
                    },
                },
            },
        },
    });
}
