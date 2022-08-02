const tareaInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const listaDeTareas = document.querySelector("#listaDeTareas")
const tbody = document.querySelector("tbody")
const cuenta = document.querySelector("#cuenta-tareas")
const cuentaRealizadas = document.querySelector("#realizadas")
const tareas = [
    { id: 1, nombre: "Salir de compras", completado: false },
    { id: 2, nombre: "Estudiar Desafío", completado: false },
    { id: 3, nombre: "Hacer desafío", completado: false },
]

renderTareas()

function renderTareas() {
    let html = ""
    for (let tarea of tareas) {
        html += `<tbody>
        <tr>    
    <td>${tarea.id}</td>
    <td>${tarea.nombre}</td>
    <td>${tarea.completado
                ? `<h4 style="color: green;" id="Pendiente">realizada</h4>`
                : `<h4 style="color: red;" id="Rendiente">pendiente</h4>`
            }
    </td>
    <td>
    <input type="checkbox" id="opt1" onclick="pintar(${tarea.id})">
    <button onclick="borrar(${tarea.id})"> Eliminar</button></td>
    </tr>
    </tbody>`;
    }
    const arr = tareas.filter((tarea) => tarea.completado == true);
    const conteo = arr.length;
    tbody.innerHTML = html;
    cuenta.innerHTML = "Total Tareas: " + tareas.length;
    cuentaRealizadas.innerHTML = "Total Realizadas: " + conteo;
}

btnAgregar.addEventListener("click", () => {
    if (tareaInput.value == "") {
        alert("Debe agregar un valor");
        return;
    }
    const nuevaTarea = tareaInput.value;
    const nuevaId = tareas.length;
    tareas.push({ id: nuevaId + 1, nombre: nuevaTarea, completado: false });
    tareaInput.value = "";
    cuenta.innerHTML = "Total Tareas: " + tareas.length;
    renderTareas();
})

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1);

    cuenta.innerHTML = "Total Tareas: " + tareas.length;

    renderTareas();
}

function pintar(id) {
    tareas.map((tarea) => {
        if (tarea.id == id) tarea.completado = !tarea.completado;
    });

    renderTareas();
}
// realizadas = []


// function agregarRealizadas(tarea) {
//     console.log(tarea)
//     let pendiente = document.querySelector(`#label-${tarea.id}`);
//     let tareaAgregada = document.querySelector(`#task-${tarea.id}`);
//     let check = document.querySelector(`#check-${tarea.id}`)
//     let cuentaRealizadas = document.querySelector("#cuenta-realizadas")
// if(check.checked == true){
//     pendiente.style.color = "green"
//     pendiente.innerHTML = "Realizada"
//     realizadas.push({ id: tarea.id, nombre: tarea.nombre, completado: true })
//     cuentaRealizadas.innerHTML = 'Total Realizadas: ' + realizadas.length
// }
// else {
//     pendiente.style.color = "red"
//     pendiente.innerHTML = "Pendiente"
//     borrar (realizadas.id, realizadas)
//     cuentaRealizadas.innerHTML = 'Total Realizadas: ' + realizadas.length

// }
// }