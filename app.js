$(document).ready(function () {
    //Definir variables y arrays
    var participantes = [];
    var posiciones = [];
    var resultados = [];
    var meta = ($(window).width() - 50);
    
    // Ocultar botón reiniciar
    $("#botonreiniciar").hide();

    // Ocultar tabla
    $("#tabla").hide();

    // Función para crear el array de participantes y crear los participantes de la carrera con las pistas correspondientes
    $("#participantes").click(function () {
        // Cogemos el número del select del menú desplegable y lo guardamos en la variable
        var numparticipantes = $("#participantes").val();
        console.log(numparticipantes);
        participantes = new Array(parseInt(numparticipantes));
        $("#carrera").empty();

        // Imprime el número de div de cada participante en función del número seleccionado
        for (var i = 1; i <= participantes.length; i++) {
            var divParticipante = `<div class="contenedor-carrera" >
            <div class="carretera" id="car${i}"><img id="participante${i}" class="coche-img" src="./img/car${i}.png" alt="Car${i}">`;
            $("#carrera").append(divParticipante);
        };
        console.log(`Hay ${numparticipantes} participantes listos para empezar la carrera`);
    });

    // Función animación coches y creación tabla con el ránking
    $("#botoniniciar").click(function () {
        console.log("Comienza la carrera");

        for (var i = 1; i <= participantes.length; i++) {
            $("#participante"+i).animate(
                {marginLeft: meta }, Math.random() * ((10-1)+1)*1000,
                function () {
                    posiciones.push();
                    console.log(posiciones);

                    // Si el número de posiciones es igual al número de participantes
                    if (posiciones.length == participantes.length) {
                        console.log("dentro del if");
                        // Pasamos el array de posiciones al array de resultados
                        resultados = posiciones;

                        // Reseteamos el array de posiciones para la siguiente partida
                        posiciones = [];

                        // Creamos la tabla

                        for (var i = 0; i < resultados.length; i++) {
                           
                            var posicion = `<td><img src="/pac_carrera/img/car${i}.png" alt="" height="20px"></td>`;
                            
                            var tabla;
                            tabla.append(posicion);
                            tablePositions.appendChild(pos);
                          }

                          $("#tabla").appendChild(posicion);
                    };
                }
            );

            // Creamos la tabla de resultados
            var tabla = `<table>
                         <tr>
                            <th>Coche</th>
                            <th>Posición</th>
                            <th>Velocidad</th>
                         </tr>
                             <td><img src="/pac_carrera/img/car${i}.png" alt="" height="20px"></td>
                    </table>`;

            //$("#tabla").append(tabla);
        };
       
        
        $(this).hide();
        $("#botonreiniciar").show();


    });

    // Función reiniciar

    $("#botonreiniciar").click(function () {

        for(var i = 1; i <= participantes.length; i++) {
            $("#participante" + i).stop();
            $("#participante" + i).css("marginLeft", "0px");
        }
       
        $("#botonreiniciar").hide();
        $("#botoniniciar").show();
        console.log("Vuelve a comenzar la carrera");
    });

});
