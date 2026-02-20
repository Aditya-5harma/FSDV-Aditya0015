const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "testdb";

MongoClient.connect(url)
  .then(client => {
      console.log("Connected to MongoDB");

      const db = client.db(dbName);

      return db.collection("users").find({}).toArray();
  })
  .then(users => {
      console.log("Users from database:");
      console.log(users);
  })
  .catch(err => {
      console.error("Database unavailable:", err.message);

      // fallback data
      const fallbackUsers = [
          { name: "Guest User" },
          { name: "Offline Mode User" }
      ];

      console.log("Using fallback data:");
      console.log(fallbackUsers);
  });
