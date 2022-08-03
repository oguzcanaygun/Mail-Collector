const bodyParser = require('body-parser');
const express = require('express');
const request = require('request');
const https = require('https')

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res) {
  res.sendFile(__dirname + "/signup.html");
})
app.post("/", function(req, res) {
  const firstName= req.body.fName;
  const secondName= req.body.sName;
  const email= req.body.email;

  let data = {
    members: [{
        email_adress: email,
        status: "subscribed",
        merge_fields: {
          FNAME:firstName;
          LNAME:lastName
        }
    }]
  }
const jsonData = JSON.stringify(data)

  const url="https://us18.api.mailchimp.com/3.0/lists/aa066b4277."

  const options = {
    method: "POST",
    auth: "oguzcan:245cc0703fa5839b469e440d83a2de79-us18"
  }



  const request = https.request(url, options, function(response) {
    response.on("data", function(data){
      console.log(JSON.parse(data))
    })
  })
  request.write(jsonData);
  request.end();

})

app.listen(3000, function() {
  console.log("Server is up and running on port 3000.")
})

//API KEY 245cc0703fa5839b469e440d83a2de79-us18

// LIST KEY aa066b4277.
