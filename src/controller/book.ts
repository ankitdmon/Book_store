import { Request, Response } from "express";
import {
  errorResponse,
  failResponse,
  successResponse,
} from "../helper/response";

export const addBook = async (req: Request, res: Response) => {
  try {
    return successResponse(req, res, "Book added!!");
  } catch (err) {
    return errorResponse(req, res, err as Error);
  }
};

export const getBooks = async (req: Request, res: Response) => {
  try {
    return successResponse(req, res, "Books!!");
  } catch (err) {
    return errorResponse(req, res, err as Error);
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    return successResponse(req, res, "Book updated!!");
  } catch (err) {
    return errorResponse(req, res, err as Error);
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    return successResponse(req, res, "Book deleted!!");
  } catch (err) {
    return errorResponse(req, res, err as Error);
  }
};
