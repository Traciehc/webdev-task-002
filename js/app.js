document.addEventListener("DOMContentLoaded", () => {
    // Select the button element
    const myButton = document.getElementById("myButton");
  
    // Add a click event listener to the button
    myButton.addEventListener("click", () => {
      // Get the selected value from the dropdown menu
      const dropdownMenu = document.getElementById("dropdownMenu");
      const selectedValue = dropdownMenu.value;
  
      // Display the selected value in the alert
      alert(`You selected: ${selectedValue}`);
    });
  
    // Select the dropdown menu
    const dropdownMenu = document.getElementById("dropdownMenu");
  
    // Add a change event listener to the dropdown menu
    dropdownMenu.addEventListener("change", (event) => {
      const selectedValue = event.target.value;
      alert(`You selected: ${selectedValue}`);
    });
  
    // Fun Fact Button
    const funFactButton = document.getElementById("funFactButton");
    const funFactDisplay = document.getElementById("funFactDisplay");
  
    const funFacts = [
      "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
      "A group of flamingos is called a 'flamboyance'.",
      "Bananas are berries, but strawberries aren't.",
      "There are more stars in the universe than grains of sand on all the Earth's beaches.",
      "Octopuses have three hearts and blue blood."
    ];
  
    funFactButton.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * funFacts.length);
      funFactDisplay.textContent = funFacts[randomIndex];
    });
  
    // Quote Button
    const quoteButton = document.getElementById("quoteButton");
    const quoteDisplay = document.getElementById("quoteDisplay");
  
    const quotes = [
      "The best way to predict the future is to create it.",
      "You miss 100% of the shots you don’t take.",
      "Success is not the key to happiness. Happiness is the key to success.",
      "Believe you can and you're halfway there.",
      "The only limit to our realization of tomorrow is our doubts of today."
    ];
  
    quoteButton.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteDisplay.textContent = quotes[randomIndex];
    });
  
    // Weather Display
    const weatherDisplay = document.getElementById("weatherDisplay");
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const city = 'London'; // Replace with the desired city
    const geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  
    fetch(geoApiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          getWeather(lat, lon);
        } else {
          weatherDisplay.textContent = 'City not found';
        }
      })
      .catch(error => {
        weatherDisplay.textContent = 'Unable to fetch coordinates';
        console.error('Error fetching coordinates:', error);
      });
  
    const getWeather = (lat, lon) => {
      const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
      fetch(weatherApiUrl)
        .then(response => response.json())
        .then(data => {
          const temperature = data.main.temp;
          const weatherDescription = data.weather[0].description;
          weatherDisplay.textContent = `Weather in ${city}: ${temperature}°C, ${weatherDescription}`;
        })
        .catch(error => {
          weatherDisplay.textContent = 'Unable to fetch weather data';
          console.error('Error fetching weather data:', error);
        });
    };
  
    // Countdown Timer
    const countdownDisplay = document.getElementById("countdownDisplay");
    const targetDate = new Date("December 31, 2024 23:59:59").getTime();
  
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
      if (distance < 0) {
        clearInterval(countdownInterval);
        countdownDisplay.textContent = "EXPIRED";
      }
    };
  
    const countdownInterval = setInterval(updateCountdown, 1000);
  });
  