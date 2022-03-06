const express = require("express");
const request = require("request");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
const { urlencoded } = require("body-parser");
const { sendfile } = require("express/lib/response");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  sendfile(__dirname + "/script.js");
});

// app.post("/", (req, res) => {
//   let email = req.body.email;
//   let textBody = req.body.text;
// });

// app.post("/", (req, res) => {
//   const firstName = req.body.fName;
//   const lastName = req.body.lName;
//   const email = req.body.email;
//   const data = {
//     members: [
//       {
//         email_address: email,
//         status: "subscribed",
//         merge_fields: {
//           FNAME: firstName,
//           LNAME: lastName,
//         },
//       },
//     ],
//   };

//   const jsonData = JSON.stringify(data);
//   const url = "https://us14.api.mailchimp.com/3.0/lists/4ff58f5dc4";
//   const options = {
//     method: "POST",
//     auth: "dayo1:f60652838a135c531ec079fb91101501-us14",
//   };
//   const request = https.request(url, options, function (response) {
//     response.on("data", function (data) {
//       if (response.statusCode === 200) {
//         res.sendFile(__dirname + "/success.html");
//       } else {
//         res.sendFile(__dirname + "/failure.html");
//       }
//       response.on("data", (data) => {
//         console.log(JSON.parse(data));
//       });
//     });
//   });
//   request.write(jsonData);
//   request.end();
// });
// app.post("/failure", (req, res) => {
//   res.redirect("/contact");
// });

app.listen(process.env.PORT || 3000, function () {
  console.log("Server port 3000 is running!");
});
