<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>World Clocks</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>World Clocks</h1>
      <a href="https://github.com/your-repo-link" class="github-link"
        >GitHub Repository</a
      >
    </header>

    <main>
      <div class="location-selector">
        <select id="location-select" onchange="updateSelectedLocation()">
          <option value="all" selected>All Locations</option>
          <option value="current">Your Current Location</option>
          <option value="losangeles">Los Angeles, US</option>
          <option value="paris">Paris, FR</option>
          <option value="tokyo">Tokyo, JP</option>
          <option value="sydney">Sydney, AU</option>
        </select>
      </div>

      <section class="time-display">
        <div class="city" id="current-location">
          <h2>Your Current Location</h2>
          <p class="time" id="current-time">Loading...</p>
          <p class="date" id="current-date">Loading...</p>
        </div>

        <div class="city" id="losangeles">
          <h2>Los Angeles, US</h2>
          <p class="time" id="losangeles-time">Loading...</p>
          <p class="date" id="losangeles-date">Loading...</p>
        </div>

        <div class="city" id="paris">
          <h2>Paris, FR</h2>
          <p class="time" id="paris-time">Loading...</p>
          <p class="date" id="paris-date">Loading...</p>
        </div>

        <div class="city" id="tokyo">
          <h2>Tokyo, JP</h2>
          <p class="time" id="tokyo-time">Loading...</p>
          <p class="date" id="tokyo-date">Loading...</p>
        </div>

        <div class="city" id="sydney">
          <h2>Sydney, AU</h2>
          <p class="time" id="sydney-time">Loading...</p>
          <p class="date" id="sydney-date">Loading...</p>
        </div>
        <div>
          <a
            href="https://leethabo27.github.io/World--Clock--Project/"
            class="homepage-link"
            target="_blank"
            >Back to Homepage</a
          >
        </div>
      </section>
    </main>
    <div>
      <footer>
        <p>
          This project was coded with ❤️ by
          <a href="https://github.com/leethabo27" target="_blank"
            >Lethabo Semenya</a
          >
          and is open-sourced on
          <a
            href="https://leethabo27.github.io/World--Clock--Project/"
            target="_blank"
          >
            GitHub </a
          >.
        </p>
      </footer>
    </div>
    <script src="script.js"></script>
  </body>
</html>
