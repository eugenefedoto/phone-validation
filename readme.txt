Problem:
Figure out a way to parse E.164 phone numbers.

Solutions:
1) Regex - never write regex for something complicated as phone numbers. It's an iron-clad rule. There are countless edge cases that have taken people many years to figure out.

2) 3rd Party Library - Twilio - here's a company that was founded on parsing phone numbers. Instead of wasting time, use their provided API and library.

Strategy:
1) I started out figuring how Twilio works.
2) Writing JS without Node presented the problem of dealing with CORS. I decided to use Node.
3) I made a successful API call.
4) I wrote many test cases to figure out the holes in my function.
5) I added exception handling logic to take care of those holes.

Installation:
1) git clone https://github.com/eugenefedoto/phone-validation.git
2) npm i
3) node app

Notes About Running App: 
- Nothing runs unless you uncomment the test cases.
- The function returns the correct values.
- Even if you run a test case, nothing will be output to the terminal, because there are no console.log() calls. Write your own if you need to test the values.