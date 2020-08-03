const express = require('express');
const router = express.Router();
const cendSms = require("../../sms/sms");
const BongLive_2 =  cendSms.bongoSendSms;

   



router.get("/send/mwenge/:number/:message",async (req,res) =>{
   let phoneNumber = req.params.number;
   let message = req.params.message;

   try {
      console.log("start");
      await BongLive_2(phoneNumber,message).then(() =>{
         res.redirect("https://uqweli.website/")
      });
   } catch (error) {
     return console.log(error);
   }
})




module.exports = router;