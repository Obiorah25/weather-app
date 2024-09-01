document.getElementById("fetch-weather").addEventListener("click", async () => {
  const apiKey = "6cf8d21430348182350060132a4d2588"; // Replace with your actual API key
  const city = "badagry"; // You can make this dynamic based on user input
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch weather data");

    const weatherData = await response.json();

    // Extract and display relevant data
    document.getElementById(
      "location"
    ).textContent = `Location: ${weatherData.name}`;
    document.getElementById(
      "temperature"
    ).textContent = `Temperature: ${weatherData.main.temp}°C`;
    document.getElementById(
      "description"
    ).textContent = `Description: ${weatherData.weather[0].description}`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to retrieve weather information. Please try again later.");
  }
});
