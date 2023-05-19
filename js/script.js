
/**
 * La función inicializa un elemento de lienzo y agrega un detector de eventos para que el movimiento
 * del mouse active una animación.
 */
let canvas;
function iniciar(){
    let elemento = document.getElementById("canvas");
    canvas = elemento.getContext("2d");
    window.addEventListener("mousemove", animacion);
}
/**
 * La función animacion dibuja dos círculos y dos círculos más pequeños que siguen el cursor del ratón.
 * @param evento - El parámetro "evento" es un objeto de evento que se pasa a la función "animacion".
 * Contiene información sobre el evento que activó la función, como la posición del cursor del mouse.
 */
/* La función `animacion` está dibujando dos círculos y dos círculos más pequeños que siguen el cursor
del mouse. Toma un parámetro `evento`, que es un objeto de evento que contiene información sobre el
evento que activó la función, como la posición del cursor del mouse. La función calcula la posición
de los círculos más pequeños en función de la posición del cursor del mouse y los dibuja en el
lienzo utilizando el contexto `canvas`. También limpia el lienzo antes de dibujar los círculos para
evitar dejar un rastro. */
function animacion(evento){
    canvas.clearRect(0,0,1000,50);

    let xcentro = 490;
    let ycentro = 25;
    let xmouse = evento.clientX;
    let ymouse = evento.clientY;
    let ang = Math.atan2(ymouse-ycentro, xmouse-xcentro);
    let x =xcentro + Math.round(Math.cos(ang)*10);
    let y =ycentro + Math.round(Math.sin(ang)*10);

    canvas.beginPath();
    canvas.arc(xcentro,ycentro,20,0,Math.PI *2,false);
    canvas.moveTo(xcentro+70,ycentro);
    canvas.arc(xcentro+50,ycentro,20,0,Math.PI *2,false);
    canvas.stroke();

    /* Este código está dibujando dos pequeños círculos que siguen al cursor del mouse en un elemento
    del lienzo. El método `beginPath()` inicia una nueva ruta, `moveTo()` establece el punto de
    inicio de la ruta, `arc()` dibuja un arco circular y `fill()` llena la ruta con el estilo de
    relleno actual. Las coordenadas `x` e `y` de los círculos se calculan en función de la posición
    del cursor del ratón. */
    canvas.beginPath();
    canvas.moveTo(x+10,y);
    canvas.arc(x,y,10,0,Math.PI *2,false);
    canvas.moveTo(x+60,y);
    canvas.arc(x+50,y,10,0,Math.PI *2,false);
    canvas.fill();
}
/* `window.addEventListener("load",iniciar);` agrega un detector de eventos al objeto de la ventana que
escucha el evento "load", que se activa cuando la página ha terminado de cargarse. Cuando se activa
el evento "load", se llama a la función `iniciar`, que inicializa un elemento canvas y le agrega un
detector de eventos mousemove. */
window.addEventListener("load",iniciar);

// Añade un evento de clic al elemento HTML con la clase "box1" que llama a la función "box_selected1"
document.querySelector(".box1").addEventListener("click", box_selected1);

// Añade un evento de clic al elemento HTML con la clase "box2" que llama a la función "box_selected2"
document.querySelector(".box2").addEventListener("click", box_selected2);

// Añade un evento de clic al elemento HTML con la clase "box3" que llama a la función "box_selected3"
document.querySelector(".box3").addEventListener("click", box_selected3);

// Declarando variables para cada elemento HTML de la caja
// Caja 1
box1 = document.querySelector(".box1");
check_bg1 = document.querySelector(".box1 .check");
icon_check1 = document.querySelector(".box1 .fa-check");

// Caja 2
box2 = document.querySelector(".box2");
check_bg2 = document.querySelector(".box2 .check");
icon_check2 = document.querySelector(".box2 .fa-check");

// Caja 3
box3 = document.querySelector(".box3");
check_bg3 = document.querySelector(".box3 .check");
icon_check3 = document.querySelector(".box3 .fa-check");

// Inicializa la variable "value_box" en 0
value_box = 0;

// La siguiente sección son funciones que se llaman cuando se hace clic en una de las cajas HTML

// Función que se llama cuando se hace clic en la caja 1
function box_selected1 () {
    // Quita la clase "box-selected" a la caja 2, y la clase "check-selected" y "icon-check" a sus elementos relacionados
    box2.classList.remove('box-selected');
    check_bg2.classList.remove('check-selected');
    icon_check2.classList.remove('icon-check');

    // Quita la clase "box-selected" a la caja 3, y la clase "check-selected" y "icon-check" a sus elementos relacionados
    box3.classList.remove('box-selected');
    check_bg3.classList.remove('check-selected');
    icon_check3.classList.remove('icon-check');

    // Agrega la clase "box-selected" a la caja 1, y la clase "check-selected" y "icon-check" a sus elementos relacionados
    box1.classList.toggle('box-selected');
    check_bg1.classList.toggle('check-selected');
    icon_check1.classList.toggle('icon-check');

    // Actualiza el valor de "value_box" a 1
    value_box = 1;
    console.log(value_box);
}


// Función que se llama cuando se hace clic en la caja 2
function box_selected2 () {
    // Quita la clase "box-selected" a la caja 1, y la clase "check-selected" y "icon-check" a sus elementos relacionados
    box1.classList.remove('box-selected');
    check_bg1.classList.remove('check-selected');
    icon_check1.classList.remove('icon-check');

    // Quita la clase "box-selected" a la caja 3, y la clase "check-selected" y "icon-check" a sus elementos relacionados
    box3.classList.remove('box-selected');
    check_bg3.classList.remove('check-selected');
    icon_check3.classList.remove('icon-check');
    
    /* Este bloque de código es una función llamada `box_selected2` que se ejecuta cuando el usuario
    hace clic en el elemento HTML con la clase "box2". */
    box3.classList.toggle('box-selected');
    check_bg3.classList.toggle('check-selected');
    icon_check3.classList.toggle('icon-check');
     // Actualiza el valor de "value_box" a 2
    value_box = 2;
    console.log(value_box);
}

function box_selected3 () {
    /* esta línea elimina la clase box-selected del primer elemento box1.*/
    box1.classList.remove('box-selected');
    /** esta línea elimina la clase check-selected del primer elemento check_bg1. */
    check_bg1.classList.remove('check-selected');
    /**esta línea elimina la clase icon-check del primer elemento icon_check1. */
    icon_check1.classList.remove('icon-check');

    /** esta línea elimina la clase box-selected del segundo elemento box2. */
    box2.classList.remove('box-selected');
    /**esta línea elimina la clase check-selected del segundo elemento check_bg2. */
    check_bg2.classList.remove('check-selected');
    /**esta línea elimina la clase icon-check del segundo elemento icon_check2. */
    icon_check2.classList.remove('icon-check');

    /**esta línea cambia el estado de la clase box-selected del tercer elemento box3 entre activado y desactivado. */
    box3.classList.toggle('box-selected');
    /**esta línea cambia el estado de la clase check-selected del tercer elemento check_bg3 entre activado y desactivado. */
    check_bg3.classList.toggle('check-selected');
    /**esta línea cambia el estado de la clase icon-check del tercer elemento icon_check3 entre activado y desactivado. */
    icon_check3.classList.toggle('icon-check');

      // Actualiza el valor de "value_box" a 3
    value_box = 3;
    /**esta línea muestra el valor de value_box en la consola del navegador.- */
    console.log(value_box);
}