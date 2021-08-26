const request = require("request");

// function getGoogleHomePage(finalCallBack) {
//   request("http://www.google.com", function (error, response, body) {
//     console.error("error:", error); // Print the error if one occurred
//     finalCallBack(error);
//     console.log("statusCode:", response && response.statusCode); // Print the response status
//     //code if a response was received
//     console.log("body:", body); // Print the HTML for the Google homepage.
//     finalCallBack(null, body);
//   });
// }
// console.log(
//   getGoogleHomePage((result) => {
//     console.log("RESULT==>", result);
//   })
// );

function getGoogleHomePage(finalCallBack) {
  return new Promise(function (resolve, reject) {
    request.get("http://www.google.com", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
}

console.log(
  getGoogleHomePage((result) => {
    console.log("RESULT==>", result);
  })
);
