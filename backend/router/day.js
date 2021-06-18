const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Day = require("../model/day");

mongoose.set("useFindAndModify", false);

router.post("/createday", (req, res) => {
  const { day } = req.body;
  console.log(day);
  if (!day) {
    return res.status(422).json({ error: "Plase add the day" });
  }
  
  const newday = new Day({
    day
  });
  newday
    .save()
    .then((result) => {
      result;
      res.json({ day: result });
    })
    .catch((err) => {
      console.log(err);
    });
});





router.get("/allday", (req, res) => {
  Day.find()

    
    .then((days) => {
      if (days.length === 0) {
        res.json({ days: "No days added" });
      } else {
        res.json({ days });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;
