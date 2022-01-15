const fs = require('fs')


const data = JSON.parse(fs.readFileSync('./1-json.json').toString())

data.name = 'Michael'
data.age = 56

fs.writeFileSync('./1-json.json', JSON.stringify(data))
