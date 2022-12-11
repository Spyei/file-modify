const fs = require("fs")

function deleteFile(filename){
    let nome = filename || "porra"
    let deletefile = fs.unlink(filename, (err) => {
        if(nome == "porra") return console.log("Enter the name of the file you want to delete.")
    })
    return deleteFile
}

module.exports = {
    deleteFile: deleteFile 
}