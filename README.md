# FatFreeCRM Testing

## Instructions to Run

1. **Start FatFreeCRM**  
   Follow the documentation to start FatFreeCRM using Docker.  

2. **Clone This Repository**  
   Clone this repository to your local drive:  
   ```bash
   git clone <repository-url>
   cd fat_free_crm_testing
3. **Start stress testing of FatFreeCRM using Autocannon**
   
   
4. **Run the Performance Logging Script**
   Execute the docker_track_5_min.sh script in your FatFreeCRM installation directory to log         performance metrics for 5 minutes:
   ```bash
   chmod +x docker_track_5_min.sh  # Make the script executable 
   ./docker

5. **Wait for Completion (default is 5 minutes)**

6. **Open docker_stats.csv to check CPU and RAM log**
