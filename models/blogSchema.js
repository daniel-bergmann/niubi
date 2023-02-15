const mongoose = require("mongoose")

//
// // Defining a Schema for our Blog model
//

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  timestamps: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.models.Blog || mongoose.model("Blog", blogSchema)
