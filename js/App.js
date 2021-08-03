import { Mind } from "./Mind.js";
import { UI } from "./UI.js";

document
  .getElementById("mind-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // obtener los valores
    const email = document.getElementById("email").value,
      title = document.getElementById("title").value,
      dni = document.getElementById("dni").value,
      date = document.getElementById("date").value,
      description = document.getElementById("description").value;

    // Crear el objeto mind
    const mind = new Mind(email, title,dni, date, description);

    // Crear la interfaz
    const ui = new UI();

    // validar los campos
    var texto = email;
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (email === "") {
      ui.showMessage("Ingrese el email", "danger");
    }
    else if (!regex.test(texto)) {
        ui.showMessage("el email no es valido", "danger");
    }
    else if(title === "") {
    ui.showMessage("Ingrese el titulo", "danger");
    }
    else if(dni === "") {
      ui.showMessage("Ingrese el dni", "danger");
    }
    else if(dni != "" && dni.length != 8){
      ui.showMessage("El dni debe tener 8 dígitos", "danger");
    }
    else if(date === "") {
      ui.showMessage("Ingrese la fecha", "danger");
    }
    else if(description === "") {
      ui.showMessage("Ingrese una descripción", "danger");
    }
    else{
      // Guardar pensamiento
      ui.addMind(mind);
      ui.showMessage("Pensamiento agregado correctamente", "success");
      ui.resetForm();
      
    }

  });

document.getElementById("mind-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteMind(e.target);
  e.preventDefault();
});
