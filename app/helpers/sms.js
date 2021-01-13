const axios = require("axios");
const https = require("https");

function bongoSendSms(phoneNumber, message) {
  return new Promise((resolve, reject) => {
    const sourceAddr = process.env.MWENGE_SDA || "MWENGE_SDA";
    const apiKey = process.env.API_KEY || "";
    const secretKey = process.env.SECRET_KEY || "";

    const data = {
      source_addr: sourceAddr,
      schedule_time: "",
      encoding: 0,
      message: message,
      recipients: [
        {
          recipient_id: 1,
          dest_addr: phoneNumber,
        },
      ],
    };

    axios
      .post("https://apisms.bongolive.africa/v1/send", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(
            apiKey + ":" + secretKey
          ).toString("base64")}`,
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
}
module.exports = { bongoSendSms };
