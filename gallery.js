let applets = [];

fetch('data.json')
.then(response => response.json())
.then(data => {
  applets = data;
  renderApplets(applets); 

