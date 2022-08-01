const tareaInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const listaDeTareas = document.querySelector("#listaDeTareas")
const tbody = document.querySelector("tbody")
const cuenta = document.querySelector("#cuenta-tareas")

// let statusCheck= ""

const tareas = [
    { id: 1, nombre: "Salir de compras", completado: false },
    { id: 2, nombre: "Estudiar Desafío", completado: false },
    { id: 3, nombre: "Hacer desafío", completado: false },
]
// const indiceTareas = tareas.findIndex( tarea => tarea.completado === false)
// tareas.splice(indiceTareas, 0, completado: true)

renderTareas()

function renderTareas() {
    let html =""
    for (let tarea of tareas) {
        // if(tarea.completado == true){
        //     statusCheck = "checked"
        // }
        // else {
        //     statusCheck=""
        // }
        html += `<tbody>
        <tr>    
    <td>${tarea.id}</td>
    <td id="task">${tarea.nombre}
    <h6 style="color: red;" id="pendiente">Pendiente</h6></td>
    <td><input type="checkbox" id="opt1" onclick="pintar()"/> <button onclick="borrar(${tarea.id})"> Eliminar </button></td>
</tr>
</tbody>`;
    }
    tbody.innerHTML = html;   
    cuenta.innerHTML = 'Total Tareas: ' + tareas.length
    // cuentaRealizadas.innerHTML = "Total Realizadas: " + tareas.filter(({state}) => state === true).length
}

btnAgregar.addEventListener("click", () => {
    if (tareaInput.value == "") {
        alert("Debe agregar un valor");
        return;
    }
    const nuevaTarea = tareaInput.value
    const nuevaId = tareas.length
    tareas.push({ id: nuevaId+1, nombre: nuevaTarea, completado: false })
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

// function pintar (id)
// const index = tareas.findIndex((ele) => ele.id == id)
// tareas.splice(index, 1)
// renderTareas()


// function pintar () {
//     check = document.querySelector(".opt1").checked
//     tareaAgregada = document.querySelector(".task")
//         if (check == true) {
//             tareaAgregada.style.color = "red"
//         }
//     }


    let check = document.querySelector("#opt1").checked;
    let cuentaRealizadas = document.querySelector("#realizadas")
    let pendiente = document.querySelector("#pendiente");
    let tareaAgregada = document.querySelector("#task");
    let realizadas = []
    function pintar () {
    if (check == true) {         
        let cantRealizadas= realizadas.length
        pendiente.style.color = "green"
        pendiente.innerHTML= "Realizada"
        realizadas.push({id: cantRealizadas+1, nombre: nuevaTarea, completado:true})
        cuentaRealizadas.innerHTML = 'Total Realizadas: ' + realizadas.lenght
    }
    else {
        tareaAgregada.style.color = "black"
        
    }
  };

