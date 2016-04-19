# Node.js - Aula 01 - Exercício
**user:** [hc3](https://github.com/hc3)
**autor:** Eliel das Virgens
**date:** 20/03/2016


##01.Explique como um processo síncrono e assíncrono roda no Node.js e dê uma exemplo
para cada .
-O processo síncrono ele aguarda o fim do processo para poder iniciar outro processo , enquanto 
o processo assíncrono não ele consegue receber outras requisiçoes e quando terminar ele chama um callback e com isso temos uma alta escalabilidade com Node.js

##02.como o v8 executa javascript? demonstre 1 exemplo com código ou imagem.
-Quando fazemos uma chamada de função ela entra no event loop já registra um callback que interage com o servidor e quando a operação está completa o event loop retorna o callback para a
função que o chamou.

##03.qual a diferença entre um sistema single para um multi-thread
-um sistema single thread tem apenas uma thread que quando é feita uma solicição fica bloqueada 
até que a tarefa que a thread está executando termine para que seja feita outra solicitaçãço 
o multi thread depois de feita uma solicitação pode-se fazer outra sendo assim criada uma nova thread.

##04.como a thread pool tem um tamanho padrão de 4 , o que acontece se você enviar 5 requisições ao banco.
-a quinta requisição fica aguardando alguma das 4 terminarem.

##05.como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção
-explicaria os benefícios iria começar com projetos pequenos , mostrar como a comunidade está inclinada ao javascript , dar exemplos de grandes coorporaçoes que adotaram a tecnologia.

##06.qual a versão do seu node?
```
hc3@darkSide:~/Bemean/Repositorios/be-mean-instagram-nodejs-exercises/class-01$ node -v
v5.6.0
```
##07.qual a versão do seu npm?
```
hc3@darkSide:~/Bemean/Repositorios/be-mean-instagram-nodejs-exercises/class-01$ npm -v
3.6.0
```
