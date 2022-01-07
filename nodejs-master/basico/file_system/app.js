const fs = require('fs');

console.log('Iniciado')

// es cuendo yo quiero que sea asincrono 

/*fs.readFile('data.txt', 'utf-8', (error, data)=> {
    if(error){
        console.log(`Error ${error}`);
    }else{
        console.log(data);
    }
});*/



//se le agrega Sync par que sea sincronico o sea por odern 

//let data = fs.readFileSync('data.txt', 'utf-8');
//console.log(data);

// AQUI ES ASINCRONO 

/*fs.rename('data.txt', 'data_renombrado.txt', (error)=>{
    if(error) throw error;
    console.log('¡Renombrado!');
});*/

// SOBRESCRIBIR EL ARCHIVO

/*fs.appendFile('data.txt', '\n Gracias por suscribirte', (error)=>{
    if (error) console.log(`Error ${error}`);
});


// ELIMINAR EL ARCHIVO  

fs.unlink('data2.txt', (error)=>{
    if (error) throw error;
    console.log('Eliminado');
});*/

// COPIAR EL ARCHIVO 

//fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));

// LEER ASINCRONO 

fs.readdir('./../../basico/file_system', (error, files)=>{
    files.forEach(file => {
        console.log(file);
    });
});

/*fs.readdirSync('./../../basico/file_system').forEach(file => {
    console.log(file);
});*/

console.log('Finalizado')