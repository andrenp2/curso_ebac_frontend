/* 
    Integrando JS com HTML
*/

const form = document.getElementById('form-numeros');

function validaCampos(numeroA, numeroB){
    return numeroB > numeroA;
}

form.addEventListener('submit', function(e) {

    e.preventDefault();

    const campoA = document.getElementById("campoA");
    const campoB = document.getElementById("campoB");
    const msgSucesso = document.querySelector('.success-message');
    const msgErro = document.querySelector('.msgNumber');


    formEhValido = validaCampos(campoA.value, campoB.value);

    if(formEhValido){
        msgSucesso.innerHTML = "Formulário enviado com sucesso!";
        msgSucesso.style.display = 'block';

        campoA.value = "";
        campoB.value = "";
        msgErro.style.display = 'none';

    } else {
        msgErro.innerHTML = "O número digitado deve ser menor que B.";
        msgSucesso.style.display = 'none';
        msgErro.style.display = 'block';
    }
})

