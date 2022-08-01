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

 