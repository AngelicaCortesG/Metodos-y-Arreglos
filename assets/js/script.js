const tareaInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const listaDeTareas = document.querySelector("#listaDeTareas")
const tbody = document.querySelector("tbody")
const cuenta = document.querySelector("#cuenta-tareas")

const tareas = [
    { id: 1, nombre: "Salir de compras", completado: false },
    { id: 2, nombre: "Estudiar Desafío", completado: false },
    { id: 3, nombre: "Hacer desafío", completado: false },
]
// const indiceTareas = tareas.findIndex( tarea => tarea.completado === false)
// tareas.splice(indiceTareas, 0, completado: true)

renderTareas()
cuenta.innerHTML = 'Total Tareas: ' + tareas.length

function renderTareas() {
    let html =""
    // tbody.innerHTML = ""
    for (let tarea of tareas) {
        html += `<tbody>
        <tr>    
    <td>${tarea.id}</td>
    <td id="task">${tarea.nombre}</td>
    <td><input type="checkbox" id="opt1" onChange="pintar()"/> <button onclick="borrar(${tarea.id})"> Eliminar </button></td>
</tr>
</tbody>`;
    }
    tbody.innerHTML = html;
    
}

btnAgregar.addEventListener("click", () => {
    if (tareaInput.value == "") {
        alert("Debe agregar un valor");
        return;
    }
    const nuevaTarea = tareaInput.value
    tareas.push({ id: Date.now(), nombre: nuevaTarea, completado: false })
    tareaInput.value = ""
    cuenta.innerHTML = 'Total Tareas: ' + tareas.length
    renderTareas()

})

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    renderTareas()
    cuenta.innerHTML = 'Total Tareas: ' + tareas.length
}

// const cuentaRealizadas = document.querySelector("#realizadas")
// function pintar () {
//     check = document.querySelector("#opt1");
//     if (check == true) {
//         const tareaRealizada= check.checked
//         // tareaAgregada = document.querySelector("#task");
//         tareaAgregada.style.color = "red"
//         tareas.push({id: Date.now(), nombre: nuevaTarea, completado:true})
//         cuentaRealizadas.innerHTML = 'Total Realizadas: ' + realizadas.length
//     }
//     else {
//         tareaAgregada.style.color = "black"
        
//     }
//   };

