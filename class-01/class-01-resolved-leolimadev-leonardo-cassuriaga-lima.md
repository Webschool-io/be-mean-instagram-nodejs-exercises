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

Javascript é uma linguagem baseada em protótipos com tipagem dinamica. O V8 trabalha criando classes escondidas conforme a necessidade de representar
o tipo que a propriedade esta sendo acessada. Isto ajuda muito na otimização, visto que o V8 consegue a partir disto agrupar objetos com as mesmas propriedades.
!['V8 Javascript'](http://thibaultlaurens.github.io/assets/themes/img/post/21-03-13-v8/transition.PNG)
 
 Referências:
 https://developers.google.com/v8/design?hl=en  
 http://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/  
 
## Qual a diferença entre um sistema single para um multi-thread?

Em um sistema single thread todas as requisições são enfileiradas, para uma requisição iniciar, a anterior deve ter sido finalizada.
Em um sistema mult thread mais de uma requisição pode ser inciada simultaneamente.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

A quinta requisição entra em uma fila de espera até que uma das outras quatro libere o acesso a esta.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Node é baseado em javascript, a linguagem que todo desenvolvedor de aplicações web e hibridas deveria ter um bom nível de conhecimento.
Tirando as particularidades do javascript, qualquer desenvolvedor de outra linguagem back-end ou programador javascript front-end terá uma curva
de aprendizagem pequena versus a produtividade possível.
É uma linguagem rápida, fácil de escalar que além de ser open source já esta sendo adotada por grandes players de mercado como netflix, pay pal e wallmart.
Alguns destes players divulgam com frequência números tanto de dedempenho quanto de produtividade ganhos com a adoção do NodeJS. 

## Qual a versão do seu `node`?

v5.0.0

## Qual a versão do seu `npm`?

3.3.6