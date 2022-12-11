const fs = require("fs")

function createFile(filename, content){
    let data = content || ""
    let createFile = fs.writeFile(filename, data, (err) => {
        let nome = filename ||"porra"
        if(nome == "porra") return console.log("Enter the name of the file you want to create.") 
    })
    return createFile
}

module.exports = {
    createFile: createFile
}