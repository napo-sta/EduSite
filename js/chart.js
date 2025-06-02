// chart.js : affichage du graphique interactif
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('myChart')?.getContext('2d');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Données',
          data: [{ x: 1, y: 10.2 }, { x: 2, y: 11.1 }, { x: 3, y: 13.3 }, { x: 4, y: 15.0 }],
          backgroundColor: 'yellow'
        },
        {
          label: 'Régression linéaire',
          data: [{ x: 1, y: 10 }, { x: 4, y: 16 }],
          type: 'line',
          borderColor: 'red',
          fill: false,
          tension: 0
        }
      ]
    },
    options: {
      scales: {
        x: { title: { display: true, text: 'Temps (x)' } },
        y: { title: { display: true, text: 'Prix (y)' } }
      }
    }
  });
});
