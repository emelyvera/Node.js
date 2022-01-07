// modulo Os, nos da como el sistema operativo 
// el que usar si os o fs se mira enla documentacion oficial

// Sistema Operativo 
const os =require('os');


let cpu =os.cpus();
let sistema =os.platform();
let usuario=os.hostname();

//console.log(usuario);

// file system 
const fs= require('fs');

// fs.appendFile('archivo.txt', 'informacion del cpu: '+ JSON.stringify(cpu),function(error){
//     if(error){}
//     console.log('error al crear el archivo');
// });

//! String templetes para hacerlo dinamico 
var cpu_string=JSON.stringify(cpu);

fs.appendFile('archivo.txt', `informacion del cpu: ${cpu_string}`,function(error){
    if(error){}
    console.log('error al crear el archivo');
});