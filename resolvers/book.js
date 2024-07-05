import { Book } from "../models/book.js";
import { Loan } from "../models/loan.js";

export const bookResolvers = {
  // query
  Query: {
    books: async () => await Book.findAll(),
    book: async (_, args) => await Book.findByPk(args.id),
  },

  // mutation
  Mutation: {
    deleteBook: async (_, args) => {
      await Book.destroy({ where: { id: args.id } });
      return await Book.findAll();
    },
    updateBook: async (_, args) => {
      await Book.update(args.editBookInput, {
        where: { id: args.id },
      });

      return await Book.findByPk(args.id);
    },
    createBook: async (_, args) => await Book.create(args.bookInput),
  },

  // related data
  Book: {
    loans: async (parent) => {
      return await Loan.findAll({ where: { book_id: parent.id } });
    },
  },
};
