// main.js : gestion de la navigation
function showSection(id) {
  document.querySelectorAll("main section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}
