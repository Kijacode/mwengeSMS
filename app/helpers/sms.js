const axios = require('axios')
const https = require('https')

const { MWENGE_SDA = 'MWENGE_SDA', API_KEY = '', SECRET_KEY = '' } = process.env

function bongoSendSms (phoneNumber, message) {
  return new Promise((resolve, reject) => {
    const data = {
      source_addr: MWENGE_SDA,
      schedule_time: '',
      encoding: 0,
      message: message,
      recipients: [
        {
          recipient_id: 1,
          dest_addr: phoneNumber
        }
      ]
    }

    axios
      .post('https://apisms.bongolive.africa/v1/send', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(
            API_KEY + ':' + SECRET_KEY
          ).toString('base64')}`
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        })
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.response)
      })
  })
}
module.exports = { bongoSendSms }
