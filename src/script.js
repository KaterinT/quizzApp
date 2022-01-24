//addeventListener
let puntaje = 0;
let arrRpta = [];

let play=document.querySelector('input[type="submit"]');
play.addEventListener('click',function(){
 let nombre='';
 let tema=document.querySelector('input[name="tema"]:checked')
  
  const name = document.getElementById('name');
  if(nombre===name.value){
   alert('No haz ingresado un nombre');
  }else if(tema.value==='tema1'){
   document.getElementById("pantalla-inicio").style.display="none"
   document.getElementById("pantalla-preguntas").style.display="block"
   document.getElementById('holaNombre').innerHTML = 'Hola ' + name.value + ' !';
  } else{
     document.getElementById("pantalla-inicio").style.display="none"
   document.getElementById("pantalla-preguntas2").style.display="block"
   document.getElementById('holaNombre2').innerHTML = 'Hola ' + name.value + ' !';
  }
})


function rpta1() {
  let respuesta1 = document.querySelector('input[name="question1"]:checked')
   arrRpta[0] = respuesta1.value;

  // console.log(arrRpta);
  if (arrRpta[0] === 'Lovers'||arrRpta[0]==="película de acción") {
    puntaje++;
    document.getElementById('preg1').style.color ='green' 
    return 'respuesta correcta ';
  } else {
    document.getElementById('preg1').style.color ='red' 
    return 'respuesta incorrecta ' ;
  }
 
}

function rpta2() {
  let respuesta2 = document.querySelector('input[name="question2"]:checked')
  arrRpta[1] = respuesta2.value;
  if (arrRpta[1] === 'My name is Kim Sam Soon'||arrRpta[1]==='Guillermo del Toro') {
    puntaje++;
    document.getElementById('preg2').style.color = 'green'
    return ' respuesta correcta ' ;
  } else {
    document.getElementById('preg2').style.color = 'red'
    return 'respuesta incorrecta ' ;
  }
}

function rpta3() {
  let respuesta3 = document.querySelector('input[name="question3"]:checked')
  arrRpta[2] = respuesta3.value;
  if (arrRpta[2] === 'I`m Sorry, I love you'||arrRpta[2]==="Leonard Nimoy") {
   puntaje++;
   document.getElementById('preg3').style.color = 'green'
    return 'respuesta correcta' ;
  } else {
    document.getElementById('preg3').style.color = 'red'
    return 'respuesta incorrecta ' ;
  }
 
}

let respuestaTema1 = document.querySelectorAll('input[type="button"]')[0]
let respuestaTema2 = document.querySelectorAll('input[type="button"]')[1]

respuestaTema1.addEventListener('click', function () {
  rpta1();
  rpta2();
  rpta3();
   document.getElementById("pantalla-preguntas").style.display="none"
   document.getElementById("pantalla-respuestas").style.display="block"
   
  if(puntaje===3){
    document.getElementById('totalPuntos').innerHTML = 'Puntaje Total : '+ puntaje + '  "Felicitaciones" ';
  }else{
    document.getElementById('totalPuntos').innerHTML = 'Puntaje Total : '+ puntaje + '  "Sigue intentando" '; 
  }
  document.getElementById('preg1').innerHTML = arrRpta[0] +' -> es la '+rpta1();
  document.getElementById('preg2').innerHTML = arrRpta[1] +' -> es la '+rpta2();
  document.getElementById('preg3').innerHTML = arrRpta[2] +' -> es la '+rpta3();
  
})
respuestaTema2.addEventListener('click', function () {
  rpta1();
  rpta2();
  rpta3();
   document.getElementById("pantalla-preguntas2").style.display="none"
   document.getElementById("pantalla-respuestas").style.display="block"
   
  if(puntaje===3){
    document.getElementById('totalPuntos').innerHTML = 'Puntaje Total : '+ puntaje + '  "Felicitaciones" ';
  }else{
    document.getElementById('totalPuntos').innerHTML = 'Puntaje Total : '+ puntaje + '  "Sigue intentando" '; 
  }
  document.getElementById('preg1').innerHTML = arrRpta[0] +' -> es la '+rpta1();
  document.getElementById('preg2').innerHTML = arrRpta[1] +' -> es la '+rpta2();
  document.getElementById('preg3').innerHTML = arrRpta[2] +' -> es la '+rpta3();
  
})

function volverJugar(){
  document.getElementById("pantalla-respuestas").style.display="none"
   document.getElementById("pantalla-inicio").style.display="block"
   puntaje=0;
   arrRpta = [];
}

