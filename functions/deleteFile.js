const fs = require("fs")

function deleteFile(filename){
    let deletefile = fs.unlink(filename, (err) => {
        if(err) throw err;
        console.log("The file: " + filename + " as deleted.")
    })
    return deleteFile
}

module.exports = {
    deleteFile: deleteFile 
}