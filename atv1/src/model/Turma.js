export default class Turma {
    #codigo;
    #nota;

    constructor(codigo, nota) {
        this.#codigo = codigo
        this.#nota = nota
    }

    aprovado() {
        return this.#nota >= 6;
    }

    getCodigo() {
        return this.#codigo
    }

    setCodigo(codigo) {
        return this.#codigo = codigo
    }

    getNota() {
        return this.#nota
    }

    setNota(nota) {
        return this.#nota = nota
    }
}