const cuentaRealizadas = document.querySelector("#realizadas")
const realizadas = []
function pintar (color) {
    tareaAgregada = document.querySelector("#task");
    check = document.querySelector("#opt1").checked;
    if (check == true) {
        tareaAgregada.style.color = color
        realizadas.push({id: Date.now(), nombre: nuevaTarea, completado:true})
        cuentaRealizadas.innerHTML = 'Total Realizadas: ' + realizadas.length
    }
    else {
        tareaAgregada.style.color = "black"
        
    }
  };

