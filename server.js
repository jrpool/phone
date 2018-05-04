const http = require('http');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

http
.createServer((req, res) => {
  // Create TwiML response
  const twiml = new VoiceResponse();

  twiml.say('Thank you for calling. Instead, please call the following number: 510-225-1700. It’s the same number you called, except for the last two digits. Change the final 17 to 00.');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
})
.listen(3002, 'localhost');

console.log('TwiML server running at http://localhost:3002/');
