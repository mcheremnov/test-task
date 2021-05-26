const fs = require('fs')

const genNewId = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}
const newDate = () => new Date().toString()

function arrayContains(array, id) {
    return new Promise((resolve, reject) => {
        const emp = array.find(e => e.id == id)
        if (!emp) {
            reject({
                message: 'No such a employee in database',
                status: 404
            })
        }
        resolve(emp)
    })
}
function writeJSONFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}
module.exports = {
    genNewId,
    newDate,
    arrayContains,
    writeJSONFile
}