# NodeJS - Aula 01 - Exercício
**Autor:** Rafael Crispim Ignácio

**Data** 1451226657631

# 1. Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
- Processos Síncronos

Nos processos síncronos, exste uma dependencia da finalização de um método com a utilização deste retorno após o mesmo. Neste caso não podemos dar prosseguimento em uma rotina até que determinado método tenha terminado. Isto leva ao enfileiramento de processos, onde estes são executados em fila.

```js
// Exemplo na forma síncrona
var files = fs.readdirSync("/home/user");

console.log(files);
```

- Processos assíncronos

Nos processos assíncronos utilizamos funções de retorno chamadas de `callback`. Estas funções nos permitem chamar métodos sem esperar o seu término, pois quando isto ocorrer a função de retorno será executada e a rotina será concluída ou dará prosseguimento ao processo. É bastante indicada para recursos que são mais lentos com por exemplo um acesso ao disco.

```js
// Exemplo na forma assíncrona
var fs = require("fs");

fs.readdir("/home/user", function(err, files){
  console.log(files);
});
```

# 2. Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
O V8 compila o javaScript diretamente em código de máquina na primeira vez que é executado. Não existe bytecode intermediário nem interpretador. Ao executar ele cria estruturas ocultas dos objetos conforme necessário e utiliza um cache embutido para facilitar o acessos aos mesmos. Conforme a necessidade estes objetos são atualizados ou descartados.

Por exemplo, o código abaixo demonstra um código em javascript onde uma determinada propriedade de uma classe é acessada.

```js
point.x
```

O código acima gera a seguinte interpretação no V8:

```c++
# ebx = ponteiro para o objeto
cmp [ebx,<hidden class offset>],<cached hidden class>
jne <inline cache miss>
mov eax,[ebx, <cached x offset>]
```

# 3. Qual a diferença entre um sistema single para um multi-thread?
A diferença está na quantidade de threads que o sistema pode utilizar simultaneamente. No single somente é possível utilizar 1 thread e no multi é possível utilizar 1 ou mais.

# 4. Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
Neste caso a quinta requisição deve aguardar até que uma das 4 threads seja concluída.

# 5. Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
Acredito que a melhor maneira de `vender o peixe` é criando um protótipo e comparando com a outra solução. Não creio que exista uma bala de prata onde todos os problemas devem ser solucionados com apenas uma ferramenta, desta forma precisamos demonstrar as vantagens conforme as opções disponíveis.

# 6. Qual a versão do seu `node`?

```
~:$ node -v
v5.0.0
```

# 7. Qual a versão do seu `npm`?

```
:~$ npm -v
3.3.6
```
