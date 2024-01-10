# Getting Started

First commit

## Installation and Setup

#### Tools required -

1. IntelliJ Idea (Community Edition)

2. Java 1.8 or Above

3. NodeJS

### I. Backend and Database

1. In terminal, navigate to the `demo-techfair-lifi` directory (if not already)
```
cd demo-techfair-lifi
```

2. Run the following command to start the Spring Boot application:
```
.\gradlew.bat bootRun
```

Backend should now be running on `http://localhost:8080`.

### II. Frontend

1. Navigate to the `frontend` directory
```
cd frontend
```
2. Install the dependencies using the following command:
```
npm install
```

3. Start the development server using the following command:
```
npm start
```

The frontend application should now be running on `http://localhost:3000`.

### * Accessing H2 Database

I've used the H2 Database as an inmemory database (meaning data will be persisted only until the current backend application session is running) 
To access the H2 Database console, follow these steps:

1. Make sure the backend server is running.c

2. Visit `http://localhost:8080/h2-console`. In your first login, you may need to enter the default authorization credentials. Default username: myuser, and default password: mypassword.

3. In the "JDBC URL" field, enter the URL specified in the `application.properties` file of the backend. The default URL is `jdbc:h2:mem:testdb`.

4. Enter your username and password (as specified in the `application.properties` file) in the "User Name" and "Password" fields, respectively. The default username is `sa` and the default password is an empty string.

5. Click "Connect" to access the H2 Database console.