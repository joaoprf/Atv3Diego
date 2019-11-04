var Jogador = function (nome, idade, altura, peso) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
}
    
Jogador.prototype.toString = function() {
    return this.nome + ", " + this.idade + " , " + this.altura + " , " + this.peso;
}
    
Jogador.prototype.imc = function () {
    var imc = this.peso / (this.altura * this.altura);
    return imc;
}

let a = new Aluno('Teste', 21, 1.65, 60)
//console.log('Nome: ' + a.toString())
//console.log('IMC: ' + a.imc())