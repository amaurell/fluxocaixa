import { insereRegistro } from "./insereRegistro.js"
import { guardaConteudoStatus } from "./guardaConteudoStatus.js"
import { montaArrayJson } from "./montaArrayJson.js"


const pegaBtn       = document.querySelector(".btn")
let pegaStatus      = document.getElementById("status")
const pegaTrBoxList = document.querySelector(".box-list")


pegaBtn.addEventListener("click", insereRegistro)
pegaStatus.addEventListener("change", guardaConteudoStatus)

pegaTrBoxList.addEventListener("click",function(e){
  
  if(e.target.getAttribute("id") == "delete"){
    

        let removeTd = e.target.parentElement.parentElement
        let ordemArray = Number(e.target.parentElement.getAttribute("class"))
        ordemArray --
        console.log(ordemArray)
        let carregaDadosJson = JSON.parse(localStorage.getItem('data'));
        let arrayTemporario = carregaDadosJson.splice(ordemArray,1)
        localStorage.setItem('data',JSON.stringify(carregaDadosJson))
        removeTd.remove()
        window.location.reload();
    
  }
})






  if(localStorage.getItem('data') !== null){
    montaArrayJson()
    }

insereRegistro()

