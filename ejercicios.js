/*
Hoy es tu primer dia en una planta de ensamblaje en la cual se te asignaron tus primeras 5
tareas:
Ejercicio 1: Ensamblar el dispositivo paso a paso
Descripción: Estás ensamblando las primeras tres partes del dispositivo. Cada parte necesita
un tiempo diferente para completarse, y no puedes avanzar al siguiente paso hasta que la parte
anterior esté completamente ensamblada. Debes manejar el ensamblaje de estas partes
usando callbacks para asegurarte de que cada una se haga en el orden correcto.
Instrucciones:
1. Simula el ensamblaje de tres partes del dispositivo, cada una con un tiempo diferente de
ejecución.
2. Usa setTimeout para simular el tiempo necesario para ensamblar cada parte.
3. El ensamblaje de cada parte debe depender de que la anterior haya terminado, usando
callbacks para pasar de una parte a la siguiente.
*/
function ensamblarParte1(callback) {
    console.log("Iniciando ensamblaje de la Parte 1...");
    setTimeout(() => {
        console.log("Parte 1 ensamblada.");
        callback(); 
    }, 1000); 
}

function ensamblarParte2(callback) {
    console.log("Iniciando ensamblaje de la Parte 2...");
    setTimeout(() => {
        console.log("Parte 2 ensamblada.");
        callback(); 
    }, 2000); 
}

function ensamblarParte3(callback) {
    console.log("Iniciando ensamblaje de la Parte 3...");
    setTimeout(() => {
        console.log("Parte 3 ensamblada.");
        callback(); 
    }, 1500); 
}

function ensamblarDispositivo() {
    ensamblarParte1(() => {
        ensamblarParte2(() => {
            ensamblarParte3(() => {
                console.log("Dispositivo ensamblado completamente.");
            });
        });
    });
}
ensamblarDispositivo();

/*
Ejercicio 2: Solicitar información para ensamblar las piezas)
Descripción: En el proceso de ensamblaje, necesitas pedir a otra sección de la fábrica
información clave sobre las especificaciones de cada parte. Esta información tarda en llegar, y
sólo puedes continuar ensamblando cuando recibas las especificaciones correctas.
Instrucciones:
1. Simula pedir información sobre cada parte del dispositivo y que esta tarda en llegar.
2. Una vez que recibas la información para una parte, debes usarla para continuar
ensamblando la siguiente.
3. Cada parte depende de la información recibida de la anterior, y debes usar callbacks
para manejar las respuestas
*/

function solicitarInformacion(parte, callback) {
    console.log(`Solicitando especificaciones para la Parte ${parte}...`);
    setTimeout(() => {
        const especificaciones = `Especificaciones de la Parte ${parte}`; 
        console.log(`Especificaciones recibidas para la Parte ${parte}: ${especificaciones}`);
        callback(especificaciones);
    }, Math.random() * 2000 + 1000); 
}

function ensamblarParte(parte, especificaciones, callback) {
    console.log(`Iniciando ensamblaje de la Parte ${parte} con ${especificaciones}...`);
    setTimeout(() => {
        console.log(`Parte ${parte} ensamblada con éxito.`);
        callback(); 
    }, Math.random() * 1500 + 500); 
}

function ensamblarDispositivo() {
    solicitarInformacion(1, (especificaciones1) => {
        ensamblarParte(1, especificaciones1, () => {
            solicitarInformacion(2, (especificaciones2) => {
                ensamblarParte(2, especificaciones2, () => {
                    solicitarInformacion(3, (especificaciones3) => {
                        ensamblarParte(3, especificaciones3, () => {
                            console.log("Dispositivo ensamblado completamente con todas las especificaciones.");
                        });
                    });
                });
            });
        });
    });
}
ensamblarDispositivo();

