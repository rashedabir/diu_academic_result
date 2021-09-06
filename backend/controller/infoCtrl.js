const router = require("express").Router();
const axios = require("axios");

router.get("/info/:id", async (req, res) => {
  const { id } = req.params;

  const config = {
    method: "get",
    url: `http://software.diu.edu.bd:8189/result/studentInfo?studentId=${id}`,
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
