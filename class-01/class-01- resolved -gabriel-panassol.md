# Node.js - Aula 01 - Exercício
**user:** gpanassol
**autor:** Gabriel Panassol
**date:**  1449708572443

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Por padrão qualquer função é assíncrona por esse motivo é necessário uma função que executará após a finalização do processo. Esse função é chamada de callback. Já os processos síncronos não espera seu processo finalizar podendo assim a função continuar com a execução do script. Esse processo continua executando paralelamente.

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

Como vimos na aula e slides o V8 nada mais é que um interpretador de javascript. Ele é como uma JVM do Java. O V8 é usado no Goole Chrome. Foi criado em C++ e é open-source.
No site <a href="https://developers.google.com/v8/get_started#hello-world">Developers Google</a> podemos ver um exemplo de como um Hello Word é executado. Veja:

```
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "include/libplatform/libplatform.h"
#include "include/v8.h"

using namespace v8;

class ArrayBufferAllocator : public v8::ArrayBuffer::Allocator {
 public:
  virtual void* Allocate(size_t length) {
    void* data = AllocateUninitialized(length);
    return data == NULL ? data : memset(data, 0, length);
  }
  virtual void* AllocateUninitialized(size_t length) { return malloc(length); }
  virtual void Free(void* data, size_t) { free(data); }
};


int main(int argc, char* argv[]) {
  // Initialize V8.
  V8::InitializeICU();
  V8::InitializeExternalStartupData(argv[0]);
  Platform* platform = platform::CreateDefaultPlatform();
  V8::InitializePlatform(platform);
  V8::Initialize();

  // Create a new Isolate and make it the current one.
  ArrayBufferAllocator allocator;
  Isolate::CreateParams create_params;
  create_params.array_buffer_allocator = &allocator;
  Isolate* isolate = Isolate::New(create_params);
  {
    Isolate::Scope isolate_scope(isolate);

    // Create a stack-allocated handle scope.
    HandleScope handle_scope(isolate);

    // Create a new context.
    Local<Context> context = Context::New(isolate);

    // Enter the context for compiling and running the hello world script.
    Context::Scope context_scope(context);

    // Create a string containing the JavaScript source code.
    Local<String> source =
        String::NewFromUtf8(isolate, "'Hello' + ', World!'",
                            NewStringType::kNormal).ToLocalChecked();

    // Compile the source code.
    Local<Script> script = Script::Compile(context, source).ToLocalChecked();

    // Run the script to get the result.
    Local<Value> result = script->Run(context).ToLocalChecked();

    // Convert the result to an UTF8 string and print it.
    String::Utf8Value utf8(result);
    printf("%s\n", *utf8);
  }

  // Dispose the isolate and tear down V8.
  isolate->Dispose();
  V8::Dispose();
  V8::ShutdownPlatform();
  delete platform;
  return 0;
}
```

## Qual a diferença entre um sistema single para um multi-thread?

O Node.js trabalha apenas com uma theard, podendo ser criada outras. Ele é um exemplo claro de um sistema single. Devido o fato dele trabalha com um numero menor de thread suas performance é superior ao sistemas multi-thread. O Node possui um sistema chamado Event Loop que gerencia todas as requisições evitando assim a criação de diversas thread.
Um sistema multi-thread como o próprio nome diz ele trabalha com diversas threads como o apache que cria diversas threads ao longo do seus processo tendo problema de alocação de memória e com isso lentidão no sistema.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Essa requisição ficará na minha Task Queue e após o ciclo "libera um espaço" ele passa para o meu Thread Pool e consequentemente para o Completed Tasks.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

O Node.js é muito mais performatico e eu consigo criar um sistema com menos pessoas. Podemos usar o case da PayPal que conseguiu diminuir 30% o número de código e 40% menos arquivos. Ele conseguiu diminuir em 35% a requisição das paginas de testes. 

## Qual a versão do seu `node`?

```
Gabriel@gabriel MINGW64 ~
$ node -v
v5.0.0
```

## Qual a versão do seu `npm`?

```
Gabriel@gabriel MINGW64 ~
$ npm -v
3.3.6
```