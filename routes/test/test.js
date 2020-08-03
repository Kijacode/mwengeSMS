const express = require('express');
const router = express.Router();
const cendSms = require("../../sms/sms");
const BongLive_2 =  cendSms.bongoSendSms;

   



router.get("/send/mwenge/:number/:message/:url",async (req,res) =>{
   let phoneNumber = req.params.number;
   let message = req.params.message;
   let url = req.params.url;

   try {
      console.log("start");
      await BongLive_2(phoneNumber,message).then(() =>{
         if(res.statusCode == 200)
         {
          return  res.redirect(url)
         }
         else{
            return console.log("status code is not okay")
         }
        
      });
   } catch (error) {
     return console.log(error);
   }
})




module.exports = router;