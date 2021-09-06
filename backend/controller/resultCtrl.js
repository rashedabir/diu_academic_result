const router = require("express").Router();
const axios = require("axios");

router.post("/result", async (req, res) => {
  const { semester, id } = req.body;

  const config = {
    method: "get",
    url: `http://software.diu.edu.bd:8189/result?semesterId=${semester}&studentId=${id}`,
    headers: {},
  };

  await axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
