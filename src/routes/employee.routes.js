const express = require('express')
const router = express.Router()
const emp = require('../models/emp.model.js')

router.post('/', async (req, res) => {
    await emp.insertEmp(req.body)
        .then(emp => res.status(201).json({
            message: `New Employee #${post.id} has been created`,
            content: emp
        }))
        .catch(err => res.status(500).json({ message: err.message }))
})

router.get('/', async (_, res) => {
    await emp.getEmps()
        .then(emps => res.json(emps))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    await emp.getEmp(id)
        .then(emp => res.json(emp))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    await emp.updateEmp(id, req.body)
        .then(emp => res.json({
            message: `Employee #${id} has been updated`,
            content: emp
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
})


router.delete('/:id', async (req, res) => {
    const id = req.params.id

    await post.deleteEmp(id)
        .then(emp => res.json({
            message: `Employee #${id} has been deleted`
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
})

module.exports = router