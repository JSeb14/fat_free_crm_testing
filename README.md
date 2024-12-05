# FatFreeCRM Testing

## Instructions to Run

1. **Start FatFreeCRM**  
   Follow the documentation to start FatFreeCRM using Docker.  

2. **Clone This Repository**  
   Clone this repository to your local drive:  
   ```bash
   git clone <repository-url>
   cd fat_free_crm_testing
3. **Start stress testing of FatFreeCRM using Autocannon** SETUP STEPS REQUIRED!!
   - ensure Node.JS is installed locally
   - ensure the autocannon module is installed locally 
   - before testing be sure to change the "host" variable to the correct URL: http://172.179.236.101 or http://localhost:3000.
   - to test the account retrieval transaction:
      - ensure the call to getAccounts() is uncommented and that call to convertLead() is commented.
      - from the web application itself inspect the page and go to the network tab
      - login as user:aaron, password:aaron
      - click the request that was made for the homepage upon successful login
      - go to cookies tab for the request
      - copy the full response cookie
      - paste into the script's "cookie" variable
      - set the autocannon test connections and duration to desired
      - run the script and collect results
   - to test the lead conversion transaction:
      - ensure the call to getAccounts() is commented and that call to convertLead() is uncommented.
      - from the web application itself inspect the page and go to the network tab
      - login as user:aaron, password:aaron
      - go to /leads
      - create a new lead with firstname and lastname as "test"
      - return to /leads
      - in the network tab, click the request that was made for the leads page
      - go to cookies tab for the request
      - copy the full response cookie
      - paste into the scripts "cookie" variable
      - go to response tab for the request
      - copy the full csrf-token from the meta tag of the html header section
      - paste into the script's "token" variable
      - set the autocannon test connections and duration to desired
      - run the script and collect results
   
5. **Run the Performance Logging Script**
   Execute the docker_track_5_min.sh script in your FatFreeCRM installation directory to log         performance metrics for 5 minutes:
   ```bash
   chmod +x docker_track_5_min.sh  # Make the script executable 
   ./docker

6. **Wait for Completion (default is 5 minutes)**

7. **Open docker_stats.csv to check CPU and RAM log**
