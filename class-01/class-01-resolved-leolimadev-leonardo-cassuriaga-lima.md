# Node.js - Aula 01 - Exercício  
**user:** [leolimadev](https://github.com/leolimadev)  
**autor:** LEONARDO CASSURIAGA LIMA  
**date:** Tue Dec 15 2015 22:27:28 GMT-0200  

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Um processo síncrono bloqueia o event loop enquanto processa, ele não pede para o kernel fazer uma gravação síncrona no sistema de arquivos.
Exemplo:

fs.readFileSync('/arquivo.txt', "utf8");  

Note que como a execução é síncrona não existe a chamada de um callback, diferente do exemplo abaixo que é assincrono.  

Um processo assincrono não bloqueia o event loop enquanto processa, não fazendo outros processos aguardarem pelo fim da execução.

fs.readFile('/arquivo.txt', function (err, data) {  
  if (err) throw err;  
  console.log(data);  
});  

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.


## Qual a diferença entre um sistema single para um multi-thread?
## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
## Qual a versão do seu `node`?
## Qual a versão do seu `npm`?