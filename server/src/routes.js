const UserController = require('./controllers/UserController.js');
const UserAuthenController = require('./controllers/UserAuthenController');
const isAuthenController = require('./authen/isAuthenController');
const QueueController = require('./controllers/QueueController');
const MaidController = require('./controllers/MaidController');
const BillController = require('./controllers/BillController');

module.exports = (app) => {
    app.post('/user', UserController.create)
    app.put('/user/:userId', UserController.put)
    app.delete('/user/:userId', UserController.remove)
    app.get('/user/:userId', UserController.show)
    app.get('/users',isAuthenController ,UserController.index)
    
    app.post('/login', UserAuthenController.login)

    app.post('/queue', QueueController.create)
    app.put('/queue/:queueId', QueueController.put)
    app.delete('/queue/:queueId', QueueController.remove)
    app.get('/queue/:queueId', QueueController.show)
    app.get('/queues', QueueController.index)

    app.post('/maid', MaidController.create)
    app.put('/maid/:maidId', MaidController.put)
    app.delete('/maid/:maidId', MaidController.remove)
    app.get('/maid/:maidId', MaidController.show)
    app.get('/maids', MaidController.index)

    app.post('/bill', BillController.create)
    app.put('/bill/:billId', BillController.put)
    app.delete('/bill/:billId', BillController.remove)
    app.get('/bill/:billId', BillController.show)
    app.get('/bills', BillController.index)

    
}