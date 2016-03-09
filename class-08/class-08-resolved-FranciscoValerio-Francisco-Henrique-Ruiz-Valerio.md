# Node.js - Aula 08 - Exercício

**user:** [FranciscoValerio](https://github.com/FranciscoValerio)

**autor:** Francisco Henrique Ruiz Valério

> Exercícios Aula 08 parte 02 (plugins).

1 - Crie um novo schema como nome de User, e use o plugin timestemp nele, esse schema deve ter email e password.

**Schema User criado:**
```JS
'use strict';

const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const timestemp = require( './plugins/timestemp' );

const userSchema = new Schema({
   email: { type: String, required: true},
   password: { type: String, required: true}
});

userSchema.plugin( timestemp );

module.exports = mongoose.model( 'User', userSchema );
```

2 - Crie um novo plugin que adicione o um novo campo ao schema User, o novo campo de ser O Sexo do tipo String.

**Plugin field-sexo:**
```JS
'use strict';

function fieldsexo(schema, options){
   schema.add( { sexo: { type: String } } );

   function preUpdate(next){
      console.log('pre update has calling');
      next();
   }
   schema.pre('update', preUpdate);
}

module.exports = fieldsexo;
```

**Schema User:**
```JS
'use strict';

const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const timestemp = require( './plugins/timestemp' );
const fieldsexo = require( './plugins/field-sexo' );

const userSchema = new Schema({
   email: { type: String, required: true},
   password: { type: String, required: true}
});

userSchema.plugin( timestemp  );
userSchema.plugin( fieldsexo );

module.exports = mongoose.model( 'User', userSchema );
```

3 - Salve 5 novos Users com email, password e Sexo, vindo dos plugins.

**Fonte utilizado na gravação dos 5 usuários:**

```JS
'use strict';

const model = require( './user' );
const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost/test' );

var user1 = {
   email: 'francisco@bla.com',
   password: '1234',
   sexo: 'M'
};

var user2 = {
   email: 'henrique@ble.com',
   password: '45678',
   sexo: 'M'
};

var user3 = {
   email: 'jujuzita@jju.com',
   password: 'jujuzita',
   sexo: 'F'
};

var user4 = {
   email: 'adebair@abc.com',
   password: 'hhhsss',
   sexo: 'M'
};

var user5 = {
   email: 'musum@biritis.com',
   password: 'cacildis',
   sexo: 'M'
};

model.create(user1, createPost );
model.create(user2, createPost );
model.create(user3, createPost );
model.create(user4, createPost );
model.create(user5, createPost );

function createPost(err, post ){
   if ( err ) throw err;
   else {
      console.log(post);
      process.exit(1);
   }
}
```

```
   {
      _id: 56cd003d418f55fc1d01df83,
      created_at: Tue Feb 23 2016 21:58:37 GMT-0300 (Hora oficial do Brasil),
      update_at: Tue Feb 23 2016 21:58:37 GMT-0300 (Hora oficial do Brasil),
      sexo: 'M',
      password: '1234',
      email: 'francisco@bla.com',
      __v: 0
   }

   {
      _id: 56cd011d4850b19410396fa9,
      created_at: Tue Feb 23 2016 22:02:21 GMT-0300 (Hora oficial do Brasil),
      update_at: Tue Feb 23 2016 22:02:21 GMT-0300 (Hora oficial do Brasil),
      sexo: 'M',
      password: '45678',
      email: 'henrique@ble.com',
      __v: 0
   }

   {
      _id: 56cd015d181995241519e3df,
      created_at: Tue Feb 23 2016 22:03:25 GMT-0300 (Hora oficial do Brasil),
      update_at: Tue Feb 23 2016 22:03:25 GMT-0300 (Hora oficial do Brasil),
      sexo: 'F',
      password: 'jujuzita@jju.com',
      email: 'Juju',
      __v: 0
   }

   {
      _id: 56cd0181dd5101bc01bde118,
      created_at: Tue Feb 23 2016 22:04:01 GMT-0300 (Hora oficial do Brasil),
      update_at: Tue Feb 23 2016 22:04:01 GMT-0300 (Hora oficial do Brasil),
      sexo: 'M',
      password: 'hhhsss',
      email: 'adebair@abc.com',
      __v: 0
   }

   {
      _id: 56cd019fde9639f808c62d71,
      created_at: Tue Feb 23 2016 22:04:31 GMT-0300 (Hora oficial do Brasil),
      update_at: Tue Feb 23 2016 22:04:31 GMT-0300 (Hora oficial do Brasil),
      sexo: 'M',
      password: 'cacildis',
      email: 'musum@biritis.com',
      __v: 0
   }

```

> Exercícios Aula 08 parte 04 (Middleware).

1 - Criar um middleware pre com um erro e propagar o erro para quem o chamou, salvar o result e botar no md deste exercício.

**Arquivo contendo o schema de pokemon e o error no pre:**
```JS
const mongoose = require( 'mongoose' );
const util = require( 'util' );
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const log = require( './log' );

mongoose.connect( 'mongodb://localhost/be-mean-instagram' );

function pokemonHandler(){
   const schema = new Schema({
      id : ObjectId,
      name: { type: String, trin: true },
      type: { type: String, trin: true },
      attack: { type: Number },
      defense: { type: Number },
      height: { type: Number },
      description: { type: String, trin: true }
   });

   schema.pre('save', next => {
      util.log('before save');
      const err = new Error( 'same error');
      next(err);
   });

   return mongoose.model('Pokemon', schema);
}

module.exports = exports = pokemonHandler();
```

**Arquivo que chama o schema do pokemon:**
```JS
'use strict';

const Pokemon = require( './pokemon-error' );
const pokemon = new Pokemon( {
   name: 'Francisco',
   description: 'great',
   type: 'fisher',
   attack: 70,
   defense: 99,
   height: 1.85
} );

pokemon.save(err => {
   if (err){
      console.log(err);
   }
});
```

**result:**
```
23 Feb 22:23:58 - before save
[Error: same error]
```

2 - Adicione o módulo de log, aos dois schemas do blog, e faça com que gere um arquivo blog-models.md com pelo menos 6 operações no blog save() ou delete().

**users-schema.js**
```JS
'use strict';

const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const Post = require( './posts-schema' );
const util = require( 'util' );
const log = require( './log' );

let userSchema = new Schema({
   name: { type: String, required: true },
   email: { type: String, required: true, uniq: true }
});

module.exports = mongoose.model('User', userSchema );

userSchema.post('remove', user =>{
   Post.remove({ _user: user._id}.postsRemoved );
});

function postsRemoved(err, ok){
   util.log(err || ok.result);
}

userSchema.post('save', user =>{
   log( 'user', `${user.name} email: ${user.email} saved.` );
   console.log(user);
});

```

**posts-schema.js**
```JS
'use strict';

const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const log = require( './log' );

let postsSchema = new Schema({
   title: String,
   body: String,
   userEmail: String,
   _user: {
      type: Schema.ObjectId,
      ref: 'User'
   }
});

module.exports = mongoose.model('Post', postsSchema );

postsSchema.post('save', post =>{
   log( 'post', `${post.title} user: ${post.userEmail} saved.` );
   console.log(post);
});

```

**Arquivo blog-models.md**
```
user: Francisco email: francisco@bla.com saved.: Wed Feb 24 2016 19:09:14 GMT-0300 (Hora oficial do Brasil)
user: Henrique email: henrique@ble.com saved.: Wed Feb 24 2016 19:10:03 GMT-0300 (Hora oficial do Brasil)
post: Mongoose Middleware user: francisco@bla.com saved.: Wed Feb 24 2016 19:14:51 GMT-0300 (Hora oficial do Brasil)
post: Class 08 user: henrique@ble.com saved.: Wed Feb 24 2016 19:17:45 GMT-0300 (Hora oficial do Brasil)
post: Node.Js user: henrique@ble.com saved.: Wed Feb 24 2016 19:18:21 GMT-0300 (Hora oficial do Brasil)
post: Node.Js user: henrique@ble.com saved.: Wed Feb 24 2016 19:18:37 GMT-0300 (Hora oficial do Brasil)
post: MongoDB user: francisco@bla.com saved.: Wed Feb 24 2016 19:19:04 GMT-0300 (Hora oficial do Brasil)
post: Express user: francisco@bla.com saved.: Wed Feb 24 2016 19:19:25 GMT-0300 (Hora oficial do Brasil)
```

3 - Crie um middleware usando o exemplo do blog, para gera um log com nome titulo dos post que foi buscado "dica use o find".

**Arquivo find-blog.js**
```JS
'use strict';

const Post = require( './posts-schema' );

Post.find({userEmail: 'francisco@bla.com'}, { _id: 0, body: 0, __v: 0, _user: 0 }, () =>{});
```

**Resultado do LOG**
```
buscado:
   {
      title: 'Mongoose Middleware',
      userEmail: 'francisco@bla.com'
   },
   {
      title: 'Mongoose Middleware',
      userEmail: 'francisco@bla.com'
   },
   {
      title: 'Mongoose Middleware',
      userEmail: 'francisco@bla.com'
   },
   {
      title: 'Mongoose Middleware',
      userEmail: 'francisco@bla.com'
   },
   {
      title: 'Mongoose Middleware',
      userEmail: 'francisco@bla.com'
   },
   {
      title: 'Mongoose Middleware',
      userEmail: 'francisco@bla.com'
   },
   {
      title: 'Mongoose Middleware',
      userEmail: 'francisco@bla.com'
   },
   {
      title: 'MongoDB',
      userEmail: 'francisco@bla.com'
   },
   {
      title: 'Express',
      userEmail: 'francisco@bla.com'
   }
   : Wed Feb 24 2016 20:11:17 GMT-0300 (Hora oficial do Brasil)
```

> Exercícios Aula 08 final (Geral).

1. Insira 5 pokemons novos, na coleção pokemons, escolha 3 e os adicione em um array e uma nova coleção chamada meus-pokemons, utilizando o ObjectId. Adicione o required em campos que ache obrigatório no Schema do Pokemon.

**Arquivo para inserir os pokemons**
```JS
var Mongoose = require('Mongoose');

var db = Mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  console.log('Conectado.')

  var pokemonSchema = new Mongoose.Schema({
     name: { type: String, required: true },
     attack: { type: Number, required: true },
     created_at: { type: Date, default: Date.now },
     active: Boolean,
     hasCreditCookie: Boolean
  });

  pokemonSchema.statics.findAllWithCreditCookies = function(callback) {
    return this.find({ hasCreditCookie: true }, callback);
  };

  var Pokemon = Mongoose.model('Pokemon', pokemonSchema);

  for (var i =1; i<=5; i++){
    var pokemon = new Pokemon({
      name: 'Pokemon ' + i,
      attack: 22 + i,
      hasCreditCookie: true
    });

    pokemon.save(function(err, pokemon) {
      if (err) return console.error(err);
      console.log('Salvo: ' + pokemon);
    });
  }
});

Mongoose.connect('mongodb://localhost/be-mean-instagram');
```

**Pokemons novos**
```
Salvo: { created_at: Sun Feb 28 2016 17:32:52 GMT-0300 (Hora oficial do Brasil),
  _id: 56d35974f1819cb01c8eae28,
  hasCreditCookie: true,
  attack: 23,
  name: 'Pokemon 1',
  __v: 0 }
Salvo: { created_at: Sun Feb 28 2016 17:32:52 GMT-0300 (Hora oficial do Brasil),
  _id: 56d35974f1819cb01c8eae29,
  hasCreditCookie: true,
  attack: 24,
  name: 'Pokemon 2',
  __v: 0 }
Salvo: { created_at: Sun Feb 28 2016 17:32:52 GMT-0300 (Hora oficial do Brasil),
  _id: 56d35974f1819cb01c8eae2a,
  hasCreditCookie: true,
  attack: 25,
  name: 'Pokemon 3',
  __v: 0 }
Salvo: { created_at: Sun Feb 28 2016 17:32:52 GMT-0300 (Hora oficial do Brasil),
  _id: 56d35974f1819cb01c8eae2b,
  hasCreditCookie: true,
  attack: 26,
  name: 'Pokemon 4',
  __v: 0 }
Salvo: { created_at: Sun Feb 28 2016 17:32:52 GMT-0300 (Hora oficial do Brasil),
  _id: 56d35974f1819cb01c8eae2c,
  hasCreditCookie: true,
  attack: 27,
  name: 'Pokemon 5',
  __v: 0 }
```

**Arquivo de schema**
```JS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  pokemons:  [{type: Schema.Types.ObjectId, ref: 'pokemons'}]
}

const pokemonSchema = new Schema(_schema);

const data = {
  pokemons: ['56d35974f1819cb01c8eae28', '56d35974f1819cb01c8eae29', '56d35974f1819cb01c8eae2a']
};

const Model = mongoose.model('meuspokemons', pokemonSchema);
const poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})

module.exports = pokemonSchema;
```

**Arquivo app.js**
```JS
require('./config');

const Schema = require('./schema');
```

**Pokemons inseridos**
```
Inseriu:  { pokemons:
   [ 56d35974f1819cb01c8eae28,
     56d35974f1819cb01c8eae29,
     56d35974f1819cb01c8eae2a ],
  _id: 56d35cd54031a9cc132e50a0,
  __v: 0 }
```

2. Crie um Schema de exemplo com validação para os campos (utilizar Arquitetura Atômica, ou seja cada campo sendo um Schema separado):
    - email
    - cpf
    - cnpj
    - url
    - ip

**Arquivo schema.js**
```JS
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const email = require( './fields/field-email' );
const cpf   = require( './fields/field-cpf' );
const cnpj  = require( './fields/fields-cnpj' );
const url   = require( './fields/fields-url' );
const ip    = require( './fields/fields-ip' );

const _schema = {
   email,
   cpf,
   cnpj,
   url,
   ip
};

module.exports = new Schema( _schema );
```

**Arquivo field-email**
```JS
const _set = (v) => v.toLowerCase();
const _validate = (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);

const Field = {
  type: String
, set: _set
, validate: [_validate, 'Email ({VALUE}) inválido!']
, required: true
}

module.exports = Field;
```

**Arquivo field-cpf**
```JS
const _validate = (v) => /^(\d{3}\.?\d{3}\.?\d{3}\-?\d{2})$/.test(v);

const Field = {
  type: String
, validate: [_validate, 'CPF ({VALUE}) inválido!']
, required: true
}

module.exports = Field;
```

**Arquivo field-cnpj**
```JS
const _validate = (v) => /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/.test(v);

const Field = {
  type: String
, validate: [_validate, 'CNPJ ({VALUE}) inválido!']
, required: true
}

module.exports = Field;
```

**Arquivo field-url**
```JS
const _validate = (v) => /^((http|https|ftp|ftps):\/\/)?([a-z0-9\-]+\.)?[a-z0-9\-]+\.[a-z0-9]{2,4}(\.[a-z0-9]{2,4})?(\/.*)?$/.test(v);

const Field = {
  type: String
, validate: [_validate, 'URL ({VALUE}) inválida!']
, required: true
}

module.exports = Field;
```

**Arquivo field-ip**
```JS
const _validate = (v) => /^(((1[0-9]|[1-9]?)[0-9]|2([0-4][0-9]|5[0-5]))\.){3}((1[0-9]|[1-9]?)[0-9]|2([0-4][0-9]|5[0-5]))$/.test(v);

const Field = {
  type: String
, validate: [_validate, 'IP ({VALUE}) inválido!']
, required: true
}

module.exports = Field;
```

3. Dê 3 exemplos diferentes, para cada, utilizando as funções:
   - findAndModify
   - findOneAndUpdate
   - findOneAndRemove

**findAndModify**

#1 - Buscando pelo nome e incrementando o attack.#
```JS
var mongooClient = require('mongodb').MongoClient
  , format = require('util').format;

mongooClient.connect('mongodb://localhost/be-mean-instagram', function(err, db) {
   if(err) throw err;

   db.collection('pokemons').findAndModify(
     { name: /pokemon 3/i },
     [['_id','asc']],
     { $inc: { attack: 5 } },
     {},
     function(err, object) {
         if (err){
             console.warn(err.message);
         }else{
             console.dir(object);
         }
     });
});
```

```
{ value:
   { _id: ObjectID { _bsontype: 'ObjectID', id: 'V©SXáwp\u0003*\u001b]' },
     name: 'Pokemon 3',
     attack: 32,
     hasCreditCookie: true,
     tags: [],
     created_at: Wed Jan 27 2016 21:32:16 GMT-0200 (Horário brasileiro de verão),
     __v: 0 },
  lastErrorObject: { updatedExisting: true, n: 1 },
  ok: 1 }   
```

#2 - Buscando pelo attack e alterando o nome.#
```JS
var mongooClient = require('mongodb').MongoClient
  , format = require('util').format;

mongooClient.connect('mongodb://localhost/be-mean-instagram', function(err, db) {
   if(err) throw err;

   db.collection('pokemons').findAndModify(
     { attack: 25 },
     [['_id','asc']],
     { name: "MidicandoMon" },
     {},
     function(err, object) {
         if (err){
             console.warn(err.message);
         }else{
             console.dir(object);
         }
     });
});
```

```
{ value:
   { _id: ObjectID { _bsontype: 'ObjectID', id: 'V©S\u0018kS×' },
     name: 'Pokemon 3',
     attack: 25,
     hasCreditCookie: true,
     tags: [],
     created_at: Wed Jan 27 2016 21:32:43 GMT-0200 (Horário brasileiro de verão),
     __v: 0 },
  lastErrorObject: { updatedExisting: true, n: 1 },
  ok: 1 }
```

#3 - Buscando pelo attack e alterando o hasCreditCookie.#
```JS
var mongooClient = require('mongodb').MongoClient
  , format = require('util').format;

mongooClient.connect('mongodb://localhost/be-mean-instagram', function(err, db) {
   if(err) throw err;

   db.collection('pokemons').findAndModify(
     { attack: 37 },
     [['_id','asc']],
     { hasCreditCookie : false },
     {},
     function(err, object) {
         if (err){
             console.warn(err.message);
         }else{
             console.dir(object);
         }
     });
});
```

```
{ value:
   { _id: ObjectID { _bsontype: 'ObjectID', id: 'V©SXáwp\u0003*\u001b]' },
     name: 'Pokemon 3',
     attack: 37,
     hasCreditCookie: true,
     tags: [],
     created_at: Wed Jan 27 2016 21:32:16 GMT-0200 (Horário brasileiro de verão),
     __v: 0 },
  lastErrorObject: { updatedExisting: true, n: 1 },
  ok: 1 }
```

**findOneAndUpdate**

```JS
'use strict';

const Pokemon = require( './pokemon-models' );

/* primeira alteracao
const query = {name: /pokemon 1/i};
const mod = {attack: 666};
*/

/* segunda alteracao
const query = {name: /pokemon 2/i};
const mod = {name: "DilmaMon"};
*/

/* terceira alteacao*/
const query = {attack: 666};
const mod = {name: "BeMon"};

Pokemon.findOneAndUpdate(query, mod, {upsert: true}, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Alterou:', data);
})
```

```
Alterou: { update_at: Sun Feb 28 2016 18:19:54 GMT-0300 (Hora oficial do Brasil),
  __v: 0,
  created_at: Wed Jan 27 2016 21:32:43 GMT-0200 (Horário brasileiro de verão),
  tags: [],
  hasCreditCookie: true,
  attack: 23,
  name: 'Pokemon 1',
  _id: 56a9539b4b828d9c186b53d5 }

Alterou: { update_at: Sun Feb 28 2016 18:23:34 GMT-0300 (Hora oficial do Brasil),
    __v: 0,
    created_at: Wed Jan 27 2016 21:32:16 GMT-0200 (Horário brasileiro de verão),
    tags: [],
    hasCreditCookie: true,
    attack: 24,
    name: 'Pokemon 2',
    _id: 56a9538058e17770032a1b5c }

Alterou: { update_at: Sun Feb 28 2016 18:26:09 GMT-0300 (Hora oficial do Brasil),
    __v: 0,
    created_at: Wed Jan 27 2016 21:32:43 GMT-0200 (Horário brasileiro de verão),
    tags: [],
    hasCreditCookie: true,
    attack: 666,
    name: 'Pokemon 1',
    _id: 56a9539b4b828d9c186b53d5 }    
```

**findOneAndRemove**
```JS
'use strict';

const Pokemon = require( './pokemon-models' );

/* removendo pelo _id
const query = { _id: "56a9539b4b828d9c186b53d5"};
*/

/* removendo pelo name
const query = { name: /pokemon 2/i};
*/

/* removendo pelo attack */
const query = { attack: 23 };

Pokemon.findOneAndRemove(query, {remove: true}, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Removeu');
})
```

4. Crie 1 Schema com todo CRUD funcional e métodos especiais, que agrupe:
   - virtuals
   - getters & setters
   - method & static
   - embedded document
   - plugins
   - middlewares

**Repositorio:** [Exercicio04](https://github.com/FranciscoValerio/exercicio04-nodejs-aula08)
Devido a esse exercício ter ficado muito grande eu achei melhor criar um repositório para ele.  

5. Crie 1 Schema para password com criptografia e arquitetura atômica.
   - use SHA256 com SALT como criptografia;
   - use middleware com pre save;
   - use methods.

**Schema.js**
```JS
'use strict';

const mongoose = require( 'mongoose' );
const Schema   = mongoose.Schema;

function passwordHandler(){
   const passwordSchema = new Schema({
      password: require('./fields/field-password')
   });

   passwordSchema.methods.criptografa = function () {
      const crypto = require('crypto');
      const salt = crypto.randomBytes(128).toString('base64');
      const key = crypto.pbkdf2Sync( this.password, 'salt', 100000, 256, 'sha256');

      return key.toString('hex');
   };

   passwordSchema.pre('save', true, function( next, done ){
      console.log("inserir:", `${this.password}` );
      this.password = this.criptografa()
      console.log("criptografado:", `${this.password}` );
      next();
   });

   return mongoose.model('Password', passwordSchema);
}
module.exports = exports = passwordHandler();
```

**create-password.js**
```JS
'use strict';

const mongoose = require( 'mongoose' );
const models   = require( './index' );

mongoose.connect( 'mongodb://localhost/test' );

let pass = new models.Password();

pass.password = "abc@123";
pass.save();
```

**Resultado:**
```
inserir: abc@123
criptografado: 43efb96f67348450f85afadc9d6c740a3a62f1b9aaa63c08bc6c67f0f5e12f2e44ec2feba91183811df1ede96c53e3e0b2f6f7d19d946f7071e421e5d961e9791896747a4745179c86e59d370b559790e26b1b00a6be22fab2b5cf37da830b6f02586ea63d01105b195717f6de46249463b186ddb8b02f84d9c4aa47ed60a958544795314e0ce7999f58f92d23a2fa46abee6ea77036d223b8cb10dc637e4ad7eba0156ba4b57f9b4a62e0fd26434dec141469ff8b6605cd756a25a0470e30d6c63376e23b77ff18cef80d07ec5605235aea5e35a28c63ff5a3b60e531ab63a198548798e7e9f071a2c3c170dd817b550c1060ca7896ef072f67ae3072ab31b9
```
