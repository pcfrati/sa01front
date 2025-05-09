//! ESTILIZAÇÃO
document.addEventListener("DOMContentLoaded", () => {    // "DOMContentLoaded" faz com que a estilização seja colocada em espera até o HTML ser carregado
  
    const xilofone = document.querySelector('.xilofone');    // usado para selecionar um único elemento no documento HTML (o primeiro que aparecer e for correspondente a classe)
    if (xilofone) {    // if verifica se o objeto existe
      Object.assign(xilofone.style, {    // Object.assign copia todas essas caracteristicas e passa elas para varios elementos
        width: "99vw",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",    // coloca todos os elementos no centro do container
        position: "relative"
      });
    }
  
    const corpo = document.querySelector('.corpo');
    if (corpo) {
      Object.assign(corpo.style, {
        width: "900px",
        height: "600px",
        backgroundColor: "#806851",
        clipPath: "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)",    // usado para deixar no formato de trapézio, cada duas porcentagens é um canto, primeiro sua largura e depois altura
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        border: "4px solid #333"
      });
    }
  
    const botoes = document.querySelector('.botoes');
    if (botoes) {
      Object.assign(botoes.style, {  
        position: "absolute",
        display: "flex",
        alignItems: "flex-end",
        gap: "15px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "600px"
      });
    }
  
    const teclas = document.querySelectorAll('.tecla');  // chama todos os elementos da classe "tecla" utilizando apenas "tecla" pq uma class pode ter mais de uma palavra para nomea-la
    teclas.forEach(tecla => {
      Object.assign(tecla.style, {
        width: "100px",
        border: "none",
        borderRadius: "10px",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        boxShadow: "0 4px #333",
        transition: "transform 0.1s, filter 0.2s, box-shadow 0.2s",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom: "10px",
        userSelect: "none",
        border: "4px solid #333"
      });
  
      tecla.addEventListener("mouseover", () => {    // efeito visual às teclas do xilofone quando o mouse passa sobre elas
        tecla.style.filter = "brightness(1.4)";
        tecla.style.transform = "translateY(4px)";
        tecla.style.boxShadow = "0 0 #000";
      });
  
      tecla.addEventListener("mouseout", () => {    // efeito visual às teclas do xilofone quando o mouse sai delas
        tecla.style.filter = "";
        tecla.style.transform = "";
        tecla.style.boxShadow = "0 4px #333";
      });
    });
  
    const estilosEspecificos = {
      "do": { backgroundColor: "#FF4136", height: "605px", marginTop: "5px" },   // ao inves de chamar "tecla" chama a segun
      "re": { backgroundColor: "#FF851B", height: "580px", marginBottom: "10px" },
      "mi": { backgroundColor: "#FFDC00", height: "560px", marginBottom: "20px", color: "#333" },
      "fa": { backgroundColor: "#2ECC40", height: "530px", marginBottom: "35px" },
      "so": { backgroundColor: "#0074D9", height: "500px", marginBottom: "50px" },
      "la": { backgroundColor: "#B10DC9", height: "470px", marginBottom: "70px" },
      "si": { backgroundColor: "#7FDBFF", height: "430px", marginBottom: "90px", color: "#333" }
    };
  
    teclas.forEach(tecla => {
      // converte as classes da tecla em um array e procura se alguma dessas classes existe no objeto 'estilosEspecificos'
      const nota = Array.from(tecla.classList).find(cls => estilosEspecificos[cls]);
      if (nota) {
        Object.assign(tecla.style, estilosEspecificos[nota]); // se existir, ele aplica a estilização
      }
    });
});
  




//! FUNCIONAMENTO DAS TECLAS

// carrega os arquivos de áudio (1 para cada nota musical)
let Audio_do = new Audio("Notas/c.mp3");
let Audio_re = new Audio("Notas/d.mp3");
let Audio_mi = new Audio("Notas/e.mp3");
let Audio_fa = new Audio("Notas/f.mp3");
let Audio_sol = new Audio("Notas/g.mp3");
let Audio_la = new Audio("Notas/a.mp3");
let Audio_si = new Audio("Notas/b.mp3");

// toca os sons
function toca_do() {
    Audio_do.play();
    Audio_do.currentTime = 0.1;  // reinicia o áudio para o tempo 0.1 segundos toda vez que ele for tocado
}
function toca_re() {
    Audio_re.play();
    Audio_re.currentTime = 0.1;
}
function toca_mi() {
    Audio_mi.play();
    Audio_mi.currentTime = 0.1;
}
function toca_fa() {
    Audio_fa.play();
    Audio_fa.currentTime = 0.1;
}
function toca_sol() {
    Audio_sol.play();
    Audio_sol.currentTime = 0.1;

}
function toca_la() {
    Audio_la.play();
    Audio_la.currentTime = 0.1;
}
function toca_si() {
    Audio_si.play();
    Audio_si.currentTime = 0.1;
}

// atribuindo eventos de clique as notas (chamam as funções de toca_ quando as teclas são clicadas)
document.getElementById("c").addEventListener("click", toca_do);
document.getElementById("d").addEventListener("click", toca_re);
document.getElementById("e").addEventListener("click", toca_mi);
document.getElementById("f").addEventListener("click", toca_fa);
document.getElementById("g").addEventListener("click", toca_sol);
document.getElementById("a").addEventListener("click", toca_la);
document.getElementById("b").addEventListener("click", toca_si);

// função de captura de teclas pressionadas no teclado (chamam as funções de toca_ quando determinadas teclas do TECLADO do computador são clicadas)
document.onkeypress = function(evt) {  // define um evento para quando o usuário pressiona uma tecla no teclado
    var str = keyPressed(evt); // transforma a tecla pressionada em letra (ou número), armazenando o resultado na variável str
    if(str=='a' || str=='1') toca_do();
    if(str=='s' || str=='2') toca_re();
    if(str=='d' || str=='3') toca_mi();
    if(str=='f' || str=='4') toca_fa();
    if(str=='g' || str=='5') toca_sol();
    if(str=='h' || str=='6') toca_la();
    if(str=='j' || str=='7') toca_si();
};

// função auxiliar para descobrir qual tecla foi pressionada
function keyPressed(evt) {
  var key = evt.keyCode // pega o código da tela pressionada e salva na variável
  return String.fromCharCode(key); // recebe o código numérico da tecla e retorna o caractere correspondente a esse código
}