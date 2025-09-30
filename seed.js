const { connectDB, mongoose } = require('./db');
const User = require('./Models/User');
const Task = require('./Models/Task');

async function main() {
    await connectDB();

    await User.deleteMany({});
    await Task.deleteMany({});

    await User.insertMany([
        { name: "Joshua Temi", email: "joshua@futa.edu.ng", role: "admin" },
        { name: "John Doe", email: "jondoe@gmail.com" }
    ]);

    await Task.insertMany([
        { title: "write proposal", status: "todo", owner: "Joshua" },
        { title: "Design Schema", status: "in_progress", owner: "Joe" }
    ]);

    console.log("Data Populated Successfully");
    await mongoose.disconnect();
}
main();





