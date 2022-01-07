// promesas 
// permitre mas legilibilidad procesos asincronas y esperar un resultado proimetido 
// resolve es 


let promesa=new Promise((resolve, reject)=>{
    resolve('exito');
});


//the n permite obtener el resultado de la promesa 
promesa.then((resultado)=>{
    console.log(resultado);
});