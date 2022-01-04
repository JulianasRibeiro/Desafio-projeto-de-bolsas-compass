function formatar(mascara, documento) {
    let i = documento.value.length;
    let saida = mascara.substring(0, 1);
    let texto = mascara.substring(i);
  
    if (texto.substring(0, 1) != saida) {
      documento.value += texto.substring(0, 1);
    }
  }
  
  function validarDtNasc() {
    let value = document.getElementById("nascimento").value;
    let re = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    if (!re.test(value)) {
    
      alert('Data de Nascimento Inválida');
      document.form.nascimento.focus();
      return false;
    }
    return true;
  }
  
  function validarCPF() {
    let value = document.getElementById("cpf").value;
    let re = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/g;
    if (! re.test(value)) {
   
      alert('CPF Inválido');
      document.form.cpf.focus();
      return false;
    }
    return true;
  }
  
  
  function validarTel() {
    let value = document.getElementById("tel").value;
    let re = /^[0-9]{2}-[0-9]{5}-[0-9]{4}/g;
    if (! re.test(value)) {
      
      alert('Telefone Inválido');
      document.form.tel.focus();
      return false;
    }
    return true;
  }
  
  function validarNome() {
    let value = document.getElementById("nome").value;
    let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (!re.test(value)) {
      
      alert('Nome Inválido');
      document.form.nome.focus();
      return false;
    }
    return true;
  }
  
  function validarTudo() {
    return validarNome() && validarTelefone() && validarDtNasc() && validarCPF();
  }