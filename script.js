// JS minimal : changer le fond + fun facts
const bgBtn = document.getElementById('bgBtn');
const factBtn = document.getElementById('factBtn');
const factBox = document.getElementById('factBox');

if (bgBtn) {
  const colors = ['#0d121a', '#101722', '#142033', '#11141b', '#1a1f2b'];
  bgBtn.addEventListener('click', () => {
    document.documentElement.style.setProperty('--bg', colors[Math.floor(Math.random()*colors.length)]);
  });
}

if (factBtn && factBox) {
  const facts = [
    "Le chapeau de paille de Luffy appartenait à Shanks.",
    "Zoro manie trois sabres : Santoryu.",
    "Nami rêve de cartographier le monde entier.",
    "Sanji ne frappe jamais une femme — code d’honneur.",
    "Le Thousand Sunny a été construit par Franky."
  ];
  factBtn.addEventListener('click', () => {
    factBox.textContent = facts[Math.floor(Math.random()*facts.length)];
  });
}
