const bottonConfirn = document.getElementById('boton-confirn')

function inputVacio(value) {
    const cardName = document.getElementById('card-name').value

    if (value.length == 0 || /^\s+$/.test(value)) {
        console.log('Ingrese dato');
        return false
    }
    return true;
}

console.log(document.getElementById('formulario'));
const form = new FormData (
    document.getElementById('formulario')
)

console.log(form.entries());

bottonConfirn.addEventListener('click', inputVacio)

function traerValor() {
    const cardName = document.getElementById('card-name').value
    const cardNameText = document.getElementById('card-name-text');
    cardNameText.innerHTML = cardName.length > 0 ? cardName : cardNameText;

    const cardNumber = document.getElementById('card-number').value
    const cardNumberText = document.getElementById('card-number-text')
    cardNumberText.innerHTML = cardNumber.length > 0 ? cardNumber : cardNumberText.innerHTML;

    const cardCvc = document.getElementById('card-cvc').value
    document.getElementById('card-cvc-text').innerHTML = cardCvc

    const cardMes = document.getElementById('card-mes').value
    document.getElementById('card-mes-text').innerHTML = cardMes

    const cardAnio = document.getElementById('card-anio').value
    document.getElementById('card-anio-text').innerHTML = cardAnio

    console.log('entra');
}

// bottonConfirn.addEventListener('click', traerValor)