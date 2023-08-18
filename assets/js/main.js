
const tareasTODO = [
    {
        id: 1,
        descripcion: "Desarrollar desafio metodos de arreglos",
        done: false
    },
    {
        id: 2,
        descripcion: "Subir desafio a repositorio GitHub",
        done: false
    },
    {
        id: 3,
        descripcion: "Cargar desafio en plataforma desafio latam",
        done: false
    }
];
let ultimoID = 0; //Almacena el ultimo ID de las tareas
function cargarTareas() {
    let html = "";
    let done = 0;
    ultimoID = 0;
    tareasTODO.forEach(tarea => {
        // Uso interpolaciòn y templates para construir el html antes de actualizar el DOM 
        html += `<div class="item">
                    <div class="id-task">${tarea.id}</div>
                    <div class="task">${tarea.descripcion}</div>
                    <div class="action">
                        <img class="done-${tarea.done}" onclick="marcarTarea(${tarea.id})" src="./assets/images/icon-check.svg">
                        <img class="delete" onclick="borrarTarea(${tarea.id})" src="./assets/images/icon-cross.svg">
                    </div>
                </div>`;
        ultimoID = tarea.id;
        if (tarea.done) {
            done++;
        }
    });
    document.getElementById("total").innerHTML = "Total tareas: " + tareasTODO.length;
    document.getElementById("realizadas").innerHTML = "Realizadas: " + done;
    document.getElementById("list").innerHTML = html;

}
function marcarTarea(id) {
    tareasTODO.forEach(tarea => {
        if (tarea.id == id) {
            tarea.done = !tarea.done;
        }
    });
    cargarTareas();
}

function borrarTarea(id) {
    let indice = tareasTODO.findIndex(tarea => tarea.id == id);
    tareasTODO.splice(indice, 1);
    cargarTareas();
}
function agregarTarea() {
    let descripcion = document.getElementById("tarea").value;
    document.getElementById("tarea").value = "";
    if (descripcion == "") {
        alert("Debe ingresar una tarea");
        return;
    }
    tareasTODO.push({
        id: ultimoID + 1,
        descripcion: descripcion,
        done: false
    });
    cargarTareas();
}

cargarTareas();
document.getElementById("guardar").addEventListener("click", agregarTarea); //  Agrega el evento click al botón para guardar tarea