import Turma from "./Turma.js";

export default class TurmaPresencial extends Turma {
    #frequencia;

    constructor(codigo, nota,frequencia) {
        super(codigo, nota)
        this.#frequencia = frequencia
    }


    aprovado() {
        return this.getNota() >= 6 && this.#frequencia >= 0.75;
    }

    getFrequencia() {
        return this.#frequencia
    }

    setFrequencia(frequencia) {
        return this.#frequencia = frequencia
    }
}
