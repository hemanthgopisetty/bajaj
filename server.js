const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());


app.post('/bfhl', (req, res) => {
  const requestData = req.body.data;


  const numbersArray = requestData.filter(item => !isNaN(item));
  const alphabetsArray = requestData.filter(item => isNaN(item));
  

  let highestAlphabet = null;
  for (const char of alphabetsArray) {
    if (!highestAlphabet || char.toLowerCase() > highestAlphabet.toLowerCase()) {
      highestAlphabet = char;
    }
  }

 
  const response = {
    is_success: true,
    user_id: 'john_doe_1709199',
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    numbers: numbersArray,
    alphabets: alphabetsArray,
    highest_alphabet: highestAlphabet ? [highestAlphabet] : [],
  };

  res.json(response);
});


app.get('/bfhl',(req,res)=>{
    const responseBody = { operation_code: 1 };
    res.status(200).json(responseBody);
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
