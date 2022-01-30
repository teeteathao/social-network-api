const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, 'Must be a valid email address'], 
      
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
    },
    ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    ],
  },
  {
    toJSON: {
      virtual: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model('User', userSchema)

module.exports = User;
