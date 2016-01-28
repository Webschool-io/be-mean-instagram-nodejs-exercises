# Node.js - Aula 01 - Exercício
autor: **Sergio Diniz Correia**

# 1 - Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
Em um processo **Síncrono**, uma requisição é enviada e o processo remetente permanecesse bloqueado até que ocorra uma resposta, isso significa que não é possível enviar novas requisições até que a primeira requisição enviada, a que se encontra em processo, seja finalizado. Desta forma, podemos dizer que existe sincronismo entre as requisições.

Para entendermos melhor esse processo, imagine uma fila que vende ingressos de cinema. Quando você está na fila, você precisa esperar que a pessoa que esta na sua frente escolha qual filme ela quer assistir, quantas entradas, qual a sala e o horário, pagar e finalmente a atendente entregar, como resposta, o bilhete de entrada. Neste caso, a atendente só pode atender um cliente na fila por vez.

Em um processo **Assíncrono**, não existe sincronismo, ou seja, o processo não ficará bloqueado por já esta atendendo uma requisição, isso quer dizer que podemos enviar várias requisições em paralelo, neste caso, cada resposta é enviada quando estiver pronta.

Para entendermos melhor esse processo, imagine que você está em um bar e quer comer um espetinho e carne, você chama o garçom, faz o pedido e ele vai para o churrasqueiro dizer que precisa de um espetinho de carne, e então o churrasqueiro começa a ajeitar o pedido, porem, enquanto isso acontece, o garçom esta livre apara atender outras mesas e, da mesma forma, entregar o pedido ao churrasqueiro. Quando o espetinho finalmente estiver pronto, o churrasqueiro repassa o espetinho para o garçom que entrega o pedido.


# 2 - Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
O interpretador V8, ou maquina virtual javascript, é uma ferramenta desenvolvida em c++ e tem como função, acelerar o desempenho da aplicação compilando código javascript para linguagem de maquina.

![alt text](http://image.slidesharecdn.com/wherenode-140123132101-phpapp02/95/where-nodejs-meets-ios-54-638.jpg)


# 3 - Qual a diferença entre um sistema single para um multi-thread?
A característica de sistema **Singlethread** é que ele só consegue suporta apena um programa no seu espaço de endereçamento, ou seja, o sistema fica bloqueado ate o seu termino, isso pode ser um problema pois demanda muito consumo de diversos recursos do sistema. Sempre que um processo é criado, o sistema deve alocar recursos para cada processo, consumindo tempo de processador neste trabalho. 

Já em um sistema **Multithread**, cada processo pode responder a várias solicitações concorrentemente ou mesmo simultaneamente, caso haja mais de um processador.


# 4 - Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
Caso haja um numero maior de requisições do que o espaço alocado para a Thread Pool, as requisições sobressalentes são colocadas em uma espece de fila de esperara, onde ficam aguardando que uma thread seja liberada para receber uma nova requisição.

Apesar do valor padrão ser 4, esse numero pode ser alterado ate 128.

```
Its default size is 4, but it can be changed at startup time by setting the UV_THREADPOOL_SIZE environment variable to any value (the absolute maximum is 128).
```
referencia: [libuv](http://docs.libuv.org/en/v1.x/threadpool.html)

# 5 - Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
Para poder mostrar as vantagens e o poder do Node.js, eu faria:
+ uma pesquisa com comparações entre o Node e a linguagem principal que a empresa usa, 
+ mostra também o quando a linguem pode ter um desenvolvimento ágil, 
+ ter um alto desempenho, 
+ ter uma comunidade ativa e crescente, 
+ diversos materiais na internet, 
+ ter uma linguagem que pode ser usada tanto no back como no front-end 
+ e um curso gratuito e muito foda na Webschool.io para treinamento.



# 6 - Qual a versão do seu node?
```javascript
Sergios-MacBook-Pro:~ sergiodiniz$ node -v
v5.5.0

```


# 7 - Qual a versão do seu npm?
```javascript
Sergios-MacBook-Pro:~ sergiodiniz$ npm -v
3.3.12

```