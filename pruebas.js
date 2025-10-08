/* let array=["enero","febrero","marzo","abril","mayo","junio","julio"]

let filtrado=array.filter(x=> x=="marzo"||x=="mayo"||x=="julio")
console.log(filtrado)
if(filtrado.length<3){
  console.log("no se encontró un mes")
} */


let num=-4
function breakStatement(numero) {
  let array=[]
  
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  for(i=0;i<10;i++)
  {
  
  

  array.push(numero= numero+2)
  console.log(array)
  if(array[i]==i){
    console.log("es igual",i)
    break
  }
  

  }
  return array
}
console.log(breakStatement(num))
