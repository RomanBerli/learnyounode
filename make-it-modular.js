var filterFn = require('./mymodule.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('Error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})
