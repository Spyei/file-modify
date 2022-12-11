const fs = require("fs")

function createFile(filename, content){
    let data = content || "data"
    let createFile = fs.writeFile(filename, data, (err) => {
        if (err) throw err;
            console.log("Created file with name: " + filename)
        })
    return createFile
}

module.exports = {
    createFile: createFile
}