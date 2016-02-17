# Nodejs - Aula 01 - Exercício
Autor: Igor luíz

#### 1. Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

**síncrono**: Aqui os processos são realizados um depois do outro, ou seja, tendo dois processos, o segundo só começa quando o primeiro terminar.

**assíncrono**: Aqui os processos são realizados paralelamente, ou seja, tendo dois processos, eles executam juntos.

![exemplo](http://www.diogomatheus.com.br/blog/wp-content/uploads/2013/02/Requisicao_Analogia_Pizza.jpg)

#### 2. Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O V8 transforma o código escrito em javacript e compila para linguagem de maquina, manipulando alocação de memória.

_Exemplo:_

>**I/O**  
>Código JavaScript ==> V8 ==> libuv ==> Sistema Operacional
>
>**Callback**  
>Sistema Operacional ==> libuv ==> V8 ==> Código JavaScript

#### 3. Qual a diferença entre um sistema single para um multi-thread?

Com o _single thread_ vocẽ econômiza mais memória, pois você pode ter a instancia de um processo por vez, já com o _multi-thread_ você pode ter os processos e os auxiliares do processo além dos outros threads rodando em paralelo.

#### 4. Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Como ele é I/O bloqueante, 1 das requisições vai ter que esperar as 4 outras terminarem, entretando um _cluster_ resolveria o problema.


#### 5. Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Demonstraria o funcionamento do Node de forma simples e com linguagem mais coloquial o possível(tratando de alguém que não sacasse dos paranauê), resaltando como ele poderia dimuir o tempo de trabalho, dor de cabeça e aumentando eficiência e satifação do clientes dele.


#### 6. Qual a versão do seu `node`?

v5.5.0

#### 7. Qual a versão do seu `npm`?

3.3.12