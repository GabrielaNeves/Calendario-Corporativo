class ProfessorController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputContato = $('#contato');
        this._inputApelido = $('#apelido');
        this._inputCargo = $('#cargo');
        this._inputArea = $('#area');
        this._inputEmail = $('#email');
        this._listaProfessores = new ListaProfessores();
        this._professoresView = new ProfessoresView($('#professoresView'));
        this._professoresView.update(this._listaProfessores);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();
        this._listaProfessores.adiciona(this._criarProfessor());
        this._professoresView.update(this._listaProfessores);

        this._mensagem.texto = 'Professor cadastrado com sucesso!'
        this._mensagemView.update(this._mensagem);
        this._limpaFormulario();
        
        console.log(this._listaProfessores.professores);
    }

    exclui(event) {

        event.preventDefault();
        this._listaProfessores.exclui(this.professor);

        this._mensagem.texto = 'Professor excluido com sucesso'
        this._mensagemView.update(this._mensagem);
        this._limpaFormulario();
    }
    
    _criarProfessor() {
        
        return new Professor(
            this._inputNome.value,
            this._inputContato.value,
            this._inputApelido.value,
            this._inputCargo.value,
            this._inputArea.value,
            this._inputEmail.value
        );
    }

    _limpaFormulario() {

        this._inputNome.value = '';
        this._inputContato.value = '';
        this._inputApelido.value = '';
        this._inputCargo.value = '';
        this._inputArea.value = '';
        this._inputEmail.value = '';
        this._inputNome.focus();
    }
}