const { Router } = require("express");
const {
  getToDos,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controller/ToDoController");

const router = Router();

router.get("/get", getToDos);
router.post("/save", saveToDo);
router.put("/update/:id", updateToDo);
router.delete("/delete/:id", deleteToDo);

module.exports = router;