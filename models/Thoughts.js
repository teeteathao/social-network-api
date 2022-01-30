const { Schema, model } = require('mongoose');
const dateFormater = require('..utils/dateFormater');

const ReactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: [true, 'Please enter your reaction.'],
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
        trim: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtDate => dateFormater(createdAtDate)
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );

// Schema to create a thoughts model
const thoughtsSchema = new Schema(
  {
    thoughText: {
      type: String,
      required: [true, 'Please enter your thoughts'],
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtDate => dateFormater(createdAtDate)
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    reactions: [ReactionSchema]
     
     },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reaction.length;
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thoughts;
