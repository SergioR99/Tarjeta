const bottonConfirn = document.getElementById('boton-confirn')

function traerValor() {
    const cardNumber = document.getElementById('card-number').value
    document.getElementById('card-number-text').innerHTML = cardNumber

    const cardName = document.getElementById('card-name').value
    document.getElementById('card-name-text').innerHTML = cardName

    const cardCvc = document.getElementById('card-cvc').value
    document.getElementById('card-cvc-text').innerHTML = cardCvc

    const cardMes = document.getElementById('card-mes').value
    document.getElementById('card-mes-text').innerHTML = cardMes

    const cardAnio = document.getElementById('card-anio').value
    document.getElementById('card-anio-text').innerHTML = cardAnio
}

bottonConfirn.addEventListener('click', traerValor)