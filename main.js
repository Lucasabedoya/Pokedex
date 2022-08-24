// imagenes de los botones
var charizard = document.getElementById('charizard');
var blast = document.getElementById('blast');
var diglett = document.getElementById('diglett');
var pikachu = document.getElementById('pikachu');
var eevee = document.getElementById('eevee');
var headerImg = document.getElementById('header-left__img');


// imagenes principales
var img = document.getElementById('img')
var img2 = document.getElementById('table-img')

// titulo del pokemon
var pok = document.getElementById("pokemon_name")

// contenedores de las imagenes
var contCharizard = document.getElementById("charizard-c")
var contBlast = document.getElementById("blast-c")
var contdiglett = document.getElementById("diglett-c")
var contPikachu = document.getElementById("pikachu-c")
var contEevee = document.getElementById("eevee-c")

// definiendo donde iran los fondos
var tittle = document.getElementById('tittle')
const th = document.querySelectorAll('td')


// funciones para cambiar fondo de los th al recorrerlos
function charizardbg(element){
    element.className = "container-right__table__td charizard-bg";
}
function blastbg(element){
    element.className = "container-right__table__td blast-bg";
}
function diglettbg(element){
    element.className = "container-right__table__td diglett-bg";
}
function pikachubg(element){
    element.className = "container-right__table__td pikachu-bg";
}
function eeveebg(element){
    element.className = "container-right__table__td eevee-bg";
}

// ONCLICK DE CADA BOTON
charizard.onclick = function(){

    // cambiamos al pokemon seleccionado
    img.src = "images/charizard.png";
    img2.src = "images/charizard.png";
    headerImg.src = "images/fuego.png";
    pok.innerHTML = "CHARIZARD";

    // ocultamos boton del pokemon seleccionado
    contCharizard.className = "footer__button__container hidden";
    charizard.className = "footer__button__img hidden";

    // mostramos contenedor del resto de pokemons
    contBlast.className = "footer__button__container show";
    contdiglett.className = "footer__button__container show";
    contPikachu.className = "footer__button__container show";
    contEevee.className = "footer__button__container show";

    // mostramos imagen del resto de pokemons
    blast.className = "footer__button__img show";
    diglett.className = "footer__button__img show";
    pikachu.className = "footer__button__img show";
    eevee.className = "footer__button__img show";

    //set fondos del pokemon seleccionado
    tittle.className = "container-left__tittle charizard-bg";
    th.forEach(charizardbg);
}

blast.onclick = function(){

    // cambiamos al pokemon seleccionado
    img.src = "images/blast.png";
    img2.src = "images/blast.png";
    headerImg.src = "images/agua.png";
    pok.innerHTML = "BLAST";

    // ocultamos boton del pokemon seleccionado
    contBlast.className = "footer__button__container hidden";
    blast.className = "footer__button__img hidden";

    // mostramos contenedor del resto de pokemons
    contCharizard.className = "footer__button__container show";
    contdiglett.className = "footer__button__container show";
    contPikachu.className = "footer__button__container show";
    contEevee.className = "footer__button__container show";

    // mostramos imagen del resto de pokemons
    charizard.className = "footer__button__img show";
    diglett.className = "footer__button__img show";
    pikachu.className = "footer__button__img show";
    eevee.className = "footer__button__img show";

    //set fondos del pokemon seleccionado
    tittle.className = "container-left__tittle blast-bg";
    th.forEach(blastbg);
}

diglett.onclick = function(){

    // cambiamos al pokemon seleccionado
    img.src = "images/diglett.png";
    img2.src = "images/diglett.png";
    headerImg.src = "images/tierra.png";
    pok.innerHTML = "DIGLETT";

    // ocultamos boton del pokemon seleccionado
    contdiglett.className = "footer__button__container hidden";
    diglett.className = "footer__button__img hidden";

    // mostramos contenedor del resto de pokemons
    contCharizard.className = "footer__button__container show";
    contBlast.className = "footer__button__container show";
    contPikachu.className = "footer__button__container show";
    contEevee.className = "footer__button__container show";

    // mostramos imagen del resto de pokemons
    charizard.className = "footer__button__img show";
    blast.className = "footer__button__img show";
    pikachu.className = "footer__button__img show";
    eevee.className = "footer__button__img show";

    //set fondos del pokemon seleccionado
    tittle.className = "container-left__tittle diglett-bg";
    th.forEach(diglettbg);
}

pikachu.onclick = function(){

    // cambiamos al pokemon seleccionado
    img.src = "images/pikachu.png";
    img2.src = "images/pikachu.png";
    headerImg.src = "images/electrico.png";
    pok.innerHTML = "PIKACHU";

    // ocultamos boton del pokemon seleccionado
    contPikachu.className = "footer__button__container hidden";
    pikachu.className = "footer__button__img hidden";

    // mostramos contenedor del resto de pokemons
    contCharizard.className = "footer__button__container show";
    contBlast.className = "footer__button__container show";
    contdiglett.className = "footer__button__container show";
    contEevee.className = "footer__button__container show";

    // mostramos imagen del resto de pokemons
    charizard.className = "footer__button__img show";
    blast.className = "footer__button__img show";
    diglett.className = "footer__button__img show";
    eevee.className = "footer__button__img show";

    //set fondos del pokemon seleccionado
    tittle.className = "container-left__tittle pikachu-bg";
    th.forEach(pikachubg);
}

eevee.onclick = function(){

    // cambiamos al pokemon seleccionado
    img.src = "images/eevee.png";
    img2.src = "images/eevee.png";
    headerImg.src = "images/normal.png";
    pok.innerHTML = "EEVEE";

    // ocultamos boton del pokemon seleccionado
    contEevee.className = "footer__button__container hidden";
    eevee.className = "footer__button__img hidden";

    // mostramos contenedor del resto de pokemons
    contCharizard.className = "footer__button__container show";
    contBlast.className = "footer__button__container show";
    contdiglett.className = "footer__button__container show";
    contPikachu.className = "footer__button__container show";

    // mostramos imagen del resto de pokemons
    charizard.className = "footer__button__img show";
    blast.className = "footer__button__img show";
    diglett.className = "footer__button__img show";
    pikachu.className = "footer__button__img show";

    //set fondos del pokemon seleccionado
    tittle.className = "container-left__tittle eevee-bg";
    th.forEach(eeveebg);
}