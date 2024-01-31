import {transfereValorAtualizadoEntrada} from "./transfereValorAtualizadoEntrada.js"
import { transfereValorAtualizadoSaida } from "./transfereValorAtualizadoSaida.js"
import { guardaConteudoStatus } from "./guardaConteudoStatus.js"
import { criaTr } from "./criaTr.js"
import { criaTd } from "./criaTd.js"
import { criaTrash } from "./criaTrash.js"
import {criaIconeReceita} from "./criaIconeReceita.js"
import { insereJson } from "./insereJson.js"
import { criaIconeDespesa } from "./criaIconeDespesa.js"
import { somaControleLinha } from "./controleLinha.js"
import { montaArrayJson } from "./montaArrayJson.js"



const pegaTrBoxList = document.querySelector(".box-list")
let pegaHistorico = document.querySelector(".historico")
let pegaValor = document.querySelector(".valor")
let pegaStatus = document.getElementById("status")





function insereRegistro(){ 
    
        let tr = criaTr()
        pegaTrBoxList.appendChild(tr)
        let controle = guardaConteudoStatus()

    if (controle === "entrada"){

       
        let td = criaTd()
        td.innerText = somaControleLinha(0)
        tr.appendChild(td)


        td = criaTd()
        td.innerText = (pegaHistorico.value)
        tr.appendChild(td)


        td = criaTd()
        td.innerText = pegaValor.value+".00"
   
        tr.appendChild(td)
 
       
        td = criaTd()
        let iconeReceita = criaIconeReceita()
        td.appendChild(iconeReceita)
        tr.appendChild(td)
        

        let pegaValorEntrada = Number(document.querySelector(".entrada").value)
        pegaValorEntrada += Number(pegaValor.value)
        transfereValorAtualizadoEntrada(String(pegaValorEntrada))
       
        td = criaTd()
        let trash = criaTrash()
        td.appendChild(trash)
        tr.appendChild(td)
        insereJson(pegaHistorico.value, pegaValor.value,controle)
        window.location.reload();
        controle = "escolha"
    }else {

        if (controle === "saida") {
            let td = criaTd()
            td.innerText = somaControleLinha(0)
            tr.appendChild(td)


            pegaTrBoxList.appendChild(tr)
            td = criaTd()
            td.innerText = pegaHistorico.value
            td.setAttribute("class","box-list-line")
            tr.appendChild(td)
        
            td = criaTd()
            td.innerText = pegaValor.value+".00"
           
            tr.appendChild(td)


            td = criaTd()
            let iconeDespesa = criaIconeDespesa()
            td.appendChild(iconeDespesa)
            tr.appendChild(td)
            
            let pegaValorSaida = Number(document.querySelector(".saida").value)
            pegaValorSaida += Number(pegaValor.value)
            transfereValorAtualizadoSaida(String(pegaValorSaida))
         
          

            td = criaTd()
            let trash = criaTrash()
            td.appendChild(trash)
            tr.appendChild(td)
            insereJson(pegaHistorico.value, pegaValor.value,controle)
            window.location.reload();
            controle = "escolha"
        }
    }
}

export {insereRegistro}