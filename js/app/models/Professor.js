class Professor {

    constructor(nome, contato, apelido, cargo, area, email) {

        this._nome = nome;
        this._contato = contato;
        this._apelido = apelido;
        this._cargo = cargo;
        this._area = area;
        this._email = email;
        Object.freeze(this);
    }

    get nome() {

        return this._nome;
    }

    get contato() {

        return this._contato;
    }

    get apelido() {

        return this._apelido;
    }

    get cargo() {

        return this._cargo;
    }

    get area() {

        return this._area
    }

    get email() {

        return this._email;
    }
}