export const typeDefs = `#graphql
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
        createdAt:String!
        updatedAt:String!
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
