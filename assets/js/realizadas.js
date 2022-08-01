const cuentaRealizadas = document.querySelector("#realizadas")
const realizadas = []
function pintar () {
    // tareaAgregada = document.querySelector("#task");
    check = document.querySelector("#opt1").checked;
    if (check == true) {
        tareaAgregada = document.querySelector("#task");
        tareaAgregada.innerHTML = "caca"
        tareaAgregada.style.color = "red"
        realizadas.push({id: Date.now(), nombre: nuevaTarea, completado:true})
        cuentaRealizadas.innerHTML = 'Total Realizadas: ' + realizadas.length
    }
    else {
        tareaAgregada.style.color = "black"
        
    }
  };

