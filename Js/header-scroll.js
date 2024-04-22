let prevScrollpos = window.scrollY;

window.onload = function() {
    prevScrollpos = 0;
    handleScroll(); // Llama a la función para asegurarse de que el header esté correctamente posicionado al cargar la página
};

// Función para manejar el evento scroll
window.onscroll = function () {
    handleScroll(); // Llama a la función para mostrar/ocultar el header al hacer scroll
};

function handleScroll() {
    let currentScrollPos = window.scrollY;
    console.log("prevScrollpos:", prevScrollpos);
    console.log("currentScrollPos:", currentScrollPos);
    if (prevScrollpos > currentScrollPos || currentScrollPos===0) {
      document.querySelector("header").style.top = "0px";
    } else {
      document.querySelector("header").style.top = "-250px";
    }
    prevScrollpos = currentScrollPos;
};



// let prevScrollpos = window.scrollY;

// if (window.innerWidth >= 1024) {
//   window.onscroll = function () {
//     let currentScrollPos = window.scrollY;
//     let header = document.querySelector("header");

//     if (prevScrollpos > currentScrollPos) {
//       header.classList.remove("hidden");
//     } else {
//       header.classList.add("hidden");
//     }
//     prevScrollpos = currentScrollPos;
//   };
// }