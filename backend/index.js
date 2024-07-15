const ConnectToMongo = require("./db");
const express = require("express");

ConnectToMongo();

const app = express();
const port = 5000;
app.use(express.json());

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// app.get('/', (req, res) => {
//     res.send('Hello drishhh');
// });
// app.get('/api/v1/login', (req, res) => {
//     res.send('Hello login');
// });
// app.get('/api/v1/signup', (req, res) => {
//     res.send('Hello signup');
// });

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
