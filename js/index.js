//console.log("Hello World:3");

const materia = {
    nombre: "Aplicaciones Web",
    horario: "09:00 a 10:45 hrs."
};
Object.freeze(materia);
console.log(materia.nombre);
materia.nombre = "Base de Datos";
console.log(materia.nombre);

var suma = (a,b)=>{
    return a+b;
}
console.log(suma(5,8));

var unSaludo = (nombre = "Ricardo", edad = "19")=>{
    console.log(`Hola soy ${nombre} y mi edad es ${edad} años`);
}
console.log("---------------------");
unSaludo();
console.log(unSaludo());
console.log("---------------------");
unSaludo("Rodríguez");
console.log("---------------------");
unSaludo("González",19);
console.log("---------------------");

var num1 = 2;
var num2 = 34;
console.log(`La suma de ${num1} + ${num2} es ${num1+num2 + ' oh la la'}`);

console.log(`Aplicaciones Web
Bienvenid@`);

/*const nombre = "Aplicaciones Web";
if(true){
    nombre = "Base de Datos";
    console.log(nombre);
}
console.log(nombre);*/

var curso = {
    nombre: "",
    descripcion: "",
    docente: {
        nombre: "",
        cursos: 0
    }
};

function actualizar(){
    console.log("Se llamó a acutualizar");
    
    curso.nombre = document.getElementById("nombre").value;
    curso.descripcion = document.getElementById("descripcion").value;
    curso.docente.nombre = document.getElementById("docente").value;
    curso.docente.cursos = document.getElementById("cursos").value;
    actualizarFicha();
}

function actualizarFicha(){
    document.getElementById("titulo").innerHTML = curso.nombre;
    document.getElementById("desc").innerHTML = curso.descripcion;
    document.getElementById("nombre-docente").innerHTML = curso.docente.nombre;
    document.getElementById("total").innerHTML = curso.docente.cursos;
}

var btnCambiar = document.querySelector(".btn-cambiar");
console.log(btnCambiar);
btnCambiar.addEventListener("click",()=>{
    document.querySelector(".btn-success").innerHTML = "Update";
});