# Node.js - Aula 08 - Exercício

**user:** [sostenesfreitas](https://github.com/sostenesfreitas)

**autor:** Sóstenes Freitas

#Indice

#####[Exercicio 1](#1---criar-um-middleware-pre-com-um-erro-e-propagar-o-erro-para-quem-o-chamou-salvar-o-result-e-botar-no-md-deste-exercício)
#####[Exercicio 2](#2---adicione-o-módulo-de-log-aos-dois-schemas-do-blog-e-faça-com-que-gere-um-arquivo-blog-modelsmd-com-pelo-menos-6-operações-no-blog-save-ou-delete) 
#####[Exercicio 3](#3---crie-um-middleware-usando-o-exemplo-do-blog-para-gera-um-log-com-nome-titulo-dos-post-que-foi-buscado-dica-use-o-find)
#####[Exercicio 4](#4-insira-5-pokemons-novos-na-coleção-pokemons-escolha-3-e-os-adicione-em-um-array-e-uma-nova-coleção-chamada-meus-pokemons-utilizando-o-objectid-adicione-o-required-em-campos-que-ache-obrigatório-no-schema-do-pokemon)
#####[Exercicio 5](#5-crie-um-schema-de-exemplo-com-validação-para-os-campos-utilizar-arquitetura-atômica-ou-seja-cada-campo-sendo-um-schema-separado)
#####[Exercicio 6](#6-dê-3-exemplos-diferentes-para-cada-utilizando-as-funções)
#####[Exercicio 7](#7-crie-1-schema-com-todo-crud-funcional-e-métodos-especiais-que-agrupe)
#####[Exercicio 8](#8-crie-1-schema-para-password-com-criptografia-e-arquitetura-atômica)
#1 - Criar um middleware pre com um erro e propagar o erro para quem o chamou, salvar o result e botar no md deste exercício.
**middleware-erro.js**
```JS
'use strict';
const schema = require('./schema.js');
const mongoose = require('mongoose');
module.exports = schema;

schema.pre('save', (next) => {
    const err = new Error('save erro');
    next(err);
});

```
**app.js**
```JS
'use strict';
require('./db/config')
const mongoose = require('mongoose');
const schema= require('./middleware-erro.js');
const model = mongoose.model('test', schema);

const data = {
	name: "Blastoise"
   ,type: "Water"
   ,description:"Mega"
   ,attack: 100
   ,defense: 50
}
const poke = new model(data);

poke.save(err => {
	if (err) console.log(err);
});
```
**Resultado**
```
╭─miojo at corsair in ~/Documentos/Projetos/workshop-be-mean/mongoose-atomic using
╰─○ node app.js
Error: save erro
```
###[Volta Pro Indice](https://github.com/sostenesfreitas/be-mean-instagram-nodejs-exercises/blob/master/class-08/class-08-resolved-sostenesfreitas-Sostenes-freitas.md#indice)
#2 - Adicione o módulo de log, aos dois schemas do blog, e faça com que gere um arquivo blog-models.md com pelo menos 6 operações no blog save() ou delete().
**mid-log.js**
```JS
'use strict';
require('./db/config');
const mongoose = require('mongoose');
const schema = require('./midtest.js');

const post = {
    email: 'sostenesfreita@git.io',
    title: 'First',
    body: 'Number: 1',
    date: Date.now()
}

const comment = {
        title:'rx 480',
        body: 'R$:1.000,00',
        date: Date.now()
};

const Model = mongoose.model('BlogPost', schema);

const BlogPost = new Model(post);

BlogPost.comments.push(comment);

BlogPost.save((err, post) => {
        if (err) return console.log('error', err);
        return console.log('Titulo: ', post);

		});
```
**schema.js**
```JS
'use strict';
const mongoose = require('mongoose');
const log = require('./log');
const Schema = mongoose.Schema;
const CommentsSchema = new Schema ({
        title: String,
        body: String,
        date: Date

		});
const BlogPostSchema = new Schema ({
    email :{type: String},
    title: { type: String   },
    body: String,
    comments: [CommentsSchema]

		});

module.exports = BlogPostSchema;

BlogPostSchema.pre('save', true, function (next,done) {
        console.log('before save');
        log('user',`${this.email} ${this._id} has been saved`, done);
        next();
});
```
**Resultado**
```
user : ash@git.io 577acf908bbc97111a477143 has been saved : Mon Jul 04 2016 18:05:20 GMT-0300 (BRT)
user : sostenes@git.io 577acf96d809af931a9e41cc has been saved : Mon Jul 04 2016 18:05:26 GMT-0300 (BRT)
user : freitas@git.io 577acfa5c55db79d1b3cf654 has been saved : Mon Jul 04 2016 18:05:41 GMT-0300 (BRT)
user : freitas@github.io 577acfac0edcb7321c428b04 has been saved : Mon Jul 04 2016 18:05:48 GMT-0300 (BRT)
user : freitas@gmail.com 577acfb532e5e6101d647503 has been saved : Mon Jul 04 2016 18:05:57 GMT-0300 (BRT)
user : sostenesfreitas@gmail.com 577acfba14e432a91de8bf91 has been saved : Mon Jul 04 2016 18:06:02 GMT-0300 (BRT)
user : sostenesfreita@git.io 577acfd0798e34101ff8137e has been saved : Mon Jul 04 2016 18:06:24 GMT-0300 (BRT)
```
###[Volta Pro Indice](https://github.com/sostenesfreitas/be-mean-instagram-nodejs-exercises/blob/master/class-08/class-08-resolved-sostenesfreitas-Sostenes-freitas.md#indice)
#3 - Crie um middleware usando o exemplo do blog, para gera um log com nome titulo dos post que foi buscado "dica use o find".
**mid-log.js**
```JS
'use strict';
const mongoose = require('mongoose');
const log = require('./log');
const Schema = mongoose.Schema;
const CommentsSchema = new Schema ({
        title: String,
        body: String,
        date: Date

		});
const BlogPostSchema = new Schema ({
    email :{type: String},
    title: { type: String   },
    body: String,
    comments: [CommentsSchema]

		});

module.exports = BlogPostSchema;

BlogPostSchema.post('findOne', function (doc,done) {
        log('user',`${doc.email} , Title: ${doc.title} has been saved`,done);
});
```
**app.js**
```JS
'use strict';
require('./db/config');
const mongoose = require('mongoose');
const schema = require('./midtest.js');

const Model = mongoose.model('BlogPost', schema);
Model.findOne({email: 'sostenesfreitas@gmail.com'}, (err,data) => {
    if (err) return console.log('erro',err);
    return console.log('Post: ', data);
})
```
**Resultado**
```
user : sostenesfreitas@gmail.com , Title: First has been saved : Mon Jul 04 2016 18:49:47 GMT-0300 (BRT)
```
###[Volta Pro Indice](https://github.com/sostenesfreitas/be-mean-instagram-nodejs-exercises/blob/master/class-08/class-08-resolved-sostenesfreitas-Sostenes-freitas.md#indice)
#4. Insira 5 pokemons novos, na coleção pokemons, escolha 3 e os adicione em um array e uma nova coleção chamada meus-pokemons, utilizando o ObjectId. Adicione o required em campos que ache obrigatório no Schema do Pokemon.
**pokemons.js**
```JS
'use strict';
const mongoose = require('mongoose');
require('./db/config.js')
const Schema = mongoose.Schema;

const schema = {
    name: { type: String, required: true }
   ,type: { type: String, required: true }
   ,description: {type: String}
   ,attack: { type: Number, required: true }
   ,deffense: { type: Number, required: true }
   ,created_at: { type: Date, default: Date.now   }
}

const pokeSchema = new Schema(schema);

const data = {
    name: "arceus"
   ,type: "normal"
   ,description: "deus"
   ,attack: 100
   ,deffense: 100

}

const Model = mongoose.model('pokemons', pokeSchema);

const poke = new Model(data);

poke.save((err, data) => {
    if (err) return console.lof('ERRO: ', err);
    console.log('Inseriu: ', data);
})
```
**Resultado**
```
Inseriu:  { __v: 0,
  name: 'pineco',
  type: 'grass',
  description: 'Pokemon pinha',
  attack: 10,
  deffense: 5,
  _id: 577ae0c3f6e1524204c4facc,
  created_at: 2016-07-04T22:18:43.256Z  }

Inseriu:  { __v: 0,
  name: 'ekans',
  type: 'poison',
  description: 'cobrinha',
  attack: 15,
  deffense: 7,
  _id: 577ae147fd2485f60b7fcc65,
  created_at: 2016-07-04T22:20:55.138Z  }

Inseriu:  { __v: 0,
  name: 'greninja',
  type: 'water/dark',
  description: 'o ninja do pokemon',
  attack: 89,
  deffense: 50,
  _id: 577ae1742d7064340e98bf1b,
  created_at: 2016-07-04T22:21:40.594Z  }

Inseriu:  { __v: 0,
  name: 'hoppa',
  type: 'physic/ghost',
  description: 'genio da lampada',
  attack: 100,
  deffense: 100,
  _id: 577ae1b48384335f11689e30,
  created_at: 2016-07-04T22:22:44.871Z  }

Inseriu:  { __v: 0,
  name: 'arceus',
  type: 'normal',
  description: 'deus',
  attack: 100,
  deffense: 100,
  _id: 577ae1c60b95375a1248dbc3,
  created_at: 2016-07-04T22:23:02.752Z  }
```
**meuspokemons.js**
```JS
'use strict';
const mongoose = require('mongoose');
require('./db/config.js')
const Schema = mongoose.Schema;

const schemaArray = {
    pokemons: [{type: Schema.Types.ObjectId, ref: 'pokemons'}]
}

const PokemonSchema = new Schema(schemaArray);

const dataArray = {
    pokemons: ['577ae1c60b95375a1248dbc3','577ae1b48384335f11689e30','577ae1742d7064340e98bf1b']
}

const ModelArray = mongoose.model('meus-pokemons', PokemonSchema);

const pokemon = new ModelArray(dataArray);

pokemon.save((err, data) => {
    if (err) return console.lof('ERRO: ', err);
    console.log('Inseriu: ', data);
})
```
**Resultado**
```
Inseriu:  { __v: 0,
  _id: 577ae3137c40d03824952c72,
  pokemons:
   [ 577ae1c60b95375a1248dbc3,
     577ae1b48384335f11689e30,
     577ae1742d7064340e98bf1b  ]  }
```
###[Volta Pro Indice](https://github.com/sostenesfreitas/be-mean-instagram-nodejs-exercises/blob/master/class-08/class-08-resolved-sostenesfreitas-Sostenes-freitas.md#indice)
#5. Crie um Schema de exemplo com validação para os campos (utilizar Arquitetura Atômica, ou seja cada campo sendo um Schema separado):
    - email
    - cpf
    - cnpj
    - url
    - ip

**schema.js**
```JS
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const email = require( './fields/field-email'  );
const cpf   = require( './fields/field-cpf'  );
const cnpj  = require( './fields/fields-cnpj'  );
const url   = require( './fields/fields-url'  );
const ip    = require( './fields/fields-ip'  );

const _schema = {
   email,
   cpf,
   cnpj,
   url,
   ip

};

module.exports = new Schema( _schema  );
```

**field-email.js**
```JS
const _set = (v) => v.toLowerCase();
const _validate = (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);

module.exports = {
  type: String
, set: _set
, validate: [_validate, 'Email ({VALUE}) inválido!']
, required: true

}


```

**field-cpf.js**
```JS
const _validate = (v) => /^(\d{3}\.?\d{3}\.?\d{3}\-?\d{2})$/.test(v);

module.exports = {
  type: String
, validate: [_validate, 'CPF ({VALUE}) inválido!']
, required: true

}


```

**field-cnpj.js**
```JS
const _validate = (v) => /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/.test(v);

 module.exports  = {
  type: String
, validate: [_validate, 'CNPJ ({VALUE}) inválido!']
, required: true

}
```

**field-url.js**
```JS
const _validate = (v) => /^((http|https|ftp|ftps):\/\/)?([a-z0-9\-]+\.)?[a-z0-9\-]+\.[a-z0-9]{2,4}(\.[a-z0-9]{2,4})?(\/.*)?$/.test(v);

 module.exports = {
  type: String
, validate: [_validate, 'URL ({VALUE}) inválida!']
, required: true

}
```

**field-ip.js**
```JS
const _validate = (v) => /^(((1[0-9]|[1-9]?)[0-9]|2([0-4][0-9]|5[0-5]))\.){3}((1[0-9]|[1-9]?)[0-9]|2([0-4][0-9]|5[0-5]))$/.test(v);

module.exports  = {
  type: String
, validate: [_validate, 'IP ({VALUE}) inválido!']
, required: true
}
```
###[Volta Pro Indice](https://github.com/sostenesfreitas/be-mean-instagram-nodejs-exercises/blob/master/class-08/class-08-resolved-sostenesfreitas-Sostenes-freitas.md#indice)
#6. Dê 3 exemplos diferentes, para cada, utilizando as funções:
   - findAndModify
   - findOneAndUpdate
   - findOneAndRemove

**findAndModify**
```JS
'use strict';

const mongoose = require( 'mongoose'  );
require('/db/config.js')
const Schema = mongoose.Schema;

const _schema = {
  name: {type: String},
  description: {type: String},
  type: {type: String},
  attack: {type: Number}

};

const PokemonSchema = new Schema(_schema);

PokemonSchema.statics.findAndModify = function (query, mod, options, cb) {
  return this.collection.findAndModify(query, mod, options, cb);
};

const Model = mongoose.model('pokemons', PokemonSchema);

const query  = { attack: {$lte: 5 }  };
const mod = { type: 'eletric'  };
const options = { multi: true  };

Model.findAndModify(query, mod, options, function (err, data) {
  if (err) return console.log('Erro: ', err);
  return console.log('Alterou: ', data);
});
```
**Resultado**
```
Alterou:  { lastErrorObject: { updatedExisting: true, n: 1  },
  value:
   { _id: 56aeb9d04bb106b114749436,
     name: 'Pikachu',
     description: 'rato eletrico',
     type: 'eletric',
     attack: 5
     __v: 0  },
  ok: 1  }
```

**findOneAndUpdate**

```JS
use 'strict';

const query = { name: /charmander/i };
const mod = { type: 'fire'  };

Model.findOneAndUpdate(query, mod, {}, function (err, data) {
  if (err) return console.log('Erro: ', err);
  return console.log('Alterou: ', data);
})
```
**Resultado**
```

Alterou:  { __v: 0,
  attack: 9,
  type: 'fire',
  description: 'quase dragao',
  name: 'Charmander',
  _id: 56aeb9d04bb106b114749437  }
 ```

**exemplo 2**

```JS
'use strict';

const query = { attack: {$lte: 10} };
const mod = {attack: 54};
const options = {multi: true};

Model.findOneAndUpdate(query, mod, options, function (err, data) {
  if (err) return console.log('Erro: ', err);
  return console.log('Alterou: ', data);
});
```
**Resultado**
```
Alterou:  { active: false,
  attack: 54,
  type: 'fire',
  description: 'quase dragao',
  name: 'Charmander',
  _id:  56aeb9d04bb106b114749437  }
  ```

**exemplo 3**
```JS
'use strict';

const query = {$and: [{type: 'fire'}, {attack: {$gte: 5}}]};
const mod = {attack: 51, description: 'gradao'};
const options = {multi: true};

Model.findOneAndUpdate(query, mod, options, function (err, data) {
  if (err) return console.log('Erro: ', err);
  return console.log('Alterou: ', data);
});
```

```
Resultado:

Alterou:  { __v: 0,
  defense: 88,
  attack: 51,
  type: 'fire',
  description: 'gradao',
  name: 'Charmander',
  _id:  56aeb9d04bb106b114749437  }
  ```

**findOneAndRemove**

**Exemplo 1**

```JS
'use strict';

const query = { $and: [{type: 'grass'}, {attack: {$gte: 100}}] };

Model.findOneAndRemove(query, function (err, data) {
  if (err) return console.log('Erro: ', err);
  return console.log('Removeu: ', data);
});
```
**Resulatdo**
```
Removeu:  { __v: 0,
  attack: 105,
  type: 'grass',
  description: 'Venossaur',
  name: 'bixao',
  _id: 56aeb9d04bb106b114749438  }
  ```

**Exemplo 2**

```JS
'use strict';

const query = { attack: {$lte: 5}};

Model.findOneAndRemove(query, function (err, data) {
  if (err) return console.log('Erro: ', err);
  return console.log('Removeu: ', data);
});
```
```
Resultado:

Removeu:  { description: 'caterpie',
  defense: 4,
  attack: 3,
  name: 'minhoca',
  _id: 564de099fc7e5880d64a877f  }
  ```

**Exemplo 3**

```JS
'use strict';

const query = {attack: {$lte: 10}};

Model.findOneAndRemove(query, function (err, data) {
  if (err) return console.log('Erro: ', err);
  return console.log('Removeu: ', data);
});
```
**Resultado**
```

Removeu:  { active: false,
  attack: 6,
  type: 'fire',
  description: 'k',
  name: 'slugma',
  _id: 56a9539b4b828d9c186b53ef  }

```
###[Volta Pro Indice](https://github.com/sostenesfreitas/be-mean-instagram-nodejs-exercises/blob/master/class-08/class-08-resolved-sostenesfreitas-Sostenes-freitas.md#indice)
#7. Crie 1 Schema com todo CRUD funcional e métodos especiais, que agrupe:
   - virtuals
   - getters & setters
   - method & static
   - embedded document
   - plugins
   - middlewares
  
[Fico meio grande - Repositorio - rsrsrs](https://github.com/sostenesfreitas/schema-fields)
#8. Crie 1 Schema para password com criptografia e arquitetura atômica.
   - use SHA256 com SALT como criptografia;
   - use middleware com pre save;
   - use methods.
**crypt.js**
 ```JS
'use strict';

const mongoose = require( 'mongoose'  );
const Schema   = mongoose.Schema;


	const cryptSchema = new Schema({
    password: String
 });

	cryptSchema.methods.crypt = function () {
      const crypto = require('crypto');
      const salt = crypto.randomBytes(128).toString('base64');
      const key = crypto.pbkdf2Sync( this.password, 'salt', 100000, 256, 'sha256' );

      return key.toString('hex');
 };

	cryptSchema.pre('save', true, function( next, done  ){
      console.log("inserir:", `${this.password}` );
      this.password = this.criptografa()
      console.log("criptografado:", `${this.password}` );
      next();
});

   module.exports = cryptSchema;
```

**password.js**
```JS
'use strict';

const mongoose = require( 'mongoose'  );
const schema   = require( './crypt.js'  );
const model = mongoose.model('pass',schema);

require('./db/config.js');

const pass = new model({password: 'sostenes123'})
pass.save((err, data) => {
 	if (err) return console.log('err: ', err);
	console.log(data);
})
```
**Resultado**
```
inserir: sostenes123
criptografado: df49bd7e6968ac3d5779a3d42da09404a5e67f435accbc478427010169c0a0d6f43f2120601c7c652c4aea7733cc07046a19d6425aa650321026d90c2ade069b6e0bae53b344df3a0d451158601b13ba0744e32b64d11fb3b28d3e8e8aa992d0bcd54a9df6fcfaa5379d10b988cf314059d62ab13095b17aa522242c0e93348e3b1adeaca6e0c5c0701184e37133e7182fa1b12c9c464955bebecd299a157ab1499eeeaf1371e0d09b6caf87de3ab08c0ef9e088ab7aacd756af49e2ae78e62deb864a5bffb1aa75057b7930c75181af4c16b07ae30219d802109be6a5ae62f5ba3a1b2a0699d8b4c0808e039a4ddfe8458d89de70943822ebe95f98494e0210
Mongoose default connection open to: mongodb://localhost/teste
Mongoose default connection is open
```
###[Volta Pro Indice](https://github.com/sostenesfreitas/be-mean-instagram-nodejs-exercises/blob/master/class-08/class-08-resolved-sostenesfreitas-Sostenes-freitas.md#indice)
