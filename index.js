const fs = require("fs")

function createFile(filename, content){
    let data = content || ""
    let createFile = fs.writeFile(filename, data, (err) => {
        let nome = filename ||"porra"
        if(nome == "porra") return console.log("Enter the name of the file you want to create.") 
    })
    return createFile
}

function deleteFile(filename){
    let nome = filename || "porra"
    let deletefile = fs.unlink(filename, (err) => {
        if(nome == "porra") return console.log("Enter the name of the file you want to delete.")
    })
    return deleteFile
}

module.exports = {
    deleteFile: deleteFile,
    createFile: createFile
}