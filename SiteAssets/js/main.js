const toggle = () => {
  const menu = document.getElementById("menu");
  menu.className === "menu"
    ? menu.classList.add("responsive")
    : (menu.className = "menu");
};
