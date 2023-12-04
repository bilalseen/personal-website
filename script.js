const toggleLight = () => {
  const spotlight = document.getElementById("spotlight");
  const elements = ["job-title", "introduce-title"];

  spotlight.classList.toggle("spotlight");
  spotlight.classList.toggle("spotlight-disable");

  elements.forEach((element) => {
    const el = document.getElementById(element);
    el.classList.toggle("introduction-title-spotlight-active");
    el.classList.toggle("introduction-title");
  });
};

const toggleMenu = () => {
  const menuIcon = document.getElementById("menu-icon");
  const lightIcon = document.querySelector(".ri-lightbulb-line");

  const isOpen = menuIcon.classList.contains("menu-icon-open");

  menuIcon.classList.toggle("menu-icon-open", !isOpen);
  menuIcon.classList.toggle("menu-icon", isOpen);
  lightIcon.style.display = isOpen ? "none" : "flex";
};
