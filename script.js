// Sons das teclas
let Audio_do = new Audio("Notas/c.mp3");
let Audio_re = new Audio("Notas/d.mp3");
let Audio_mi = new Audio("Notas/e.mp3");
let Audio_fa = new Audio("Notas/f.mp3");
let Audio_sol = new Audio("Notas/g.mp3");
let Audio_la = new Audio("Notas/a.mp3");
let Audio_si = new Audio("Notas/b.mp3");

// Funções para tocar os sons e animar as teclas

function toca_do() {
    Audio_do.play();
    Audio_do.currentTime = 0.1;
    anima_tecla("c", "#FF4136");
}

function toca_re() {
    Audio_re.play();
    Audio_re.currentTime = 0.1;
    anima_tecla("d", "#FF851B");
}

function toca_mi() {
    Audio_mi.play();
    Audio_mi.currentTime = 0.1;
    anima_tecla("e", "#FFDC00");
}

function toca_fa() {
    Audio_fa.play();
    Audio_fa.currentTime = 0.1;
    anima_tecla("f", "#2ECC40");
}

function toca_sol() {
    Audio_sol.play();
    Audio_sol.currentTime = 0.1;
    anima_tecla("g", "#0074D9");
}

function toca_la() {
    Audio_la.play();
    Audio_la.currentTime = 0.1;
    anima_tecla("a", "#B10DC9");
}

function toca_si() {
    Audio_si.play();
    Audio_si.currentTime = 0.1;
    anima_tecla("b", "#7FDBFF");
}

// Atribuindo eventos de clique aos botões
document.getElementById("c").addEventListener("click", toca_do);
document.getElementById("d").addEventListener("click", toca_re);
document.getElementById("e").addEventListener("click", toca_mi);
document.getElementById("f").addEventListener("click", toca_fa);
document.getElementById("g").addEventListener("click", toca_sol);
document.getElementById("a").addEventListener("click", toca_la);
document.getElementById("b").addEventListener("click", toca_si);

// Função de captura de teclas pressionadas no teclado
document.onkeypress = function(evt) {
    var str = keyPressed(evt);

    if(str=='a' || str=='1') toca_do();
    if(str=='s' || str=='2') toca_re();
    if(str=='d' || str=='3') toca_mi();
    if(str=='f' || str=='4') toca_fa();
    if(str=='g' || str=='5') toca_sol();
    if(str=='h' || str=='6') toca_la();
    if(str=='j' || str=='7') toca_si();
};

// Função para capturar a tecla pressionada
function keyPressed(evt) {
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    return String.fromCharCode(key);
}