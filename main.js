// Classe com JavaScript
//-------------------------------------------------------------------
// classe base, Animal:
//-------------------------------------------------------------------

function Animal(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;

    this.falar = function() {
        console.log(`${this.nome} ainda não aprendeu a falar.`);
    }
}

//-------------------------------------------------------------------

function Cachorro(nome) {
    // construtor do pai
    Animal.call(this, nome, "Cachorro"); 

    // sobrescrevendo a função falar (latir neste caso)
    this.falar = function () {
        console.log(`${this.nome} late: Au au!`);
    }
}

//-------------------------------------------------------------------

function Gato(nome) {
    // ctor pai
    Animal.call(this, nome, "Gato");

    // sobrescrever falar: miar
    this.falar = function () {
        console.log(`${this.nome} mia: Miau!`);
    }
}

//-------------------------------------------------------------------

const thor = new Cachorro("Thor");
const tchopo = new Gato("Tchopo");
const ghost = new Cachorro("Ghost");

thor.falar();
tchopo.falar();
ghost.falar();

//-------------------------------------------------------------------