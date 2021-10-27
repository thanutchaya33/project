const { Bill } = require('../models')
module.exports = {
    // get all Bill
    async index(req, res) {
        try {
            const bills = await Bill.findAll()
            res.send(bills)
        } catch (err) {
            res.status(500).send({
                error: 'The bills information was incorrect'
            })
        }
    },
    // create bill
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const bill = await Bill.create(req.body)
            res.send(bill.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create bill incorrect'
            })
        }
    },
    // edit bill, suspend, active
    async put(req, res) {
        try {
            await Bill.update(req.body, {
                where: {
                    id: req.params.billId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update bill incorrect'
            })
        }
    },
    
// delete bill
async remove(req, res) {
        try {
            const bill = await Bill.findOne({
                where: {
                    id: req.params.billId
                }
            })
            if (!bill) {
                return res.status(403).send({
                    error: 'The bill information was incorrect'
                })
            }
            await bill.destroy()
            res.send(bill)
        } catch (err) {
            res.status(500).send({
                error: 'The bill information was incorrect'
            })
        }
    },
    // get bill by id
    async show(req, res) {
        try {
            const bill = await Bill.findByPk(req.params.billId)
            res.send(bill)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The bill information was incorrect'
            })
        }
    }
}
