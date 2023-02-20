const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)
//Goal is the name of the model, each instance. When it goes to the DB, it will auto be added to a collection
//goal w no caps letter and s at the end. If it was Goall --> goalls 
module.exports = mongoose.model('Goal', goalSchema)

