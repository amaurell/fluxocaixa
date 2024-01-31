
let pegaHistorico = document.querySelector(".historico")
let pegaValor = document.querySelector(".valor")


function insereJson(pegaHistorico,pegaValor,controle){
    let novoArray = [pegaHistorico,pegaValor,controle]
    
    if(localStorage.getItem('data') == null){
        localStorage.setItem('data','[]')
    }
    var carregaDadosJson = JSON.parse(localStorage.getItem('data'));
    carregaDadosJson.push(novoArray)
    localStorage.setItem('data',JSON.stringify(carregaDadosJson))
}

export {insereJson}
