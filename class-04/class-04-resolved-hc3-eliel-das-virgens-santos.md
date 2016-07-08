# Node.js - Aula 04 - Exercício
**user:** [hc3](https://github.com/hc3)
**autor:** Eliel das Virgens
**date:** 20/03/2016

##01.Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da mesma.
```
function criaNome(nome,callback){
    if (typeof nome === 'string') {
        return callback(null,nome);
    } else {
        erro = new Error('Nome inválido!');
        return callback(erro,null);
    }
}

criaNome('Eliel', function(err, result){
    if (err) console.log(err);
    else console.log(result);
});
```

##02.Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.
```
function soma(a, b, callback){
    if (typeof a === 'number' && typeof b === 'number'){
        var resultado = a + b;
        return callback(null,resultado);
    } else {
        var erro = new Error('deu Zika');
        return callback(erro, null);
    }
}

soma(20,50,function(err,result){
    if (err) console.log(err);
    else console.log(result);
});
```

##03.Criar uma que calcular a média de dois valores e imprima essa média em uma outra função, como continuação da execução da mesma.
```
function calcularMedia(a, b, callback){
    if (typeof a === 'number' && typeof b === 'number'){
        var resultado = (a + b) / 2;
        return callback(null,resultado);
    } else {
        var erro = new Error('Valores inválidos');
        return callback(erro, null);
    }
}

calcularMedia(20,30,function(err,result){
    if (err) console.log(err);
    else console.log(result);
});
```

##04.Explicar a definição de continuação de uma função.
-A continuação de uma função, também chamado de callback é o ato de passar uma função como parâmetro de outra, isso acontecer porque as funções javascript são high order functions, e com isso podem ser atribuidas a variáveis ou passadas como parâmetro de outras funções ou seja se juntarmos isso as closures temos os callbacks vão seguir um padrão com o erro no primeiro parâmetro e o resultado no segundo, e com os callbacks podemos criar aplicações não blocantes.
