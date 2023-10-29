import express from "express";
import * as bookController from "../controller/book";

const router = express.Router();

router.post("/book", bookController.addBook);
router.get("/books", bookController.getBooks);
router.put("/book/:id", bookController.updateBook);
router.delete("/book/:id", bookController.deleteBook);
router.get("/book/:id", bookController.getBook);

export default router;
