const enterpriseBtn = document.getElementById("enterpriseBtn");
const enterpriseSection = document.getElementById("enterprise");

if (enterpriseBtn && enterpriseSection) {
  enterpriseBtn.addEventListener("click", () => {
    enterpriseSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

const heroImage = document.getElementById("heroImage");

if (heroImage instanceof HTMLImageElement) {
  heroImage.addEventListener("error", () => {
    heroImage.src = "/openCosmo_logo.png";
    heroImage.style.objectFit = "contain";
    heroImage.style.padding = "8%";
  });
}

const enterpriseForm = document.getElementById("enterpriseForm");
const enterpriseThanks = document.getElementById("enterpriseThanks");

if (enterpriseForm instanceof HTMLFormElement && enterpriseThanks instanceof HTMLElement) {
  enterpriseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    enterpriseForm.hidden = true;
    enterpriseThanks.hidden = false;
  });
}
