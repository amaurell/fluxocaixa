
import { criaTr } from "./criaTr.js";
import { criaTd } from "./criaTd.js";
import { criaIconeReceita } from "./criaIconeReceita.js";
import { criaIconeDespesa } from "./criaIconeDespesa.js";
import { criaTrash } from "./criaTrash.js";

import { somaControleLinha } from "./controleLinha.js";


const pegaTrBoxList = document.querySelector(".box-list")



let acumulaEntrada = 0
let acumulaSaida = 0  
let saldo = 0
// let controleLinha = 0
let temp = 0


function montaArrayJson(){
    
    

    var carregaDadosJson = JSON.parse(localStorage.getItem('data'));

    carregaDadosJson.map((indice)=>{

        let tr = criaTr()
        pegaTrBoxList.appendChild(tr)


        let controle = indice[2]

        let td = criaTd()
        
        temp = somaControleLinha(temp)
        td.innerText = temp
        tr.appendChild(td)

        td = criaTd()
        td.innerText = indice[0]
        tr.appendChild(td)


        td = criaTd()
        td.innerText = indice[1]+".00"
   
        tr.appendChild(td)
 
        if (controle == "entrada") {
            td = criaTd()
            let iconeReceita = criaIconeReceita()
            td.appendChild(iconeReceita)
            tr.appendChild(td)

            acumulaEntrada += Number(indice[1])
            document.querySelector(".entrada").value = acumulaEntrada
        }else {
            td = criaTd()
            let iconeDespesa = criaIconeDespesa()
            td.appendChild(iconeDespesa)
            tr.appendChild(td)

            acumulaSaida += Number(indice[1])
            document.querySelector(".saida").value = acumulaSaida
        }
     

       
        td = criaTd()
        td.setAttribute("class",temp)
        
        let trash = criaTrash()
        td.appendChild(trash)
        tr.appendChild(td)
        


    })
    
    
   
    document.querySelector(".saldo").value =  Number(document.querySelector(".entrada").value)-Number(document.querySelector(".saida").value)
   
}

export {montaArrayJson}


