# EMR System

## Project Structure

- backend/
  - authentication-service/
  - role-management-service/
  - prescription-service/
  - inventory-service/
  - billing-service/
  - audit-log-service/
  - common/
    - configuration/
    - utils/
- frontend/
  - react-app/

## Setup Instructions

### Backend

1. Navigate to each service directory inside `backend/`.
2. Use Maven to build and run each Spring Boot application.

### Frontend

1. Navigate to `frontend/react-app`.
2. Use npm to install dependencies and start the React application:

```
cd frontend/react-app
npm install
npm start
```

### Database

1. Set up MySQL and create the necessary databases for each service.
2. Update the `application.properties` file in each service with the appropriate database configuration.

# ilrdemo
