function criaTrash(){
        let criaTrash = document.createElement("box-icon")
        criaTrash.setAttribute("name","trash")
        criaTrash.setAttribute("class","btn-trash")
        criaTrash.setAttribute("id","delete")
        return criaTrash
}
export {criaTrash}