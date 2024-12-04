// autocannon-test.js
const autocannon = require("autocannon");
const { JSDOM } = require("jsdom"); // Import JSDOM to parse the HTML

// Change URL based on local or Azure test
const host = "http://localhost:3000";

// Manually set cookies and token before each test to provide a valid session
const cookie = "zI7OhGmFS5sqIND7y%2BNwrAbS8oICEOdHBTYzToybaU27pDt4amo3aSxNhizK9ftaHEfd%2FSzI4571MGAytupFoje3OM1UBRrIOByN3UhTKrX3kMgt4eao9wz6sVjmR0JO3oR8VnOK6Zsp0x1cwztodzesfZws7c%2B%2BTelQ7K2QqYRc4bNlhgFS4lBL4cjzXH9JeCLl%2FXV0aOsZfvJbgdAnS19UUIb58dmQ802MDLcPHSBVFLEVS29qbCfJgFjrlZ3eB4NYYIqkyKQ56vhjH9OaDR8EgzSkjzSPhqRdSQbMLgYy1rj1LgpZF70318POP3qNbeYtCBNMCKTAvkkM30i4LC0ugcB2C7aEq%2F5Z9iRzdxCvP%2BGhryNKptdgVLfrgr3vH0uqTN%2FvDzqyHETJGwLNztohJ%2FtODGShzTeQORIhsuJ5LBJn7j0hQwX7SiAOZ8N5KyfvlI3MSZWKts%2B0a87CZCXzm1as9gQSXGc5P61h9qybbHpFgwKC%2FYRNCl4asQFhvRNHdUcLCvLBLPFvvEy73Kr8govSDR1%2BCVBZ7BJErC%2Fv2DuHD3uLOGBiJJbE4g5Y56EiyRYh4JY2%2FfGOQQsq67gvnD79H6v%2Bn9NKiFaBwjH4jHaggiz3imPPJi0SdotXl1hUgwrcoXejJ%2BH%2F2Y119DbA11CG--vvQEJ0qID%2F9ZoDhH--LTtItS7EZeZhz5nQUbDIGQ%3D%3D";
const token = "_1mgkzfDSt3IH_oAa2u4ZBuKAqQj1uq7h2iSomQYjKGHqyyrxqL3GzVEw7dJ6rYYF8eUrCGPUkjnwLURqZDHFw";

// Test load
const connections = 4000;
const duration = 5;

async function getAccounts() {
  
  const instance = autocannon({

    url: host + "/accounts/1",
    connections: connections,
    duration: duration,
    
    headers: {
      "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Content-Type":"application/x-www-form-urlencoded",
      "Cookie": cookie,
    },

    method: "GET",
  });

  instance.on("done", () => {
    console.log("Account retreival load test complete");
  });

  autocannon.track(instance); // For live output to the console
}

async function convertLead() {

  /*
    1. Manually create a new lead in the web app
    2. Change to the new lead's ID in the endpoint below
    3. From /leads, go to inspect-network, and copy the reponse cookie/csrf-token and paste above
    4. In the enpoint below, set the proper lead ID
  */
  
  // Configure Autocannon with the token in the headers
  const instance = autocannon({

    url: host + "/leads/112/promote",
    connections: connections,
    duration: duration,
    
    headers: {
      "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Content-Type":"application/x-www-form-urlencoded",
      "Cookie": cookie,
      "x-csrf-token": token
    },

    method: "PATCH",
  });

  instance.on("done", () => {
    console.log("Lead conversion load test complete");
  });

  autocannon.track(instance); // For live output to the console
}

//getAccounts();
convertLead();
