const { Queue } = require('../models')

module.exports = {

    async index(req, res) {
        try {
            const queues = await Queue.findAll()
            res.send(queues)
        } catch (err) {
            res.status(500).send({
                error: 'The queues information was incorrect'
            })
        }
    },

    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const queue = await Queue.create(req.body)
            res.send(queue.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create queue incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Queue.update(req.body, {
                where: {
                    id: req.params.queueId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update queue incorrect'
            })
        }
    },

async remove(req, res) {
        try {
            const queue = await Queue.findOne({
                where: {
                    id: req.params.queueId
                }
            })
            if (!queue) {
                return res.status(403).send({
                    error: 'The queue information was incorrect'
                })
            }
            await queue.destroy()
            res.send(queue)
        } catch (err) {
            res.status(500).send({
                error: 'The queue information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const queue = await Queue.findByPk(req.params.queueId)
            res.send(queue)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The queue information was incorrect'
            })
        }
    }
}
