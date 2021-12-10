class ProfessoresView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model) {
        return `<table class="tabela-professores">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Contato</th>
                    <th>Apelido</th>
                    <th>Cargo</th>
                    <th>Área</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                ${model.professores.map(n => 
                     `
                        <tr>
                            <td>${n.nome}</td>
                            <td>${n.contato}</td>
                            <td>${n.apelido}</td>
                            <td>${n.cargo}</td>
                            <td>${n.area}</td>
                            <td>${n.email}</td>
                            <!--<td><input type="button" value="Apagar" onclick="professorContoller.exclui()"></td>-->
                        </tr>
                    `
                ).join('')}
            </tbody>
            <tfoot>
                    <td colspan = "5"><strong>Total</strong></td>
                <td><strong>
                    ${
                        model.professores.reduce(total => total += 1, 0)
                    }
                </strong><td>
            </tfoot>
        </table>
        `;
    }
}
