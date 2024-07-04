import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { books, members, loans } from "./_db.js";

// type Book Schema
// type Query Query Schema nya
// resolvers Fungsi untuk menangani query

const typeDefs = `#graphql
    type Book {
        id:ID!
        name:String!
        author:String!
        year:Int!
        available:Boolean!
        loans:[Loan!]
    }

    type Member{
        id:ID!
        name:String!
        email:String!
        loans:[Loan!]
    }

    type Loan{
        id:ID!
        book:Book!
        member:Member!
        created_at:String!
        updated_at:String!
    }

    type Query{
        hello: String  
        books: [Book!]!  
        book(id:ID!): Book!
        members: [Member!]!
        member(id:ID!): Member!
        loans: [Loan!]!
        loan(id:ID!): Loan!
    }

    type Mutation{
        createBook(bookInput: BookInput!): Book
        updateBook(id:ID!, editBookInput: editBookInput! ): Book
        deleteBook(id:ID!): [Book]
        createMember(memberInput: MemberInput!): Member
        updateMember(id:ID!, editMemberInput: editMemberInput!): Member
        deleteMember(id:ID!): [Member]
        createLoan(loanInput: LoanInput!): Loan
        updateLoan(id:ID!, editLoanInput: editLoanInput!): Loan
        deleteLoan(id:ID!): [Loan]
    }

    input BookInput{
        name:String!
        author:String!
        year:Int!
        available:Boolean!
    }

    input MemberInput{
        name:String!
        email:String!
    }

    input LoanInput{
        book_id:ID!
        member_id:ID!
    }

    input editBookInput{
        name:String
        author:String
        year:Int
        available:Boolean
    }

    input editMemberInput{
        name:String
        email:String
    }

    input editLoanInput{
        book_id:ID
        member_id:ID
    }
`;

const resolvers = {
  // query
  Query: {
    hello: () => "Hello World",
    books: () => books,
    book: (_, args) => {
      return books.find((book) => book.id === args.id);
    },
    members: () => members,
    member: (_, args) => {
      return members.find((member) => member.id === args.id);
    },
    loans: () => loans,
    loan: (_, args) => {
      return loans.find((loan) => loan.id === args.id);
    },
  },

  // related data
  Book: {
    loans: (parent) => {
      return loans.filter((loan) => loan.book_id === parent.id);
    },
  },

  Member: {
    loans: (parent) => {
      return loans.filter((loan) => loan.member_id === parent.id);
    },
  },
  Loan: {
    book: (parent) => {
      return books.find((book) => book.id === parent.book_id);
    },
    member: (parent) => {
      return members.find((member) => member.id === parent.member_id);
    },
  },

  // mutation
  Mutation: {
    createBook: (_, args) => {
      let book = {
        ...args.bookInput,
        id: (books.length + 1).toString(),
      };

      books.push(book);
      return book;
    },

    updateBook: (_, args) => {
      let bks = books.map((b) => {
        if (b.id === args.id) {
          return { ...b, ...args.editBookInput };
        }

        return b;
      });

      return bks.find((book) => book.id === args.id);
    },

    deleteBook: (_, args) => {
      return books.filter((book) => book.id !== args.id);
    },

    createMember: (_, args) => {
      let member = {
        ...args.memberInput,
        id: (members.length + 1).toString(),
      };

      members.push(member);
      return member;
    },

    updateMember: (_, args) => {
      let mbrs = members.map((m) => {
        if (m.id === args.id) {
          return { ...m, ...args.memberInput };
        }

        return m;
      });

      return mbrs.find((member) => member.id === args.id);
    },

    deleteMember: (_, args) => {
      return members.filter((member) => member.id !== args.id);
    },

    createLoan: (_, args) => {
      let loan = {
        ...args.loanInput,
        id: (loans.length + 1).toString(),
      };

      loans.push(loan);
      return loan;
    },

    updateLoan: (_, args) => {
      let lns = loans.map((l) => {
        if (l.id === args.id) {
          return { ...l, ...args.loanInput };
        }

        return l;
      });

      return lns.find((loan) => loan.id === args.id);
    },

    deleteLoan: (_, args) => {
      return loans.filter((loan) => loan.id !== args.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`server running at  ${url}`);
