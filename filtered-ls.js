let fs = require('fs');
var path = require('path')

let directory = process.argv[2];
let fileType = '.'+process.argv[3];


fs.readdir(directory, function (err, files) {
    if (err) {
        console.error(err);
        return;
    }
    files.forEach(function(file) {
        if (path.extname(file) === fileType) {
            console.log(file)
        }
    })
});