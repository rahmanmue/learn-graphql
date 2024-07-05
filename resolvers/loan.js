import { Book } from "../models/book.js";
import { Member } from "../models/member.js";
import { Loan } from "../models/loan.js";

export const loanResolvers = {
  // query
  Query: {
    loans: async () => await Loan.findAll(),
    loan: async (_, args) => await Loan.findByPk(args.id),
  },

  // mutation
  Mutation: {
    createLoan: async (_, args) => await Loan.create(args.loanInput),
    updateLoan: async (_, args) => {
      await Loan.update(args.editLoanInput, { where: { id: args.id } });
      return await Loan.findByPk(args.id);
    },
    deleteLoan: async (_, args) => {
      await Loan.destroy({ where: { id: args.id } });
      return await Loan.findAll();
    },
  },

  // related data
  Loan: {
    book: async (parent) =>
      await Book.findOne({ where: { id: parent.book_id } }),
    member: async (parent) =>
      await Member.findOne({ where: { id: parent.member_id } }),
  },
};
