  // Example API URL for fetching data
  const apiUrl = "travel_recommendation_api.json"; // Replace with your API URL
  

  // Fetch the local JSON file
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);  // Log the data to see its structure
      displayCards(data.countries); // Access the "countries" array from the data
    })
    .catch(error => {
      console.error('Error fetching the data:', error);
    });
  
  // Function to display the cards dynamically
  function displayCards(countries) {
    // Check if countries is an array
    if (!Array.isArray(countries)) {
      console.error("Data is not an array:", countries);
      return;
    }
  
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // Clear any existing content
  
    // Loop through each country and then each city within that country
    countries.forEach(country => {
      country.cities.forEach(city => {
        const card = document.createElement('div');
        card.classList.add('card', 'm-2');
        card.style.width = '18rem';
  
        card.innerHTML = `
          <img src="${city.imageUrl}" class="card-img-top" alt="${city.name}">
          <div class="card-body">
            <h5 class="card-title">${city.name}</h5>
            <p class="card-text">${city.description}</p>
          </div>
        `;
  
        // Append the card to the container
        container.appendChild(card);
      });
    });
  }
