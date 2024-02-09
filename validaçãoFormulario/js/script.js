class ValidadorDeFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', event => {
            this.analisarEnvio(event);
        });
    }

    analisarEnvio(event) { //verificar se os inputs são válidos
        event.preventDefault(); //travar o envio para analisar os campos antes
        const camposValidos = this.camposValidos();
        const senhasValidas = this.senhasValidas();

        if (camposValidos && senhasValidas) {
            window.alert('Formulário enviado com sucesso.');
            this.formulario.submit();
        }
    }

    camposValidos() {
        let valid = true;

        for (let textoDeErro of this.formulario.querySelectorAll('.erro-texto')) {
            textoDeErro.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.geraMsgErro(campo, `O campo ${label} não pode estar vazio!`);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    senhasValidas() {
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetirSenha');

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.geraMsgErro(senha, 'Campos de senha precisam ser idênticos');
            this.geraMsgErro(repetirSenha, 'Campos de senha precisam ser idênticos');
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.geraMsgErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }

        return valid;
    }

    geraMsgErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.geraMsgErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.geraMsgErro(campo, 'Usuário precisar ter apenas letras e ou números');
            valid = false;
        }

        return valid;
    }

    validaCPF(campo) {
        // Assuming ValidaCpf is a valid class
        const cpf = new ValidaCpf(campo.value);

        if (!cpf.valida) {
            this.geraMsgErro(campo, 'CPF inválido');
            return false;
        }

        return true;
    }
}

const validador = new ValidadorDeFormulario();