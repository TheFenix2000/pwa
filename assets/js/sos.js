document.getElementById("sosButton").addEventListener("click", () => {
    if ("vibrate" in navigator) {
        navigator.vibrate([200, 200, 200, 600, 600, 600, 200, 200, 200]);
        alert("SOS Aktywowane!");
    } else {
        alert("Twoje urządzenie nie obsługuje wibracji.");
    }
});
