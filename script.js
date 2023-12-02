const toggleLight = () => {
  const spotlight = document.getElementById("spotlight");

  if (spotlight.classList == "spotlight") {
    spotlight.classList.remove("spotlight");
    spotlight.classList.add("spotlight-disable");
  } else {
    spotlight.classList.remove("spotlight-disable");
    spotlight.classList.add("spotlight");
  }
};

const toggleMenu = () => {
  const menuIcon = document.getElementById("menu-icon");
  const lightIcon = document.querySelector(".ri-lightbulb-line");

  if (menuIcon.classList == "menu-icon") {
    menuIcon.classList.remove("menu-icon");
    menuIcon.classList.add("menu-icon-open");
    lightIcon.style.display = "flex";
  } else {
    menuIcon.classList.remove("menu-icon-open");
    menuIcon.classList.add("menu-icon");
    lightIcon.style.display = "none";
  }
};
