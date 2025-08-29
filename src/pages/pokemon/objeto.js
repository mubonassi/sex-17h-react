//Criando objeto simples e puro (sem classe)
let nome = "Murilo";
let idade = 31;
let profissao = "Professor";

let pessoaMurilo = {
  //Atributos
  nome: "Murilo",
  idade: 31,
  profissao: "Professor",

  //Métodos
  falar: function(){
    console.log(`Olá, Mundo! Meu nome é ${this.nome}`);
  }
};

pessoaMurilo.falar();

//Criando uma classe chamada pessoa
class Pessoa{
  constructor(nome,idade,profissao){
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
  falar(){
    console.log(`Olá, Mundo! Meu nome é ${this.nome}`);   
  }
}

let murilo = new Pessoa("Murilo",31,"Professor");
let isaque = new Pessoa("Isaque",16,"Aluno");
let lucas = new Pessoa("Lucas",15,"Minecraft");
let vicente = new Pessoa("Vicente",15,"Agiota");
