const axios = require('axios');
const https = require('https');
const btoa = require('btoa');

// FIXME: async
async function bongoSendSms(phonenumber, message) {
  const api_key = ' ';
  const secret_key = ' ';
  const content_type = 'application/json';
  const source_addr = 'MWENGE_SDA';

  axios
    .post(
      'https://apisms.bongolive.africa/v1/send',
      {
        source_addr: source_addr,
        schedule_time: '',
        encoding: 0,
        message: message,
        recipients: [
          {
            recipient_id: 1,
            dest_addr: phonenumber,
          },
        ],
      },
      {
        headers: {
          'Content-Type': content_type,
          Authorization: 'Basic ' + btoa(api_key + ':' + secret_key),
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    )
    .then((response) => {
      console.log(response, api_key + ':' + secret_key);
    })
    .catch((error) => {
      return console.error(error.response.data);
    });
}

module.exports = { bongoSendSms };
