const app = require("./app");
const PORT = process.env.PORT || 3001;

const env = require("dotenv").config();
app.listen(PORT, () => {
  console.log("PROCESS ENV: ", process.env.PORT);
  console.log(`app listening on ${PORT}`);
});
