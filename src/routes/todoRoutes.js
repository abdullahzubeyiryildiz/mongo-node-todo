const router = require("express").Router();
const todoController = require('../controllers/todoController');

const checkAuth = require("../middleware/checkAuth");

router.get('/todos',checkAuth, todoController.todoGetAll);
router.get('/todos/:id',checkAuth, todoController.todoGet);
router.post('/todos',checkAuth,  todoController.todoAdd);
router.put('/todos/:id',checkAuth, todoController.todoUpdate);
router.delete('/todos/:id',checkAuth, todoController.todoDelete);

module.exports = router;