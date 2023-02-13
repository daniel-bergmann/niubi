import mongoose from "mongoose"

const connection = {}

async function dbConnect() {
  // Check if we have connection to our database
  if (connection.isConnected) {
    // Use existing database connection
    return
  }
  const db = await mongoose.connect(process.env.MONGODB_URI)
  connection.isConnected = db.connections[0].readyState
}

export default dbConnect

// import { MongoClient } from "mongodb"

// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
// }

// const uri = process.env.MONGODB_URI
// const options = {}

// let client
// let clientPromise: Promise<MongoClient>

// if (process.env.NODE_ENV === "development") {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   let globalWithMongo = global as typeof globalThis & {
//     _mongoClientPromise: Promise<MongoClient>
//   }
//   if (!globalWithMongo._mongoClientPromise) {
//     client = new MongoClient(uri)
//     globalWithMongo._mongoClientPromise = client.connect()
//   }
//   clientPromise = globalWithMongo._mongoClientPromise
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options)
//   clientPromise = client.connect()
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise