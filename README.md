# sa01front
Primeira atividade somativa de front-end.

OIIIIIIII oi

# Xilofone Digital Interativo

Este projeto consiste em um xilofone virtual desenvolvido com HTML e JavaScript, com foco em interatividade, estilo visual e usabilidade via mouse e teclado. A proposta principal foi explorar manipulação de DOM, estilização dinâmica e eventos de entrada.

## Funcionalidades

- **Interação com o usuário**: as teclas respondem a cliques e a teclas do teclado (tanto números quanto letras).
- **Estilização dinâmica via JavaScript**: toda a interface foi estilizada diretamente com JS, sem uso direto de arquivos CSS para os elementos principais.
- **Feedback visual**: as teclas têm efeitos visuais ao serem pressionadas ou ao passar o mouse.
- **Reprodução de áudio**: cada tecla dispara um arquivo `.mp3` correspondente a uma nota musical.

## Tecnologias utilizadas

- **HTML5** – estrutura do layout.
- **JavaScript** – manipulação do DOM, controle de eventos, reprodução de áudio e aplicação de estilos.

## Desafios enfrentados

- **Estilização via JavaScript**: a estilização foi inicialmente feita utilizando CSS, mas após sua finalização ela foi convertida pra JS. 
- **Ordem de carregamento dos elementos**: inicialmente, os estilos eram aplicados antes do DOM estar pronto, o que causava falhas. A solução foi encapsular a lógica dentro do evento `DOMContentLoaded`.
- **Cursor personalizado**: houve tentativa de aplicar um cursor personalizado via GitHub raw URL, mas a política de CORS e o tipo do arquivo impediram o carregamento direto.
- **Responsividade e centralização dos elementos**: garantir que o xilofone permanecesse centralizado e proporcional em diferentes larguras de tela exigiu ajustes com `vw`, `vh` e `transform`.
