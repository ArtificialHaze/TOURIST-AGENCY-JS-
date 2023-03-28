window.addEventListener("scroll", () => {
  const header = document.querySelector(".nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", () => {
  const flaotBtn = document.querySelector(".float-btn");
  flaotBtn.classList.toggle("visible", window.scrollY > 700);
});

const showAllDestinations = () => {
  const destinationContainer = document.querySelector(".destination-container");
  const destinationBtn = document.querySelector(".destination-button");
  destinationContainer.classList.toggle("show");
  destinationBtn.classList.toggle("active");
};

const showAllPackages = () => {
  const packageContainer = document.querySelector(".package-container");
  const packageBtn = document.querySelector(".package-button");
  packageContainer.classList.toggle("show");
  packageBtn.classList.toggle("active");
};

document.querySelectorAll(".gallery-container img").forEach((image) => {
  image.addEventListener("click", () => {
    document.querySelector(".gallery-popup").style.display = "flex";
    document.querySelector(".gallery-popup .popup-item img").src =
      image.getAttribute("src");
  });
});

document.querySelector(".gallery-popup i").addEventListener("click", () => {
  document.querySelector(".gallery-popup").style.display = "none";
});

(() => {
  const merchandiseFilter = document.querySelector(".merchandise-tab");
  const merchandiseItem = document.querySelectorAll(".merchandise-item");

  merchandiseFilter.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("tab-item") &&
      !e.target.classList.contains("active")
    ) {
      merchandiseFilter.querySelector(".active").classList.remove("active");

      e.target.classList.add("active");

      const targetElement = e.target.getAttribute("data-target");
      merchandiseItem.forEach((item) => {
        if (
          targetElement === item.getAttribute("data-category") ||
          targetElement === "all"
        ) {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.add("hide");
          item.classList.remove("show");
        }
      });
    }
  });
})();

const toggleMenu = () => {
  const menuToggleBtn = document.querySelector(".mobileMenuToggle");
  const navItem = document.querySelector(".nav-item");
  menuToggleBtn.classList.toggle("active");
  navItem.classList.toggle("active");
};
