const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calcular1");
const input2 = document.querySelector("#calcular2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#resultad");

form.addEventListener("submit", sumarInputValues); 
// el addEventListener va recibir en la funcion un parametro como evento(event)

function sumarInputValues(event){
   event.preventDefault();
   const sumaInputs = input1.value + input2.value;
   pResult.innerText = "Resultado: " + sumaInputs;
}

// btn.addEventListener("click",btnOnClick);
// function btnOnClick(){
//    const sumaInputs = input1.value + input2.value;
//    pResult.innerText = "Resultado: " + sumaInputs;
// }

// const p = document.querySelector("p"); clase 12
// const parrafito = document.getElementsByClassName("parrafito");
// const pid = document.getElementById("pid");
// const input = document.querySelector("input");

// formas de escuchar  eventos  de algun elemento desde js, es agregando el atributo en el html "onclick" en el boton y para un input es el atributo "onchange"

// function btnOnClick(){
//    const sumaInputs = input1.value + input2.value;
//    pResult.innerText = "Resultado: " + sumaInputs;
// }

// clase 12 escribiendo html desee js
// console.log(h1)

// console.log ({
//     h1,
//     p,
//     parrafito,
//     pid,


//     input,
//  });

// h1.innerHTML = "VIVIANA <br> programadora";
// h1.innerText = "VIVIANA <br> programadora";
// console.log(h1.getAttribute("class"));
// h1.setAttribute("class", "rojo")

// h1.classList.add("rojo");
// h1.classList.remove("azul");

// h1.classList.toggle("");
// h1.classList.contains("");

// input.value="345"

// const img = document.createElement("img");
// img.setAttribute("src", "https://images.pexels.com/photos/19797253/pexels-photo-19797253/free-photo-of-comida-arbusto-jardin-invierno.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load");
// console.log(img);

// pid.innerHTML=""; 
// // borra tdod lo que hay dentro del parrafo
// pid.appendChild(img);

