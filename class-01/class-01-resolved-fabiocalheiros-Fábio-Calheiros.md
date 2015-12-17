# NodeJS - Aula 01 - Exercício
**Autor:** Fábio Calheiros (conta: fabiocalheiros)
**Data** 1450308789659

# 1. Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

```

Síncrono: Em um processo síncrono, a medida que os usuários irão acessá-la, ela vai gerando múltiplos processos no servidor. Um sistema de arquitetura síncrono vai enfileirar cadarequisição que são realizadas ao mesmo tempo e depois ele vai processando, uma a uma. Este modelo não permite múltiplos processamentos ao mesmo tempo. Enquanto uma requisição é processada, as demais ficam em espera, ou seja, a aplicação bloqueia os demais processos de fazer I/O no servidor, mantendo-os em um pequeno período de tempo numa fila de requisições ociosas.

Exemplo Síncrono:

var fs = require('fs'),
    filenames,
    i,
    processId;

filenames = fs.readdirSync(".");
for (i = 0; i < filenames.length; i++) {
    console.log(filenames[i]);
}
console.log("Ready.");

processId = process.getuid();

Assíncrono: O Servidor responde a primeira Requisição da fila e aguarda a sua chamada de retorno.
Ao mesmo tempo que atende a outras requisições ele fica atento a chamada de CALLBACK das outras requestes enviadas anteriormente.

Exemplo Assíncrono:

var fs = require('fs'),
    processId;

fs.readdir(".", function (err, filenames) {
    var i;
    for (i = 0; i < filenames.length; i++) {
        console.log(filenames[i]);
    }
    console.log("Ready.");
});

processId = process.getuid();


```

# 2. Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O V8 compila o JavaScript para c++ alocando esses espaços na memoria criando classes escondidas, em tempo de execução,
a fim de ter uma representação interna do sistema de tipo e para melhorar o tempo de acesso as propriedades.

Exemplo:
https://www.future-processing.pl/wp-content/uploads/2015/04/threads-in-node.ja_.png


```

# 3. Qual a diferença entre um sistema single para um multi-thread?

```

Single-threded tem apenas uma thread que está executando todo o código no aplicativo, baseado em uma fila.
Multi-threaded tem mais de uma uma thread em execução ao mesmo tempo e pode ser executado simultaneamente, cada qual com usa fila de execuções.


```

# 4. Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

```

Neste caso, a quinta requisição, entrará na fila de execução, aguardando que o alguma requisição seja entregue para que ela entre em execução.
Para alterarmos isso, podemos usar a variavel "UV_THREADPOOL_SIZE" que torna posivel alterar a quantidade de Thread Pools que nossa aplicação vai receber.
Exemplo: UV_THREADPOOL_SIZE = 5


```

# 5. Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

```

Na verdade já vendi o peixe para o meu chefe.
Em uma conversa outro dia, expliquei a ele as novas tendências de como o node funciona.
Toquei em diversos assuntos como: 
- o tempo de resposta é muito menor do que um site feito em php.
- A conversão de mídias, como mobile, desktop e web, por se tratar de código javascript é relativamente facil
- Mencionei um problema que tivemos recentemente com uploads de vídeos, onde o node possui recursos que não so possibilita isso, como também não salva o arquivo no servidor e sim em um banco de dados.
- Mencionei que ferramentas como o paypal, popkorn time, spotify, netiflix, todas elas utilizam nodejs.
- Expliquei também como o node é eficiente quando se trata de escabilidade, ou seja a medida de que a aplicação cresça é possivel como o mongoDb por exemplo dividir essas informações em variados servidores.


```

# 6. Qual a versão do seu `node`?

```
fabio@fabio-Inspiron-7520:~$ node -v
v5.2.0


```

# 7. Qual a versão do seu `npm`?

```

fabio@fabio-Inspiron-7520:~$ npm -v
3.3.12


```