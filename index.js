const fs = require("fs")

exports.createFile = function(filename, content){
    let data = content || ""
    let createFile = fs.writeFile(filename, data, (err) => {
        let nome = filename ||"porra"
        if(nome == "porra") return console.log("Enter the name of the file you want to create.") 
    })
    return createFile
}

exports.deleteFile = function(filename){
    let nome = filename || "porra"
    let deletefile = fs.unlink(filename, (err) => {
        if(nome == "porra") return console.log("Enter the name of the file you want to delete.")
    })
    return deleteFile
}

exports.openFile = function(filename){
    let nome = filename ||"porra"
    let openfile = fs.readFile(filename, 'utf-8', function(err, data) {
        if(nome == "porra") return console.log("Enter the name of the file you want to open.")
        console.log(data)
    })
    return openfile
}

exports.createFolder = function(foldername){
    let nome = foldername || "porra"
    let createfolder = fs.mkdir(foldername, (err) => {
        if(nome == "porra") return console.log("Enter the name of the folder you want to create.")
    })
    return createfolder
}