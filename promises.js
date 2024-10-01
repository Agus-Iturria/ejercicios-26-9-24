//1
function ensamblarParte1() {
    return new Promise((resolve) => {
        console.log("Iniciando ensamblaje de la Parte 1...");
        setTimeout(() => {
            console.log("Parte 1 ensamblada.");
            resolve();
        }, 1000); 
    });
}

function ensamblarParte2() {
    return new Promise((resolve) => {
        console.log("Iniciando ensamblaje de la Parte 2...");
        setTimeout(() => {
            console.log("Parte 2 ensamblada.");
            resolve();
        }, 2000); 
    });
}

function ensamblarParte3() {
    return new Promise((resolve) => {
        console.log("Iniciando ensamblaje de la Parte 3...");
        setTimeout(() => {
            console.log("Parte 3 ensamblada.");
            resolve();
        }, 1500); 
    });
}

function ensamblarDispositivo() {
    ensamblarParte1()
        .then(() => ensamblarParte2())
        .then(() => ensamblarParte3())
        .then(() => {
            console.log("Dispositivo ensamblado completamente.");
        });
}

ensamblarDispositivo();

//2
function solicitarInformacion(parte) {
    return new Promise((resolve) => {
        console.log(`Solicitando especificaciones para la Parte ${parte}...`);
        setTimeout(() => {
            const especificaciones = `Especificaciones de la Parte ${parte}`;
            console.log(`Especificaciones recibidas para la Parte ${parte}: ${especificaciones}`);
            resolve(especificaciones);
        }, Math.random() * 2000 + 1000);
    });
}

function ensamblarParte(parte, especificaciones) {
    return new Promise((resolve) => {
        console.log(`Iniciando ensamblaje de la Parte ${parte} con ${especificaciones}...`);
        setTimeout(() => {
            console.log(`Parte ${parte} ensamblada con éxito.`);
            resolve();
        }, Math.random() * 1500 + 500);
    });
}

function ensamblarDispositivo() {
    solicitarInformacion(1)
        .then((especificaciones1) => ensamblarParte(1, especificaciones1))
        .then(() => solicitarInformacion(2))
        .then((especificaciones2) => ensamblarParte(2, especificaciones2))
        .then(() => solicitarInformacion(3))
        .then((especificaciones3) => ensamblarParte(3, especificaciones3))
        .then(() => {
            console.log("Dispositivo ensamblado completamente con todas las especificaciones.");
        });
}

ensamblarDispositivo();

//3
function descargarYLeerManual(manual) {
    return new Promise((resolve) => {
        console.log(`Iniciando descarga del Manual ${manual}...`);
        setTimeout(() => {
            console.log(`Manual ${manual} descargado y leído.`);
            resolve();
        }, Math.random() * 3000 + 1000);
    });
}

function leerManuales() {
    descargarYLeerManual(1)
        .then(() => descargarYLeerManual(2))
        .then(() => descargarYLeerManual(3))
        .then(() => {
            console.log("Todos los manuales han sido descargados y leídos. Puedes continuar con el ensamblaje.");
        });
}

leerManuales();

//4
function ensamblarParte(parte) {
    return new Promise((resolve, reject) => {
        console.log(`Iniciando ensamblaje de la Parte ${parte}...`);
        setTimeout(() => {
            const probabilidadDeFallo = Math.random();
            if (probabilidadDeFallo < 0.3) { 
                reject(`Error: Fallo en el ensamblaje de la Parte ${parte}.`);
            } else {
                console.log(`Parte ${parte} ensamblada correctamente.`);
                resolve();
            }
        }, Math.random() * 2000 + 1000);
    });
}

function ensamblarDispositivo() {
    ensamblarParte(1)
        .then(() => ensamblarParte(2))
        .then(() => ensamblarParte(3))
        .then(() => {
            console.log("Dispositivo ensamblado completamente sin errores.");
        })
        .catch((error) => {
            console.error(error);
        });
}

ensamblarDispositivo();
