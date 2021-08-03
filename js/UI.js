// UI Constructor
export class UI {
  // Agergar nuevo pensamiento
  addMind(mind) {
    const mindList = document.getElementById("mind-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Email</strong>: ${mind.email} <br>
                    <strong>Título</strong>: ${mind.title} <br>
                    <strong>DNI</strong>: ${mind.dni} <br>
                    <strong>Fecha</strong>: ${mind.date} <br>
                    <strong>Descripción</strong>: ${mind.description} <br><br>
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        `;
    mindList.appendChild(element);
  }

  resetForm() {
    document.getElementById("mind-form").reset();
  }

  deleteMind(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Pensamiento eliminado correctamente", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Smostrar en DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // agregar mensaje en UI
    container.insertBefore(div, app);

    // eliminar mensaje
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
