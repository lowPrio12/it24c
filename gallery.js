let applets = [];

// Fetch the JSON data and render the cards
fetch('gallery.json')
  .then(response => response.json())
  .then(data => {
    applets = data; // Store the applets in a global variable
    renderApplets(applets); // Render all applets initially
  })
  .catch(error => console.error('Error fetching JSON:', error));

// Function to render applets
function renderApplets(applets) {
  const appletContainer = document.getElementById('appletContainer');
  appletContainer.innerHTML = ''; // Clear existing content

  applets.forEach(applet => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = applet.imageUrl;
    img.classList.add('card-img-top');
    img.height = 180;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = applet.title;

    const text = document.createElement('p');
    text.classList.add('card-text');
    text.textContent = applet.description;

    const button = document.createElement('a');
    button.classList.add('btn', 'btn-primary');
    button.href = applet.link;
    button.textContent = 'Go to Applet';

    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(button);
    card.appendChild(img);
    card.appendChild(cardBody);
    appletContainer.appendChild(card);
  });
}

// Search function
document.getElementById('searchButton').addEventListener('click', function () {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filteredApplets = applets.filter(applet =>
    applet.title.toLowerCase().includes(searchInput)
  );
  renderApplets(filteredApplets);
});

// Optional: Clear search results when input is cleared
document.getElementById('searchInput').addEventListener('input', function () {
  if (!this.value) {
    renderApplets(applets); // Render all applets if search input is cleared
  }
});
