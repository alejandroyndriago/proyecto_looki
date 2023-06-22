
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
    canvas.clearRect(0,0,150,100);

    let xcentro = 50;
    let ycentro = 75;
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


registrationForm.addEventListener("submit", function(event){


    //Referenciar datos
    const name = document.getElementById("name").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;

    //Crearemos un popup que nos diga que el registro fue exitoso
    Swal.fire({
        icon: 'success',
        title: 'Su mensaje fue enviado',
        text: 'Nuestro equi se comunicara con usted lo antes posible.',
        showConfirmButton: true,
        timer: 2000
    }).then(() => {

    });
  });