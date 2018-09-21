function validatePhoneNumber(phoneNumber) {
  const accountSid = 'AC69519280391fbb3d23f565ccf5279a50';
  const authToken = '2dc41e5f634b2e000a0361dc29357b6f';

  const client = require('twilio')(accountSid, authToken);

  client.lookups.phoneNumbers(phoneNumber)
    .fetch({CountryCode: 'US'})
    .then(phone_number => {
      if(phone_number.nationalFormat === undefined){
        throw new Error(`PhoneNumber: ${phoneNumber} is invalid.`);
      }
      return phone_number.nationalFormat;
    })
    .catch(err => {
      return null;
    })
    .done();
}

// ---- Start -- Unit Test Cases -------------- //

const passTestCase1 = '+1-201-706-0253';
const passTestCase2 = '201-706-0253';
const passTestCase3 = '+1201706-0253';
const failTestCase1 = '1-706-0253';
const failTestCase2 = '';
const failTestCase3 = {};
const failTestCase4 = null;

// validatePhoneNumber(passTestCase1)
// validatePhoneNumber(passTestCase2)
// validatePhoneNumber(passTestCase3)
// validatePhoneNumber(failTestCase1)
// validatePhoneNumber(failTestCase2)
// validatePhoneNumber(failTestCase3)
// validatePhoneNumber(failTestCase4)

// ---- End -- Unit Test Cases --------------- //
