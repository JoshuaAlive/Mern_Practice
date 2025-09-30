const { connectDB, mongoose } = require('./db');
const User = require('./Models/User');
const Task = require('./Models/Task');

async function josh() {
    await connectDB();
     
    // CREATE
    const john = await User.create({ name: "John Wachira", email: "john@plp.com" });
    console.log("Creted successfully: ", john);

    // READ
//     const users = await User.find().select("name email");
//     console.log("All users: ", users);

//     // UPDATE
//     await User.updateOne({ email: "john@plp.com" }, { role: "admin"});
//     console.log("Updated successfully");

//     // DELETE
//     await User.deleteOne({ email: "john@plp.com"});
//     console.log("Deleted successfully");

     await mongoose.disconnect();

//     // AGGREGATION
    
    

 }
 josh();