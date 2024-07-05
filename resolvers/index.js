import { bookResolvers } from "./book.js";
import { memberResolvers } from "./member.js";
import { loanResolvers } from "./loan.js";
import { Member } from "../models/member.js";

export const resolvers = {
  //query
  Query: {
    ...bookResolvers.Query,
    ...memberResolvers.Query,
    ...loanResolvers.Query,
  },

  //mutation
  Mutation: {
    ...bookResolvers.Mutation,
    ...memberResolvers.Mutation,
    ...loanResolvers.Mutation,
  },

  // related data
  Book: {
    ...bookResolvers.Book,
  },

  Member: {
    ...memberResolvers.Member,
  },

  Loan: {
    ...loanResolvers.Loan,
  },
};

// const resolvers = {
//   // query
//   Query: {
//     hello: () => "Hello World",
//     books: () => books,
//     book: (_, args) => {
//       return books.find((book) => book.id === args.id);
//     },
//     members: () => members,
//     member: (_, args) => {
//       return members.find((member) => member.id === args.id);
//     },
//     loans: () => loans,
//     loan: (_, args) => {
//       return loans.find((loan) => loan.id === args.id);
//     },
//   },

//   // related data
//   Book: {
//     loans: (parent) => {
//       return loans.filter((loan) => loan.book_id === parent.id);
//     },
//   },

//   Member: {
//     loans: (parent) => {
//       return loans.filter((loan) => loan.member_id === parent.id);
//     },
//   },
//   Loan: {
//     book: (parent) => {
//       return books.find((book) => book.id === parent.book_id);
//     },
//     member: (parent) => {
//       return members.find((member) => member.id === parent.member_id);
//     },
//   },

//   // mutation
//   Mutation: {
//     createBook: (_, args) => {
//       let book = {
//         ...args.bookInput,
//         id: (books.length + 1).toString(),
//       };

//       books.push(book);
//       return book;
//     },

//     updateBook: (_, args) => {
//       let bks = books.map((b) => {
//         if (b.id === args.id) {
//           return { ...b, ...args.editBookInput };
//         }

//         return b;
//       });

//       return bks.find((book) => book.id === args.id);
//     },

//     deleteBook: (_, args) => {
//       return books.filter((book) => book.id !== args.id);
//     },

//     createMember: (_, args) => {
//       let member = {
//         ...args.memberInput,
//         id: (members.length + 1).toString(),
//       };

//       members.push(member);
//       return member;
//     },

//     updateMember: (_, args) => {
//       let mbrs = members.map((m) => {
//         if (m.id === args.id) {
//           return { ...m, ...args.memberInput };
//         }

//         return m;
//       });

//       return mbrs.find((member) => member.id === args.id);
//     },

//     deleteMember: (_, args) => {
//       return members.filter((member) => member.id !== args.id);
//     },

//     createLoan: (_, args) => {
//       let loan = {
//         ...args.loanInput,
//         id: (loans.length + 1).toString(),
//       };

//       loans.push(loan);
//       return loan;
//     },

//     updateLoan: (_, args) => {
//       let lns = loans.map((l) => {
//         if (l.id === args.id) {
//           return { ...l, ...args.loanInput };
//         }

//         return l;
//       });

//       return lns.find((loan) => loan.id === args.id);
//     },

//     deleteLoan: (_, args) => {
//       return loans.filter((loan) => loan.id !== args.id);
//     },
//   },
// };
