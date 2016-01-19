# NodeJS - Aula 01 - Exercício
autor: Wellerson Roberto

## 1) Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

### Processo síncrono

Em um processo síncrono, a execução fica parada esperando o término do método para continuar.

```
var contents = fs.readFileSync('test.txt').toString();
console.log(contents);
```

O método **readFileSync** faz a leitura de um arquivo de maneira síncrona. Então, a execução será parada e só voltará assim que o arquivo terminar de ser lido.

### Processo assíncrono

É no processo assíncrono que está a grande magia do Node.js, pois a execução não será parada e o resultado de tal função será passada através de um **callback**.

```
fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
```

Neste caso, o método **readFile** é assíncrono. Mesmo fazendo a leitura de um arquivo, o sistema não irá parar. Quando o método finalizar a leitura do arquivo, a função passada no terceiro parâmetro será executada passando um possível erro ou o resultado da leitura.

Pode-se fazer ainda a analogia de um restaurante. Imagine um restaurante trabalhando de modo síncrono vs assíncrono:

Modo síncrono -> Após um cliente fazer um pedido, todo o restaurante será bloqueado. Apenas a comida dele será feita, enquanto todos os outros clientes posterior terão que esperar o término do pedido dele para o seu pedido finalmente iniciar. Após o pedido desse cliente ser executado, o restaurante atende outro pedido e assim vai...

Modo assíncrono -> O restaurante irá atender vários pedidos por vez.

## 2) Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O V8 é bastante rápido pois basicamente compila o código JavaScript para o código nativo da máquina antes de executá-lo, permitindo que ele rode na velocidade de um código binário compilado. O código compilado ainda é reotimizado em tempo de execução.

![](https://raw.githubusercontent.com/wellerson010/be-mean-exercicios/master/nodejs/class01.png)

## 3) Qual a diferença entre um sistema single para um multi-thread?

O sistema single-thread usa apenas um único processo para ser executado, enquanto o multi-thread faz uso de dois ou mais processos. Embora o sistema multi-thread possa ser mais rápido, pois pode fazer o uso dos múltiplos cores do processador para executar mais de uma tarefa ao mesmo tempo, ele acaba também fazendo mais uso de memória.

## 4) Como o Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Das 5 requisições, 4 irão ser executadas enquanto uma irá ficar no estado **idle** (dormindo), esperando uma dessas terminar para então ser executada. É importante ressaltar que é possível aumentar o número do Thread Pool para até 128.

## 5) Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Mostraria primeiramente onde o Node.JS é usado e como ele melhorou a produção em grandes empresas, como o Paypal e o Linkedin. Diria também que o custo seria diminuído, visto que precisariamos de servidores menos potentes, e portanto mais baratos, para ter o mesmo número de acessos que a gente tem com os servidores atuais. Além disso, citaria o fato de usar apenas uma única linguagem no back-end e no front-end, o que facilitaria demais aqueles que são especializados mais no front-end a também ajudarem no back-end, e se tornarem mais independentes.

## 6) Qual a versão do seu Node?

```
D:\Developer\BlogBeMean>node -v
v5.0.0
```
## 7) Qual a versão do seu NPM?

```
D:\Developer\BlogBeMean>npm -v
3.3.6
```
