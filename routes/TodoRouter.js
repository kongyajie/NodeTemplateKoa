const Router = require('koa-router');
var todoController = require('../controllers/todoController');

var router = new Router();

router.get('/queryAll', todoController.getAll);
router.post('/create', todoController.createTodo);
router.post('/delete/:id', todoController.deleteTodo);

module.exports = router;