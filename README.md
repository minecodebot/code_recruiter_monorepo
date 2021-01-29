# Code Recruiter Application
## Deploy development mode

* Create .env file in:
  * frontend/:
  ```{}
    NEXT_PUBLIC_BASEURL="http://code_recruiter_backend:3030"
    GOOGLE_ID=193267704794-d98rm6c25un6k6eoltl345p4gr0h6t6j.apps.googleusercontent.com
    GOOGLE_SECRET=hoM9GArSzzpm9sRs-P_xE38m
    GITHUB_ID=fd7dc68ef91160f08827
    GITHUB_SECRET=efb15653dd78c2da7a26447d9767d10e8cd96f5a
    NEXTAUTH_URL=http://localhost:3000
    NEXT_PUBLIC_DATABASE_URL="mongodb://api_user:api_user_password@code_recruiter_mongodb:27017/recruiterUser_provider"
  ```
  * backend/:
  ```{}
    MONGO_CONNECTION_STRING="mongodb://api_user:api_user_password@code_recruiter_mongodb:27017/recruiterUser"
    URL_ORIGIN="http://localhost:3000"
  ```

* Run docker-compose:
```{bash}
docker-compose build && docker-compose up -d
```

* List of services:
  * Web application: localhost:3000
  * Api: localhost:3030
  * Database: localhost:27017

## Deploy production mode

(under development)
