// Exercicio

const alunos = [
    {nome: 'Ana', nota: 5},
    {nome: 'Andre', nota: 10},
    {nome: 'Maria', nota: 8.0},
    {nome: 'Pedro', nota: 7}
]

function alunosAprovados(alunos) {
    const aprovados = alunos.filter(aluno => aluno.nota >= 6.0);
    return aprovados;
}

console.log(alunos);
console.log(alunosAprovados(alunos));