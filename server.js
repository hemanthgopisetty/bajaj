const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000


app.use(bodyParser.json());

app.route('/bfhl')
  .get((req, res) => {
    res.json({ message: 'GET request to /bfhl received!' });
  })
  .post((req, res) => {
    const requestData = req.body;

    // 1. Status
    const status = 'Success';

    // 2. User ID
    const userId = requestData.userId;

    // 3. College Email ID
    const collegeEmailId = requestData.collegeEmailId;

    // 4. College Roll Number
    const collegeRollNumber = requestData.collegeRollNumber;

    // 5. Array for numbers
    const numbersArray = requestData.numbersArray || [];

    // 6. Array for alphabets
    const alphabetsArray = requestData.alphabetsArray || [];

    // 7. Highest Alphabet in the input array of alphabets
    let highestAlphabet = null;
    if (alphabetsArray.length > 0) {
      highestAlphabet = alphabetsArray.reduce((prev, current) => {
        return (prev > current) ? prev : current;
      });
    }

    const responseData = {
      status,
      userId,
      collegeEmailId,
      collegeRollNumber,
      numbersArray,
      alphabetsArray,
      highestAlphabet,
    };

    res.json(responseData);
  })
  ;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})