
//para realizar debug  
// $ node inspect app.js alli se abre para debugear 
// pára pásar se hace con n  debug> n
// y repl me sirve para poder conocer el  valor de la variable 
// debug> n
// break in app.js:6
//   4
//   5 let curso = "node";
// > 6 curso = "node.js";
//   7 curso = "node.js tutos!!";
//   8
// debug> repl
// Press Ctrl + C to leave debug repl
// > curso
// 'node'
// >
const extra = require('./extra');

extra.saludar();

let curso = "node";
curso = "node.js";
curso = "node.js tutos!!";


// si queremos ir al punto de brakponit escribimos debbuger 
// seria debug> c conla c nos paramos ahi
debugger;
console.log(curso);

x = ()=>{
    debugger;
    return 1 + 10;
}

console.log(x());


// para el DevTools entonces 
// $ node --inspect-brk app.js
// Debugger listening on ws://127.0.0.1:9229/da305de6-a5e7-4a80-8c1d-39f1fc8cb61b        
// For help, see: https://nodejs.org/en/docs/inspector
// esqto queda en modo escucha y en el inspector de google se abre el node 