/*
Ejercicio 3: Obtener manuales de ensamblaje
Descripción: Antes de ensamblar ciertas partes más complejas del dispositivo, necesitas leer
los manuales de ensamblaje. Estos manuales tardan en descargarse y leerse, y debes
obtenerlos en un orden específico para poder continuar.
Instrucciones:
1. Simula la descarga y lectura de tres manuales de ensamblaje, cada uno en un orden
específico.
2. Usa setTimeout para simular el tiempo que tarda en descargarse y leerse cada
manual.
3. Cada manual debe leerse antes de continuar con la lectura del siguiente, utilizando
callbacks para controlar el flujo.
*/
function descargarYLeerManual(manual, callback) {
    console.log(`Iniciando descarga del Manual ${manual}...`);
    setTimeout(() => {
        console.log(`Manual ${manual} descargado y leído.`);
        callback();
    }, Math.random() * 3000 + 1000); 
}

function leerManuales() {
    descargarYLeerManual(1, () => {
        descargarYLeerManual(2, () => {
            descargarYLeerManual(3, () => {
                console.log("Todos los manuales han sido descargados y leídos. Puedes continuar con el ensamblaje.");
            });
        });
    });
}
leerManuales();

/*
Ejercicio 4: Problemas en el ensamblaje
Descripción: Durante el ensamblaje de algunas partes del dispositivo, existe una posibilidad
de que una de ellas no se ensamble correctamente. Si esto sucede, debes detener el proceso y
reportar el error.
Instrucciones:
1. Simula el ensamblaje de varias partes del dispositivo.
2. Para cada parte, incluye una probabilidad de fallo (por ejemplo, usando Math.random).
3. Si ocurre un fallo, el proceso de ensamblaje debe detenerse y el error debe ser
manejado apropiadamente usando callbacks.
4. Si no ocurre un fallo, el ensamblaje debe continuar normalmente hasta que todas las
partes estén ensambladas.
*/
function ensamblarParte(parte, callback, errorCallback) {
    console.log(`Iniciando ensamblaje de la Parte ${parte}...`);
    setTimeout(() => {
        const probabilidadDeFallo = Math.random(); 
        
        if (probabilidadDeFallo < 0.3) { 
            errorCallback(`Error: Fallo en el ensamblaje de la Parte ${parte}.`);
        } else {
            console.log(`Parte ${parte} ensamblada correctamente.`);
            callback(); 
        }
    }, Math.random() * 2000 + 1000); 
}

function ensamblarDispositivo() {
    ensamblarParte(1, () => {
        ensamblarParte(2, () => {
            ensamblarParte(3, () => {
                console.log("Dispositivo ensamblado completamente sin errores.");
            }, (error) => {
                console.error(error); 
            });
        }, (error) => {
            console.error(error); 
        });
    }, (error) => {
        console.error(error); 
    });
}
ensamblarDispositivo();

/*
Ejercicio 5: Ensamblaje complejo
Descripción: Estás en la parte final del ensamblaje del dispositivo, donde cada paso es más
complicado y depende completamente del anterior. El proceso se vuelve cada vez más difícil de
manejar a medida que avanza, lo que genera una estructura compleja de callbacks anidados.
Instrucciones:
1. Simula el ensamblaje de varias partes del dispositivo, cada una con diferentes tiempos
de ejecución.
2. Usa callbacks para manejar cada paso del ensamblaje, de modo que los pasos se
vayan ejecutando uno tras otro, en secuencia.
3. A medida que avanzas en el ensamblaje, observa cómo los callbacks se anidan y se
vuelven difíciles de manejar, creando lo que llamamos un "callback hell".
*/
function ensamblarParte(parte, tiempo, callback) {
    console.log(`Iniciando ensamblaje de la Parte ${parte}...`);
    setTimeout(() => {
        console.log(`Parte ${parte} ensamblada correctamente en ${tiempo}ms.`);
        callback();
    }, tiempo);
}

function ensamblajeComplejo() {
    ensamblarParte(1, 1000, () => {
        ensamblarParte(2, 2000, () => {
            ensamblarParte(3, 1500, () => {
                ensamblarParte(4, 2500, () => {
                    ensamblarParte(5, 3000, () => {
                        console.log("Todas las partes ensambladas correctamente.");
                    });
                });
            });
        });
    });
}

ensamblajeComplejo();
