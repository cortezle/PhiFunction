//Declaracion de atributos del objeto dia
let dia = [];

function add_day(events, accident) {
    dia.push({ events, accident })
}

add_day(["beer", "cycling"], true);
add_day(["work", "cycling"], false);
add_day(["weekend", "talk"], false);
add_day(["talk", "beer"], false);


//Funcion para el calculo de phi
function phi([n00, n01, n10, n11]){
    return (n11 * n00 - n10 * n01)/Math.sqrt((n11+n01)*(n10+n00)*(n11+n10)*(n01+n00));
}

function phi2 (lista2){
    var n11n00=lista2[0]*lista2[3];
    var n10n01=lista2[1]*lista2[2];
    var n1=lista2[0]+lista2[2];
    var n0=lista2[1]+lista2[3];
    var nc1=lista2[0]+lista2[1];
    var nc0=lista2[2]+lista2[3];
    return (n11n00-n10n01)/Math.sqrt(n1*n0*nc1*nc0);
}

//Funcion Tablita
var tablita = (event) => {
    var arrg = [0,0,0,0];
    for(let i = 0; i<dia.length;i++){
        let index = 2;
        if(dia[i].events.includes(event)) index =index- 2;
        if(!dia[i].accident)index += 1;
        arrg[index]++;
    }
    return arrg;
}

for(let i = 0; i < dia.length; i++){
    console.log(dia[i].events);
}

//Funcion para el calculo de phi
let arr = [20, 10, 30, 50];



//Arreglo de tareas
var todoList = [];

//funcion de añadir
function remember(task) {
    todoList.push(task);
}

//funcion de recordar urgente
function rememberUrgent(task) {
    todoList.unshift(task);
}

//Obtener el primer dato (el mas urgente)
function getTask(){
    console.log(todoList.shift());
}