# NodeJS - Aula 01 - Exercício
**Autor:** Rony souza (user: rxon7)
**Data** 28/06/2016

# 1. Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

```

**Síncrono**:  Em um processo síncrono, a medida que os usuários irão acessá-la, ela vai gerando 
múltiplos processos no servidor e apenas uma função será executada por vez, como por exemplo
uma espera de um pedido no restaurante que tem apenas um garçon e só um cliente será atendido
 por vez demorando muito mais para ser atendido.


**Assíncrono**: No processo assíncrono várias funções são executadas por vez. O Servidor responde a
primeira Requisição da fila e aguarda a sua chamada de retorno.  o cliente envia a requisição 
o nodejs responde a primeira requisição e aguarda a chamada de retorno, ao mesmo tempo atende
outras requisições e fica escutando a chamada de CALLBACK das outras requisições enviadas. 

Voltando ao exemplo do restaurante, no modelo assíncrono, o garçom pegaria o pedido do cliente, 
passaria para a cozinha, e enquanto a cozinha prepara o prato, o garçom atende a segunda mesa.

```

# 2. Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O V8 compila o JavaScript para c++ alocando esses espaços na memoria criando classes escondidas, em tempo de execução,
a fim de ter uma representação interna do sistema de tipo e para melhorar o tempo de acesso as propriedades.

Exemplo: 

!['Imagem V8'](http://i.imgur.com/NZlw2Z5.png)




```

# 3. Qual a diferença entre um sistema single para um multi-thread?

```

Com o single thread vocẽ econômiza mais memória, pois você pode ter a instancia de um 
processo por vez, já com o multi thread você pode ter os processos e os auxiliares 
do processo além dos outros threads rodando em paralelo.

```

# 4. Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

```
Como ele é I/O bloqueante, uma das requisições vai ter que esperar as 4 outras terminarem,
Neste caso, a quinta requisição, entrará na fila de execução, aguardando que o alguma
requisição seja entregue para que ela entre em execução.

```

# 5. Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

```

Mostraria cases de sucesso como o paypall e falaria de suas vantagens e da economia tanto em codigo como eu 
mão de obra e equipes que já estão implementando em suas empresas e como vem ajundando no desenvolvimento rapido
e com baixo custo.

```

# 6. Qual a versão do seu `node`?

```
node -v
v6.2.0


```

# 7. Qual a versão do seu `npm`?

```
npm -v
3.8.9

```