console.log("Welcome to the Community Portal");

window.onload = function() {
    console.log("Page fully loaded");
};

const portalName = "Central Event Portal";
const launchDate = "2024-01-01";
let activeUsers = 50;

activeUsers++;
console.log(`Portal ${portalName} launched on ${launchDate} with ${activeUsers} users`);

class PortalEvent {
    constructor(title, seats, category) {
        this.title = title;
        this.seats = seats;
        this.category = category;
    }
    checkAvailability() {
        return this.seats > 0;
    }
}

const eventsDB = [
    new PortalEvent("Tech Expo", 100, "tech"),
    new PortalEvent("Local Concert", 0, "music"),
    new PortalEvent("Code Jam", 50, "tech")
];

const availableTechEvents = eventsDB.filter(evt => evt.category === "tech" && evt.checkAvailability());
const eventTitles = availableTechEvents.map(evt => evt.title);

const container = document.querySelector("#eventListContainer");

function renderEvents(list) {
    container.innerHTML = "";
    list.forEach(evt => {
        const card = document.createElement("div");
        card.className = "eventCard";
        card.innerHTML = `<h3>${evt.title}</h3><p>Category: ${evt.category}</p><p>Seats: ${evt.seats}</p>`;
        container.appendChild(card);
    });
}

renderEvents(eventsDB);

document.getElementById("eventCategoryFilter").onchange = function() {
    const val = this.value;
    if (val === "all") {
        renderEvents(eventsDB);
    } else {
        renderEvents(eventsDB.filter(e => e.category === val));
    }
};

document.getElementById("regForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const name = this.elements["userName"].value;
    const email = this.elements["userEmail"].value;
    const output = document.getElementById("formOutput");

    if (!name || !email) {
        output.style.color = "red";
        output.innerText = "Please fill all fields.";
        return;
    }

    output.style.color = "black";
    output.innerText = "Sending...";

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({ name, email }),
            headers: { "Content-Type": "application/json" }
        });
        
        if (res.ok) {
            output.style.color = "green";
            output.innerText = "Registration successful!";
        }
    } catch (err) {
        output.style.color = "red";
        output.innerText = "Failed to submit.";
    }
});

document.getElementById("loadEventsBtn").onclick = function() {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "block";
    
    setTimeout(() => {
        const newEvt = new PortalEvent("Art Fair", 20, "art");
        eventsDB.push(newEvt);
        renderEvents(eventsDB);
        spinner.style.display = "none";
        
        $("#jqBox").css("visibility", "visible").hide().fadeIn(1000).delay(2000).fadeOut(1000);
    }, 1500);
};

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            pos => document.getElementById("locOutput").innerText = `Lat: ${pos.coords.latitude}, Lng: ${pos.coords.longitude}`,
            err => document.getElementById("locOutput").innerText = "Location access denied",
            { enableHighAccuracy: true, timeout: 5000 }
        );
    }
}

let savedPref = localStorage.getItem('pref');
if(savedPref) {
    const select = document.getElementById('prefEvent');
    if (select) select.value = savedPref;
}
