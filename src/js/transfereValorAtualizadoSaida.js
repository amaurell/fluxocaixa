import { atualizaSaldo } from "./atualizaSaldo.js"

function transfereValorAtualizadoSaida(valor){
    let pegaEntrada = document.querySelector('.saida').value = valor
    atualizaSaldo()
    return
}
export {transfereValorAtualizadoSaida}