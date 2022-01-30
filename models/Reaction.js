// const { Schema, Types } = require('mongoose');
// const dateFormater = require('..utils/dateFormater');

// const ReactionSchema = new Schema(
//   {
//     reactionId: {
//       type: Schema.Types.ObjectId,
//       default: () => new Types.ObjectId(),
//     },
//     reactionBody: {
//       type: String,
//       required: [true, 'Please enter your reaction.'],
//       maxlength: 280,
//     },
//     username: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: createdAtDate => dateFormater(createdAtDate)
//     },
//   },
//   {
//     toJSON: {
//       getters: true,
//     },
//     id: false,
//   }
// // );

// module.exports = ReactionSchema;
