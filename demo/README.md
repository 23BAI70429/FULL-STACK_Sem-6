# 🧪 Experiment 6: JWT Authentication using Spring Boot

## 📌 Objective

To implement JWT (JSON Web Token) based authentication in a backend application using Spring Boot.
The system should support login functionality, generate JWT tokens, and allow access to protected routes using the token.

---

## 🛠️ Technologies Used

* Java
* Spring Boot
* Spring Security
* JWT (JJWT Library)
* Maven
* H2 Database (for demo)
* Postman (for testing)

---

## 📁 Project Structure

```
src/
├── controller/
│   └── AuthController.java
├── model/
│   └── User.java
├── service/
│   └── JwtService.java
├── security/
│   └── SecurityConfig.java
├── DemoApplication.java
└── resources/
    └── application.properties
```

---

## 🔐 Features Implemented

* User Login API
* JWT Token Generation
* Protected Route
* Basic Authentication Flow
* Stateless Session Handling using JWT

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone <your-repo-link>
cd demo
```

### 2️⃣ Install Dependencies

```
mvn clean install
```

### 3️⃣ Run Application

```
mvn spring-boot:run
```

### 4️⃣ Server Runs At

```
http://localhost:8081
```

---

## 🔑 API Endpoints

### 🔹 1. Login API

**POST** `/auth/login`

#### Request Body:

```json
{
  "username": "surya",
  "password": "1234"
}
```

#### Response:

```
JWT Token (String)
```

---

### 🔹 2. Protected API

**GET** `/auth/protected`

#### Headers:

```
Authorization: Bearer <JWT_TOKEN>
```

#### Response:

```
Access Granted (Protected Data)
```

---

## 🧪 Postman Testing

### ✔ Screenshot 1:

Login request with username & password and JWT token received.

### ✔ Screenshot 2:

Access protected route using JWT token.

### ✔ Screenshot 3:

Invalid login or request without token (Unauthorized access).

---

## 🧠 JWT Explanation

JWT (JSON Web Token) is used for secure authentication.
It consists of 3 parts:

* Header → Algorithm info
* Payload → User data
* Signature → Verification

JWT is stateless, meaning the server does not store session data.

---



## ⚠️ Note

For demonstration purposes, user authentication is hardcoded.
In real-world applications, it should be connected to a database.

---

## ✅ Conclusion

Successfully implemented JWT authentication in Spring Boot, including login, token generation, and protected route access.

---
