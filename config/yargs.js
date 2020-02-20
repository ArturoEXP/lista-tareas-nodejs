const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada la tarea'
};



const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado

    })
    .command('borrar', 'Elimina una de las tareas de la lista', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}