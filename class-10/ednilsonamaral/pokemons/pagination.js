'use strict';

const formatandoHTML = function(data) {
    let html = '';

    data.forEach(function(pokemonItem, index, arr) {
        console.log(pokemonItem);

        html = html + '<ul>';
            html = html + '<li>' + new Date(pokemonItem.created) + '</li>';
            html = html + '<li>' + pokemonItem.defense + '</li>';
            html = html + '<li>' + pokemonItem.height + '</li>';
            html = html + '<li>' + pokemonItem.name + '</li>';
            html = html + '<li>' + pokemonItem.speed + '</li>';
            html = html + '<li>' + pokemonItem.types.join(" // ") + '</li>';
            html = html + '<li>' + pokemonItem.attack + '</li>';
        html = html + '</ul>';
    });

    return html;
};

module.exports = function(err, data, numPage, maxPages, res) {
    if(err) {
        console.log(err);
        res.status(404, err).end();
    }

    if(numPage === 1){
        res.links({
            next: 'http://localhost:3000/pokemons?page='+ Number(numPage + 1),
            last: 'http://localhost:3000/pokemons?page='+ maxPages
        });
    } else if (numPage > 1 && numPage < maxPages){
        res.links({
            first: 'http://localhost:3000/pokemons?numPage=1',
            previous: 'http://localhost:3000/pokemons?numPage='+ (numPage - 1),
            next: 'http://localhost:3000/pokemons?numPage='+ (numPage + 1),
            last: 'http://localhost:3000/pokemons?numPage='+ maxPages
        });
    } else if (numPage === maxPages){
        res.links({
            first: 'http://localhost:3000/pokemons?numPage=1',
            previous: 'http://localhost:3000/pokemons?numPage='+ (numPage - 1)
        });
    }

    res.format({
        'text/html' : function() {
            const html = formatandoHTML(data);
            res.type('html');
            res.send(html);
        },
        'application/json' : function() {
            res.type('json');
            res.json(data);
        },
        'default' : function() {
            res.status(406).send('Formato não suportado! Sorry!');
        }
    });
}
