import { server, connection } from "./config";
import { users } from "./models";

// database setup
connection.define("Users", users);

// environment variables
const PORT = 8050;

server.listen(PORT, () => console.log("🚀 server   - running on port 8050"));
