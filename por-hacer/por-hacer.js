const fs = require('fs');
let listadoPorHacer = [];
const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('database/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo grabar', err)
        else
            console.log("Los cambios se han guardado correctamente")
    })
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../database/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    console.log(listadoPorHacer);
}

const getListado = () => {

    cargarDB();

    return listadoPorHacer;
}

const actualizar = ((descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => { return tarea.descripcion === descripcion });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
})


const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

    for (let tarea of listado) {
        if (descripcion == listado.descripcion) {
            listado = listado.filter(word => descripcion != listado.descripcion)
            guardarDB();
            console.log("La tarea se ha borrado correctamente");
        } else {
            console.log("No se ha encontrado la tarea");
        }
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}