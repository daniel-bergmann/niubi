const mongoose = require("mongoose")

// 
// // Defining a Schema for our Blog model
//

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.models.Blog || mongoose.model("Blog", blogSchema)
