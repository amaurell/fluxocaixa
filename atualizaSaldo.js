


function atualizaSaldo(){
    let pegaValorEntrada = Number(document.querySelector(".entrada").value)
    let pegaValorSaida = Number(document.querySelector(".saida").value)
    let pegaSaldo = document.querySelector(".saldo").value = String(pegaValorEntrada-pegaValorSaida)
    return
    
}
export {atualizaSaldo}