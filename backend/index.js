const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://diu-result.web.app"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", require("./controller/semesterCtrl"));
app.use("/api", require("./controller/resultCtrl"));
app.use("/api", require("./controller/infoCtrl"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER IS CONNECTED TO PORT ${PORT}`);
});
