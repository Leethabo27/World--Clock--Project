// List of time zones for each city
const timeZones = {
  current: Intl.DateTimeFormat().resolvedOptions().timeZone,
  losangeles: "America/Los_Angeles",
  paris: "Europe/Paris",
  tokyo: "Asia/Tokyo",
  sydney: "Australia/Sydney",
};

// Function to update times dynamically for all cities
function updateTime() {
  Object.keys(timeZones).forEach((city) => {
    const timeZone = timeZones[city];
    const now = new Date();

    // Get the time and date for each city in its proper time zone
    const timeFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone,
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    // Format the time and date
    const time = timeFormatter.format(now);
    const date = dateFormatter.format(now);

    // Update the DOM elements with the live time and date
    const timeElement = document.getElementById(`${city}-time`);
    const dateElement = document.getElementById(`${city}-date`);

    if (timeElement && dateElement) {
      timeElement.textContent = time;
      dateElement.textContent = date;
    }
  });
}

// Function to toggle visibility of city clocks based on dropdown selection
function updateSelectedLocation() {
  const selectedValue = document.getElementById("location-select").value;

  document.querySelectorAll(".city").forEach((city) => {
    if (selectedValue === "all") {
      city.style.display = "block";
    } else {
      city.style.display = city.id.includes(selectedValue) ? "block" : "none";
    }
  });
}

// Initialize the live clock and update it every second
setInterval(updateTime, 1000);
updateTime();




