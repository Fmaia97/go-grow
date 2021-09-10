class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposValidos();
    const emailsValidos = this.emailsValidos();

    if (!camposValidos || !emailsValidos) {
      return;
    }
    this.formulario.submit();
  }
  
  camposValidos() {
    const nome = document.querySelector('.nome');
    const sobrenome = document.querySelector('.sobrenome');

    if (!nome.value || !sobrenome.value) {
      this.criaErro(nome, 'Campo inválido');
      this.criaErro(sobrenome, 'Campo inválido');
      return;
    }
    return true;
  }

  emailsValidos() {
    const email = document.querySelector('.email');

    if (
      email.value.indexOf('@') == -1 ||
      email.value.indexOf('.') == -1 ||
      !email.value 
    ) {
      this.criaErro(email, 'Email inválido');
      return;
    }
    return true;
  }

  criaErro(campo, msg) {
    campo.value = "";
    campo.setAttribute('placeholder', msg);
  }
}

const valida = new ValidaFormulario();