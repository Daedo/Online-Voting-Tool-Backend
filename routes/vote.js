const express = require('express');
const polytope      = require('../algorithm/polytope');
const socialChoice  = require('../algorithm/socialChoice');
const socialWelfare = require('../algorithm/socialWelfare');

const router = express.Router();

router.post("",(req,res,next) => {
  console.log("Incomming",req.body);

  response = {
    success: false,
    msg:"An unknown error has occured."
  }

  switch (req.body.algorithm.toLowerCase()) {
    case "maximal lottery":
      response = polytope.maxLottery(req.body);
      break;

    case "homogeneous maximal lottery":
      response = polytope.homogeneousMaximalLottery(req.body);
      break;

    case "essential set":
      response = polytope.essentialSet(req.body);
      break;

    case "borda":
      response = socialChoice.borda(req.body);
      break;

    case "minimax":
      response = socialChoice.minimax(req.body);
      break;

    case "nanson":
      response = socialChoice.nanson(req.body);
      break;

    case "black":
      response = socialChoice.black(req.body);
      break;

    case "tideman":
      response = socialChoice.tideman(req.body);
      break;

    case "kemeny":
      response = socialWelfare.kemeny(req.body);
      break;

    case "schulze":
      response = socialWelfare.schulze(req.body);
      break;

    case "ranked pairs":
      response = socialWelfare.rankedPairs(req.body);
      break;

    default:
      response = {
        success: false,
        msg:"Unknown algorithm "+req.body.algorithm+"."
      }
  }

  console.log("Send Answer",response);
  res.send(response);
});


module.exports = router;
