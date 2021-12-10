class ListaProfessores {

    constructor() {

        this._professores = [];
    }

    adiciona(professor) {

        this._professores.push(professor);
    }

    exclui(professor){

        this._professores.splice(professor);
    }

    get professores() {

        return [].concat(this._professores);
    }
}