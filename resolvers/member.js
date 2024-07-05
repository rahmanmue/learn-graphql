import { Member } from "../models/member.js";
import { Loan } from "../models/loan.js";

export const memberResolvers = {
  //query
  Query: {
    members: async () => await Member.findAll(),
    member: async (_, args) => await Member.findByPk(args.id),
  },

  //mutation
  Mutation: {
    createMember: async (_, args) => await Member.create(args.memberInput),
    updateMember: async (_, args) => {
      await Member.update(args.editMemberInput, { where: { id: args.id } });
      return await Member.findByPk(args.id);
    },
    deleteMember: async (_, args) => {
      await Member.destroy({ where: { id: args.id } });
      return await Member.findAll();
    },
  },

  // related data
  Member: {
    loans: async (parent) => {
      return await Loan.findAll({ where: { member_id: parent.id } });
    },
  },
};
