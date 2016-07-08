## Class 01 - Estevan Jantsk

1. Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo de cada.
##### Async


```javascript
var filesystem = require("fs");

filesystem.readFile("arquivoex.txt", "utf8", function(error, data) {
  console.log(data);
});
```
No exemplo acima, a função readFile recebe como parâmetro o nome do arquivo que será lido  e como callback uma função. Sendo executada de forma assíncrona outras leituras de arquivos poderiam ser executadas ao mesmo tempo. Sempre que a leitura do arquivo termina, a função de callback irá printar o seu conteúdo no log. Por ser async, o desempenho da aplicação não irá prejudicar no sistema.
##### Sync


```javascript
var filesystem  = require("fs");
var data = filesystem.readFileSync("arquivoex.txt", "utf8");

console.log(data);
```
Já neste outro exemplo, a função readFileSync irá receber como parâmetro o nome do arquivo que seá lido, porém como ela é executada de forma síncrona os códigos abaixo dela não serão executados enquanto ela não terminar de ler o arquivo, isso é extremamente ruim, pois não irá possibitar outras tarefas serem executadas enquanto essa outra não terminar.
2. Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

javascript code -> Chrome V8 Engine -> Native Machine Code

O V8 compila código feito em JS para código nativo de máquina antes de executá-lo.

3. Qual a diferença entre um sistema single para um multi-thread?

Depende, no caso do Node, ele é single thread no entanto ele conta com o event loop que faz todo o gerenciamento de recebimento de operações, cadastramentos de callbacks e quando a operação estiver completa disparar o callback para quem fez a requisição. Já para um sistema multi thread, cada operação vira uma thread e cada thread tem um custo de memória que pode impactar no funcionamento e disponibilidade do seu sistema.

4. Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Se todas as threads estiverem ocupadas os próximos requests começarão a serem enfileirados e executados de acordo com a disponibilidade.

5. Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Com certeza iria mostrar o case de sucesso do Paypal que mostra como eles ganharam demais ao migrado do java para node.js.

Pontos interessantes: redução de código (linhas escritas), redução na quantidade de arquivos (comparado aos XML's da vida do Java), velocidade no desenvolvimento e também a redução na quantidade de pessoas que precisaria para realizar um projeto. E principalmente por ser TUDO JAVASCRIPT s2.
6. Qual a versão do seu 'node'?
```sh
node -v
v4.4.4
```
7. Qual a versão do seu 'npm'?
```sh
npm -v
2.15.1
```