const { getToDos, saveToDo, updateTodDo, deleteTodDo } = require("../controller/ToDoController");

const { Router } = require("express")

const router = Router();

router.get("/get", getToDos);
router.post("/save", saveToDo);
router.put("/update/:id", updateTodDo);
router.delete("/delete/:id", deleteTodDo);

module.exports = router;