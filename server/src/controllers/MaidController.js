const { Maid } = require('../models')
module.exports = {
    // get all Maid 
    async index(req, res) {
        try {
            const maids = await Maid.findAll()
            res.send(maids)
        } catch (err) {
            res.status(500).send({
                error: 'The Maids information was incorrect'
            })
        }
    },
    // create Maid 
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const maid = await Maid.create(req.body)
            res.send(maid.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create maid incorrect'
            })
        }
    },
    // edit Maid, suspend, active
    async put(req, res) {
        try {
            await Maid.update(req.body, {
                where: {
                    id: req.params.maidId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Maid incorrect'
            })
        }
    },
    
// delete Maid
async remove(req, res) {
        try {
            const maid = await Maid.findOne({
                where: {
                    id: req.params.maidId
                }
            })
            if (!maid) {
                return res.status(403).send({
                    error: 'The Maid information was incorrect'
                })
            }
            await maid.destroy()
            res.send(maid)
        } catch (err) {
            res.status(500).send({
                error: 'The Maid information was incorrect'
            })
        }
    },
    // get Maid by id
    async show(req, res) {
        try {
            const maid = await Maid.findByPk(req.params.blogId)
            res.send(maid)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The Maid information was incorrect'
            })
        }
    }
}
