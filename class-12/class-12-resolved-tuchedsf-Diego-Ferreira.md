# Node.js - Aula 12 - Exercício  
**user:** [tuchedsf](https://github.com/tuchedsf)  
**autor:** Diego Ferreira  
**data:** 1467668568530

O quark que utilizei para este exercício foi a validacão do isbn-13, utilizado para livros deste 2007, podendo ajudar quem deseja construir alguma aplicação que catalogue livros ou bibliotecas.

Fonte: https://pt.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-13

>A edição de 2005 do manual oficial do International ISBN Agency,[10] que abrange os ISBNs emitidos a partir de Janeiro de 2007, descreve como é efectuado o calculo, do dígito de verificação, do ISBN de 13 dígitos. O cálculo do dígito de verificação do ISBN-13 começa com os primeiros 12 dígitos dos 13, multiplicando alternadamente por 1 ou 3 , da esquerda para a direita, em seguida, estes produtos são somados módulo 10 para dar um valor que varia de 0 a 9, que subtraído a 10, que deixa um resultado de 1 a 10. Um zero (0) substitui 0 dez (10), garantindo assim, que o resultado da verificação não é maior que um dígito.

Link para o repositório: https://github.com/Webschool-io/Node-Atomic-Design_QUARKS/pull/10

Pasta: isISBN-13

Arquivos:

isISBN-13.js
```js
'use strict';
module.exports = (value) => {

  const arrayValues = value.toString().split("").map(Number);
  //console.log(arrayValues);
  let digCalculado = 0;
  //Se isbn nao tiver 13 posiçoes já pode ser considerado inválido
  if (arrayValues.length != 13 ) return false;
  /*
    1 passo:
    da posicao 1 a 12 do array deve-se multiplicar da seguinte forma:
    indice impar multiplica-se por 1
    indice par multiplica-se por 3
   */ 
  arrayValues.forEach(function (element,index){
    if (index != arrayValues.length -1) {
        //console.log("index: " + index + " element: " + element);
        if(index % 2 === 0){
            digCalculado = digCalculado + element;
        }else {
            digCalculado = digCalculado + (element * 3);
        }
    }
  });
  /* passo2:
  - e feito o mod 10 sobre a soma calculada e este valor subtraido de 10.
  - feito isso o resultado mod 10 deve ser igual ao elemento verificador a ultima posiçao do array
  */
  digCalculado = (10 - (digCalculado % 10)) % 10;

  /* passo3:
    comparacao se o digito calculado é igual ao passado no array
  */
  if (digCalculado === arrayValues[arrayValues.length -1]) return true;

  return false;
}
```

isISBN-13.test.js
```js
'use strict';

const describes = [
  {type: true
    , message:"ISBN válido"
    , values: [9780306406157, 9788525423498, 9788581303079] 
  }
  , {type: false
    , message:"ISBN inválido"
    , values: [1111111111111, 123, 2367463526234, 9780306406156] 
  }
];

//chama a classe generica de testes informando qual o arquivo do teste, e quais os testes a serem feitos.
const test = require('./module.tests.is.js')('isISBN-13', describes);
```


module.tests.is.js
```js

'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {
  const test =  (values, msg, valueToTest) => {
    values.forEach((element, index) =>{
      it(msg + " "+ element + " ", () =>{
       expect(require('./'+ testName)(element)).to.equal(valueToTest);
    });
   });
  }
  
  describe (testName, ()=> {
    describes.forEach((element, index) => {
      describe(element.message, () => {
        test(element.values,element.message, element.type)
      });
    });
  });
};
```

