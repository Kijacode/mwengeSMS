const express = require('express');
const cendSms = require('../../sms/sms');

const router = express.Router();

const BongLive_2 = cendSms.bongoSendSms;

router.get('/send/mwenge/:number/:message/:url', async (req, res) => {
  // TODO: desctruring
  let phoneNumber = req.params.number;
  let message = req.params.message;
  let url = req.params.url;

  try {
    console.log('start');
    //  TODO: how does this work
    await BongLive_2(phoneNumber, message).then(() => {
      if (res.statusCode == 200) {
        return res.redirect(
          'https://www.bongolive.co.tz/api/docs/index.html#api-_'
        );
      } else {
        return console.log('status code is not okay');
      }
    });
  } catch (error) {
    return console.log(error);
  }
});

module.exports = router;
