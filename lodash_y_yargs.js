// lodash es una liobreria que me dirve para 
//  modeulo para realizar operaciones de una forma mas simple que sin el seria mas complejo como 
// con operaciones de tipo json

const _ = require('lodash');

// let x = { "nombre": "Jaime" }
// let y = { "apodo": "MitoCode" }
// let z = [
//     { nombre: "Jaime", apellido: "Medina", edad: 26 },
//     { nombre: "Mito", apellido: "Code", edad: 26 }
// ]


// se concatenan los valores de albas variables muy facil 
// let resultado=_.assign(x,y);
// console.log(resultado);


// me permite repetir varias veces la funcion sin lodash huibuese tenido que hacer un bucle for 
//_.times(3, ()=> console.log('susc'));

// con lpodash tambien podemos encontrar objetos dentro de una coleecion 
// let resultado=_.find(z, {nombre:'jaime'});
// console.log(resultado);

//YARGS, CAPTURAR LO VALORES DE ENTRADA DEL USUSARIO 

// input tradicional de node js 
// al irle agragrle vvalores a la consola de node solo es 
// $ node lodash_y_yargs.js arroz papa
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\Usuario\\Documents\\Nodejs\\lodash_y_yargs.js',     
//     'arroz'
//      'papa'
//   ]
// entonces a partir de la posicion dos captura valores, los agrega a la lista


// let comando = process.argv[2];

// // console.log(comando);

// if (comando === 'usuario') {
//     if (process.argv[2] === 'MitoCode') {

//         let x = { "nombre": "Jaime" }
//         let y = { "apodo": "MitoCode" }
//         let z = [
//             { nombre: "Jaime", apellido: "Medina", edad: 26 },
//             { nombre: "Mito", apellido: "Code", edad: 26 }
//         ];
//         let resultado = _.find(z, { nombre: 'jaime' });
//         console.log(resultado);
//     }else{
//         console.log('no valido');
//     }
// };


// isntalr yargs es 
//$ npm i yargs -- save 
// como yo no quiero hacerlo por posisciones se usa yars para buscar este 
// $ node lodash_y_yargs.js --usuario=MitoCode

const argv = require('yargs').argv;

if (argv.usuario === 'MitoCode') {


    let x = { "nombre": "Jaime" }
    let y = { "apodo": "MitoCode" }
    let z = [
        { nombre: "Jaime", apellido: "Medina", edad: 26 },
        { nombre: "Mito", apellido: "Code", edad: 26 }
    ];
    let resultado = _.find(z, { nombre: 'jaime' });
    console.log(resultado);
} else {
    console.log('no valido');

};