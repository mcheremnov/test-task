const filename = '../data/employee.json'
let emps = require(filename)
const helper = require('../utils/helper')

function getEmps() {
    return new Promise((res, rej) => {
        if (emps.lenght === 0) {
            rej({
                "status": "202",
                "message": "No employee available"
            })
        }
        res(emps)
    })
}
function getEmp(id) {
    return new Promise((res, rej) => {
        helper.arrayContains(emps, id)
            .then(emp => res(emp))
            .catch(err => rej(err))
    })
}
function insertEmp(newEmp) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.genNewId(emps) }
        newEmp = { ...id, ...newEmp }
        emps.push(newEmp)
        helper.writeJSONFile(filename, emps)
        resolve(newEmp)
    })
}
function updateEmp(id, newEmp) {
    return new Promise((res, rej) => {
        helper.arrayContains(emps, id)
            .then(emp => {
                const index = emps.findIndex(e => e.id == emp.id)
                id = { id: emp.id }
                posts[index] = { ...id, ...newEmp }
                helper.writeJSONFile(filename, emps)
                res(emps[index])
            })
            .catch(err => rej(err))
    })
}
function deleteEmp(id) {
    return new Promise((res, rej) => {
        helper.mustBeInArray(emps, id)
            .then(() => {
                posts = emps.filter(e => e.id !== id)
                helper.writeJSONFile(filename, emps)
                res()
            })
            .catch(err => rej(err))
    })
}


module.exports = {
    insertEmp,
    getEmps,
    getEmp,
    updateEmp,
    deleteEmp
}