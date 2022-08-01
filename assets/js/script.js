        const tareaInput = document.querySelector("#nuevaTarea")
        const btnAgregar = document.querySelector("#agregarTarea")
        const listaDeTareas = document.querySelector("#listaDeTareas")
        const tbody = document.querySelector("tbody")
        const cuenta = document.querySelector("#cuenta-tareas")

        const tareas = []

        function renderTareas () {
            tbody.innerHTML = ""
            for (let tarea of tareas) {
                tbody.innerHTML += `<tr>    
    <td>${tarea.id}</td>
    <td id="task">${tarea.nombre}</td>
    <td><label for="opt1"></label>
    <input type="checkbox" name="opt1" id="opt1" onChange="pintar()" /> <button onclick="borrar(${tarea.completado})"> Eliminar </button></td>
</tr>`;
            }
        }
        btnAgregar.addEventListener("click", () => {
                if (tareaInput.value == "") {
                  alert("Debe agregar un valor");
                  return;
                }
            const nuevaTarea = tareaInput.value
            tareas.push({id: Date.now(), nombre: nuevaTarea, completado:false})
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


        