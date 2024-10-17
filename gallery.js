let applets = [];

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        applets = data;
        renderApplets(applets); 
  .catch (error => console.error('Error fetching JSON:', error));

function renderApplets(applets) {
    const appletContainer = document.getElementById('appletContainer');
    appletContainer.innerHTML = ''; // Clear existing content

