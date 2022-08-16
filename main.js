// imagenes de los botones
var charizard = document.getElementById('charizard');
var blast = document.getElementById('blast');
var diglett = document.getElementById('diglett');
var pikachu = document.getElementById('pikachu');
var eevee = document.getElementById('eevee');

// imagenes principales
var img = document.getElementById('img')
var img2 = document.getElementById('table-img')

// titulo del pokemon
var pok = document.getElementById("pok_name")

// contenedores de las imagenes
var contCharizard = document.getElementById("charizard-c")
var contBlast = document.getElementById("blast-c")
var contdiglett = document.getElementById("diglett-c")
var contPikachu = document.getElementById("pikachu-c")
var contEevee = document.getElementById("eevee-c")

// definiendo donde iran los fondos
var header = document.getElementById('header')
var footer = document.getElementById('footer')
var tittle = document.getElementById('tittle')
const th = document.querySelectorAll(' .th')


// funciones para cambiar fondo de los th al recorrerlos
function charizardbg(element){
    element.className = " charizard-bg";
}
function blastbg(element){
    element.className = " blast-bg";
}
function diglettbg(element){
    element.className = " diglett-bg";
}
function pikachubg(element){
    element.className = " pikachu-bg";
}
function eeveebg(element){
    element.className = " eevee-bg";
}

// ONCLICK DE CADA BOTON
charizard.onclick = function(){

    // cambiamos al pokemon seleccionado
    img.src = "images/charizard.png";
    img2.src = "images/charizard.png";
    pok.innerHTML = "CHARIZARD";

    // ocultamos boton del pokemon seleccionado
    contCharizard.className = "pokemon hidden";
    charizard.className = " hidden";

    // mostramos contenedor del resto de pokemons
    contBlast.className = "pokemon show";
    contdiglett.className = "pokemon show";
    contPikachu.className = "pokemon show";
    contEevee.className = "pokemon show";

    // mostramos imagen del resto de pokemons
    blast.className = "show";
    diglett.className = "show";
    pikachu.className = "show";
    eevee.className = "show";

    //set fondos del pokemon seleccionado
    header.className = "header charizard-bg";
    footer.className = "footer-container charizard-bg";
    tittle.className = "container-header-left charizard-bg";
    th.forEach(charizardbg);
}

blast.onclick = function(){

    // cambiamos al pokemon seleccionado
    img.src = "images/blast.png";
    img2.src = "images/blast.png";
    pok.innerHTML = "BLAST";

    // ocultamos boton del pokemon seleccionado
    contBlast.className = "pokemon hidden";
    blast.className = " hidden";

    // mostramos contenedor del resto de pokemons
    contCharizard.className = "pokemon show";
    contdiglett.className = "pokemon show";
    contPikachu.className = "pokemon show";
    contEevee.className = "pokemon show";

    // mostramos imagen del resto de pokemons
    charizard.className = "show";
    diglett.className = "show";
    pikachu.className = "show";
    eevee.className = "show";

    //set fondos del pokemon seleccionado
    header.className = "header blast-bg";
    footer.className = "footer-container blast-bg";
    tittle.className = "container-header-left blast-bg";
    th.forEach(blastbg);
}

diglett.onclick = function(){

    // cambiamos al pokemon seleccionado
    img.src = "images/diglett.png";
    img2.src = "images/diglett.png";
    pok.innerHTML = "DIGLETT";

    // ocultamos boton del pokemon seleccionado
    contdiglett.className = "pokemon hidden";
    diglett.className = " hidden";

    // mostramos contenedor del resto de pokemons
    contCharizard.className = "pokemon show";
    contBlast.className = "pokemon show";
    contPikachu.className = "pokemon show";
    contEevee.className = "pokemon show";

    // mostramos imagen del resto de pokemons
    charizard.className = "show";
    blast.className = "show";
    pikachu.className = "show";
    eevee.className = "show";

    //set fondos del pokemon seleccionado
    header.className = "header diglett-bg";
    footer.className = "footer-container diglett-bg";
    tittle.className = "container-header-left diglett-bg";
    th.forEach(diglettbg);
}

pikachu.onclick = function(){

    // cambiamos al pokemon seleccionado
    img.src = "images/pikachu.png";
    img2.src = "images/pikachu.png";
    pok.innerHTML = "PIKACHU";

    // ocultamos boton del pokemon seleccionado
    contPikachu.className = "pokemon hidden";
    pikachu.className = " hidden";

    // mostramos contenedor del resto de pokemons
    contCharizard.className = "pokemon show";
    contBlast.className = "pokemon show";
    contdiglett.className = "pokemon show";
    contEevee.className = "pokemon show";

    // mostramos imagen del resto de pokemons
    charizard.className = "show";
    blast.className = "show";
    diglett.className = "show";
    eevee.className = "show";

    //set fondos del pokemon seleccionado
    header.className = "header pikachu-bg";
    footer.className = "footer-container pikachu-bg";
    tittle.className = "container-header-left pikachu-bg";
    th.forEach(pikachubg);
}

eevee.onclick = function(){

    // cambiamos al pokemon seleccionado
    img.src = "images/eevee.png";
    img2.src = "images/eevee.png";
    pok.innerHTML = "EEVEE";

    // ocultamos boton del pokemon seleccionado
    contEevee.className = "pokemon hidden";
    eevee.className = " hidden";

    // mostramos contenedor del resto de pokemons
    contCharizard.className = "pokemon show";
    contBlast.className = "pokemon show";
    contdiglett.className = "pokemon show";
    contPikachu.className = "pokemon show";

    // mostramos imagen del resto de pokemons
    charizard.className = "show";
    blast.className = "show";
    diglett.className = "show";
    pikachu.className = "show";

    //set fondos del pokemon seleccionado
    header.className = "header eevee-bg";
    footer.className = "footer-container eevee-bg";
    tittle.className = "container-header-left eevee-bg";
    th.forEach(eeveebg);
}