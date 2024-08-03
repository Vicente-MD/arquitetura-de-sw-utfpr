import Aluno from "./model/Aluno.js"
import Turma from "./model/Turma.js"
import TurmaPresencial from "./model/TurmaPresencial.js"

export default function main() {
    let aluno1 = new Aluno('vicente123', 'Vicente', '123456')
    let aluno2 = new Aluno('joao123', 'João', '654321')
    let aluno3 = new Aluno('carlos123', 'Carlos', '765123')

    let turma1 = new Turma('codigo1', 5)
    let turma2 = new Turma('codigo2', 6)
    let turma3 = new Turma('codigo3', 7)

    let turmaPresencial1 = new TurmaPresencial('codigo4', 5, 0.65)
    let turmaPresencial2 = new TurmaPresencial('codigo5', 6, 0.75)
    let turmaPresencial3 = new TurmaPresencial('codigo6', 7, 0.85)
    let turmaPresencial4 = new TurmaPresencial('codigo7', 5.9, 0.75)

    console.log(aluno1)
    console.log(aluno2)
    console.log(aluno3)

    console.log(turma1)
    console.log(turma2)
    console.log(turma3)
    console.log(turma1.aprovado())
    console.log(turma2.aprovado())
    console.log(turma3.aprovado())

    console.log(turmaPresencial1)
    console.log(turmaPresencial2)
    console.log(turmaPresencial3)

    console.log(turmaPresencial1.aprovado())
    console.log(turmaPresencial2.aprovado())
    console.log(turmaPresencial3.aprovado())
    console.log(turmaPresencial4.aprovado())
}

main()