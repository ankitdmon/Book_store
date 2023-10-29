import { Request, Response } from "express";
import {
  errorResponse,
  failResponse,
  successResponse,
} from "../helper/response";
import { BookModel } from "../model/book";
import mongoose from "mongoose";

export const addBook = async (req: Request, res: Response) => {
  try {
    const { title, author, summary } = req.body;
    if (!title || !author) {
      return failResponse(req, res, "Title and Author is required!!");
    }
    const book = await BookModel.create({ title, author, summary });
    //console.log("Book: ", book);
    return successResponse(req, res, book, "Book added!!");
  } catch (err) {
    return errorResponse(req, res, err as Error);
  }
};

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookModel.find({ deletedAt: null });
    //console.log("Books: ", books)
    return successResponse(req, res, books, "Books!!");
  } catch (err) {
    return errorResponse(req, res, err as Error);
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      return failResponse(req, res, "Book id is required!!");
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return failResponse(req, res, "Invalid book ID");
    }
    const { title, author, summary } = req.body;
    const updatedBook = await BookModel.findOneAndUpdate(
      { _id: id, deletedAt: null },
      { title, author, summary },
      { new: true }
    );

    if (!updatedBook) {
      return failResponse(req, res, "No book found with this ID");
    }

    console.log("Updated Book: ", updatedBook);
    return successResponse(req, res, updatedBook, "Book updated!!");
  } catch (err) {
    return errorResponse(req, res, err as Error);
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      return failResponse(req, res, "Book id is required!!");
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return failResponse(req, res, "Invalid book ID");
    }
    const book = await BookModel.findOne({ _id: id, deletedAt: null });
    if (!book) {
      return failResponse(req, res, "No book found with this ID");
    }
    book.deletedAt = new Date();
    await book.save();
    return successResponse(req, res, book, "Book deleted!!");
  } catch (err) {
    return errorResponse(req, res, err as Error);
  }
};

export const getBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      return failResponse(req, res, "Book id is required!!");
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return failResponse(req, res, "Invalid book ID");
    }

    const book = await BookModel.findOne({ _id: id, deletedAt: null });
    if (!book) {
      return failResponse(req, res, "No book is available with this Id");
    }
    // console.log("Book: ", book);
    return successResponse(req, res, book, "Book!!");
  } catch (err) {
    return errorResponse(req, res, err as Error);
  }
};
