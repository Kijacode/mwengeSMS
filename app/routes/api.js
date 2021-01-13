const { Router } = require("express");
const { bongoSendSms } = require("../helpers/sms");

const router = Router();

router.get("/", (req, res) => {
  return res.send({ message: "Mwenge SMS" });
});

// TODO: NEEDS REVIEW
router.get("/send/mwenge/:number/:message/:url", async (req, res) => {
  let { phoneNumber, message, url } = req.params;
  // let redirectToUrl = "https://www.bongoliv`e.co.tz/api/docs/index.html#api-_";
  bongoSendSms(phoneNumber, message)
    .then((res) => {
      if (res.statusCode == 200) {
        return res.send({
          success: true,
          phoneNumber: phoneNumber,
          smsMessage: message,
        });
      } else {
        console.log(`Status code: ${res.statusCode}`);
        return res.send({
          success: false,
          errorMessage: "Failed to send message",
        });
      }
    })
    .catch((error) => {
      // console.log(`Send failed: ${error}`);
      console.log(error.data);
      return res.send({
        success: false,
        errorMessage: "Error occured when attempting to send message",
      });
    });
});

module.exports = router;
