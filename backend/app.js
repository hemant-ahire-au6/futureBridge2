const express = require("express");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//GET request

app.get("/", (req, res) => {
  res.status(200).send("Hello This is get ");
});

//POST Request

app.post("/post", (req, res) => {
  const data = req.body;
  console.log(data);

  try {
    if (data.name && data.number) {
      res.status(200).json({
        message: "data added successfully",
        name: data.name,
        number: data.number,
      });
    } else {
      res.status(200).json({
        message: "please provide all the details",
      });
    }
  } catch {
    throw new Error("Something is wrong in post request");
  }
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
