function saludo (nombre){
  alert ('hola' + nombre )
}
function ProcesarEntradaDeDatos (callback){
  const nombre =prompt ('tu nombre')
  callback(nombre)
}
saludo('dana');
//ProcesarEntradaDeDatos()




function aCelsius (Farenheit){
  console.log('convirtiendo F a C');
  return (Farenheit - 32) / 1.8;
}
console.log(aCelsius(75) );


let aCelsius =(Farenheit)=>{
  console.log('convirtiendo F a C');
}



let Celsius1= aCelsius(100)
console.log(Celsius1);
let Celsius2= aCelsius(75);
console.log(Celsius2);
