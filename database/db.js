import pkg from "pg";
const { Pool } = pkg;

const database = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mern_ecommerce_store",
  password: "12345678",
  port: 5234,
});

try {
  await database.connect();
  console.log("Database connected successfully");
} catch (error) {
  console.error("Database connection error:", error);
  process.exit(1); // Exit the process with a failure code
}

export default database;
