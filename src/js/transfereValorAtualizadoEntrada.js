import { atualizaSaldo } from "./atualizaSaldo.js"

function transfereValorAtualizadoEntrada(valor){
    
    let pegaEntrada = document.querySelector('.entrada').value = valor
    atualizaSaldo()
    return
}
export {transfereValorAtualizadoEntrada}