document.addEventListener("DOMContentLoaded", () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const map = L.map("map").setView([lat, lon], 13);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
            L.marker([lat, lon]).addTo(map)
                .bindPopup("Twoja lokalizacja")
                .openPopup();
        }, () => {
            alert("Nie można uzyskać dostępu do lokalizacji.");
        });
    } else {
        alert("Geolokalizacja nie jest wspierana przez tę przeglądarkę.");
    }
});
