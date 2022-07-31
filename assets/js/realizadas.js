const cuentaRealizadas = document.querySelector("#realizadas")
const realizadas = []
function pintar () {
    TareAgregada = document.querySelector("#task");
    check = document.querySelector("#opt1").checked;
    if (check == true) {
        TareAgregada.style.color = "red"
        realizadas.push({id: Date.now(), nombre: nuevaTarea, completado:true})
        realizadas.innerHTML = 'Total Realizadas: ' + realizadas.length
    }
    else {
        TareAgregada.style.color = "black"
    }
  };


