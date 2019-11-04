var Aluno = function(matricula, nome, prova1, prova2, prova3, trabalho1, trabalho2) {
    this.matricula = matricula
    this.nome = nome
    this.notas = []
    if(prova1 > 0 && prova1 < 20)
    {
        this.notas.push(prova1)
    } else {
        throw new Error('Nota para prova1 invalida')
    }
    if(prova2 > 0 && prova2 < 20)
    {
        this.notas.push(prova2)
    } else {
        throw new Error('Nota para prova2 invalida')
    }
    if(prova3 > 0 && prova3 < 20)
    {
        this.notas.push(prova3)
    } else {
        throw new Error('Nota para prova3 invalida')
    }
    if(trabalho1 > 0 && trabalho1 < 20)
    {
        this.notas.push(trabalho1)
    } else {
        throw new Error('Nota para trabalho1 invalida')
    }
    if(trabalho2 > 0 && trabalho2 < 20)
    {
        this.notas.push(trabalho2)
    } else {
        throw new Error('Nota para trabalho2 invalida')
    }
}

Aluno.prototype.getNome = function () {
    return this.nome
}

Aluno.prototype.getNotas = function () {
    return this.notas
}
Aluno.prototype.getNotaFinal = function () {
    return this.notafinal
}
Aluno.prototype.maiorNota = function () {
    var maiorNota = -1
    for (var i = 0; i < this.notas.length; i++) {
        if(maiorNota < this.notas[i]) {
            maiorNota = this.notas[i]
        }
    }
    return maiorNota
}
Aluno.prototype.menorNota = function () {
    var menorNota = 21
    for (var i = 0; i < this.notas.length; i++) {
        if(menorNota > this.notas[i]) {
            menorNota = this.notas[i]
        }
    }
    return menorNota
}
Aluno.prototype.media = function () {
    var notafinal = 0
    for (var i = 0; i < this.notas.length; i++) {
        notafinal += this.notas[i]
    }
    return notafinal / this.notas.length
}
Aluno.prototype.calculaNotaFinal = function () {
    this.notafinal = 0
    for (var i = 0; i < this.notas.length; i++) {
        this.notafinal += this.notas[i]
    }
}

let a = new Aluno(123, 'teste', 5, 8, 10, 12, 15)
a.calculaNotaFinal()
//console.log('getNome: ' + a.getNome())
//console.log('maiorNota: ' + a.maiorNota())
//console.log('menorNota: ' + a.menorNota())
//console.log('media: ' + a.media())
//console.log('getNotaFinal: ' + a.getNotaFinal())


