document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".icon-menu");
  const closeButton = document.querySelector(".icon-menu-close");
  const screenMenu = document.querySelector(".screen-menu");
  const btnExp = document.getElementById("btnExp");
  const btnProjects = document.getElementById("btnProjects");

  menuButton.addEventListener("click", () => {
    screenMenu.classList.add("disabled");
    screenMenu.classList.add("visible");
    closeButton.classList.remove("disabled");
  });

  closeButton.addEventListener("click", () => {
    screenMenu.classList.remove("disabled");
    screenMenu.classList.remove("visible");
    screenMenu.classList.add("hidden");
    closeButton.classList.add("disabled");
  });

  btnExp.addEventListener("click", () => {
    screenMenu.classList.remove("disabled");
    screenMenu.classList.remove("visible");
    screenMenu.classList.add("hidden");
    closeButton.classList.add("disabled");
  });

  btnProjects.addEventListener("click", () => {
    screenMenu.classList.remove("disabled");
    screenMenu.classList.remove("visible");
    screenMenu.classList.add("hidden");
    closeButton.classList.add("disabled");
  });

  // Obtén todos los elementos <li>
  const items = document.querySelectorAll("ul > li");

  // Función para agregar el desenfoque a los demás elementos
  function aplicarDesenfoque(event) {
    items.forEach((item) => {
      if (item !== event.target) {
        item.style.filter = "blur(4px)"; // Aplica desenfoque
      }
    });
  }

  // Función para quitar el desenfoque
  function quitarDesenfoque() {
    items.forEach((item) => {
      item.style.filter = "blur(0)"; // Elimina el desenfoque
    });
  }

  // Añadir evento de hover a cada <li>
  items.forEach((item) => {
    item.addEventListener("mouseenter", aplicarDesenfoque);
    item.addEventListener("mouseleave", quitarDesenfoque);
  });
});
