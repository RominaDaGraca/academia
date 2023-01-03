    var lista_alumnos = [{
        id: 1,
        nombre: "Pedro",
        email: "pedro@gmail.com"
    }, {
        id: 2,
        nombre: "Alba",
        email: "alba@gmail.com"
    },{
        id: 3,
        nombre: "Carla",
        email: "carla@gmail.com"
    }
    ];
    window.onload = function () {
    pintarTabla(lista_alumnos)
    
    var form = document.getElementById("formulario");
    form.onsubmit = function (e) {
        e.preventDefault();
        var nombre = document.getElementById("txtnombre").value
        var email = document.getElementById("txtemail").value
        var alumno = {
            id: lista_alumnos.length + 1,
            nombre: nombre,
            email: email
        }
        lista_alumnos.push(alumno)
        pintarTabla(lista_alumnos)
    }
}

function pintarTabla(datos) {
    var tabla = document.getElementById("tabla");
    tabla.innerHTML="";
    for (let index = 0; index < datos.length; index++) {
        const element = datos[index];
        var nuevafila = `<tr>
        <td>${element.id}</td>
        <td>${element.nombre}</td>
        <td>${element.email}</td>
        </tr>`
        tabla.innerHTML = tabla.innerHTML + nuevafila;
    }
}