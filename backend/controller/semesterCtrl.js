const router = require("express").Router();
const axios = require("axios");

router.get("/semester", async (req, res) => {
  const config = {
    method: "get",
    url: "http://software.diu.edu.bd:8189/result/semesterList",
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
