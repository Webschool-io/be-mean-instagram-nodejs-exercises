# Node.js - Aula 04 - Exercício
**Autor:** Rafael Crispim Ignácio

**Data:** 1451444633263

## 1. Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.

```js
function print(name, callback) {
    if (typeof name == "string") {
        return callback(null, name);
    } else {
        var err = new Error("Tipo inválido, você deve informar uma String.");
        return callback(err, null);
    }
}
print("Rafael", function(err, name) {
    if (err) throw err;
    console.log(name);
});
```

## 2. Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.

```js
function sum(x, y, callback) {
    if (typeof x == "number" && typeof y == "number") {
        return callback(null, (x + y));
    } else {
        var err = new Error("Tipo inválido, você deve informar somente números.");
        return callback(err, null);
    }
}
sum(10, 20, function(err, result){
    if (err) throw err;
    console.log("SUM Result: " + result);
});
```

## 3. Criar uma que calcular a média de dois valores e imprima essa média uma outra função, como continuação da execução da mesma.

```js
function avg(x, y, callback) {
    var err = null;
    if (typeof x != "number" || typeof y != "number") {
        err = new Error("Tipo inválido, você deve informar somente números.");
    } else if (y === 0) {
        err = new Error("O divisor não pode ser igual a 0.");
    }
    return (err) ? callback(err, null) : callback(null, (x / y));
}
avg(10, 20, function(err, result){
    if (err) throw err;
    console.log("AVG Result: " + result);
});
```

## 4. Explicar a definição de continuação de uma função.
Até onde eu entendi, a continuação de uma função pode ser definida como uma função que será executada a partir de outra, ou seja, é uma função passada como parâmetro(`callback`) em uma função principal e é chamada no momento de execução deste método.
