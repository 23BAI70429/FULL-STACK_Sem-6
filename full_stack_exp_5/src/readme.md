# College Management System – Experiment 5

## 📌 Project Overview

This project is an extension of **Experiment 4** in the Full Stack Development course.
The application is a **multi-page React web application** built using modern UI components and advanced state management techniques.

The goal of Experiment 5 is to improve the project by implementing **Redux Toolkit**, **Context API**, and **useMemo optimization**, while maintaining a consistent UI/UX and adding a new page.

---

# 🎯 Objectives

• Learn scalable state management using **Redux Toolkit**
• Use **Context API** for global app state (theme & user profile)
• Optimize derived computations using **useMemo**
• Maintain multi-page navigation using **React Router**
• Extend the application with an additional feature page

---

# 🛠 Technologies Used

React.js (Vite)
React Router DOM
Redux Toolkit
React Redux
Context API
Bootstrap / React Bootstrap
JavaScript (ES6)
HTML5 & CSS3

---

# 🚀 Features Implemented

## 1️⃣ React Router

The application supports multiple pages using React Router.

Pages included in the project:

Home
Departments
Analytics
Reports
Pricing (New page added in Experiment 5)

---

## 2️⃣ Context API

Context API is used for managing **global application state**.

Global states managed using Context:

Theme (Light / Dark mode)
User profile (mock student login)

Context is used in multiple components such as:

Navbar
ThemeToggle
Reports Page

---

## 3️⃣ Redux Toolkit (Replaces useReducer)

Redux Toolkit is used for structured state management.

The Redux store is configured using:

configureStore()

A slice is created using:

createSlice()

### Task Slice Actions

addTask – add a new task
toggleTask – mark task as completed or pending
deleteTask – remove a task

Redux state is accessed using:

useSelector()

Redux actions are dispatched using:

useDispatch()

Redux is used in multiple components including:

Analytics Page
Reports Page
Pricing Page

---

## 4️⃣ useMemo Optimization

useMemo is used to optimize derived calculations.

Examples of derived data:

Total number of tasks
Completed tasks count
Pending tasks count
Task completion percentage

This ensures calculations are recomputed only when dependencies change.

---

## 5️⃣ New Page Added (Experiment 5 Requirement)

### Pricing Page (Student Progress Dashboard)

This page demonstrates:

Redux Toolkit state usage
Context API usage
useMemo derived calculations

The page displays analytics such as:

Total Tasks
Completed Tasks
Pending Tasks
Completion Percentage

---

# 📁 Project Folder Structure

```
src
│
├── components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ThemeToggle.jsx
│
├── context
│   └── AppContext.jsx
│
├── redux
│   ├── store.js
│   └── slices
│       └── taskSlice.js
│
├── pages
│   ├── Home.jsx
│   ├── Departments.jsx
│   ├── Analytics.jsx
│   ├── Reports.jsx
│   └── Pricing.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚙️ Installation & Setup

### 1️⃣ Install Dependencies

```
npm install
```

### 2️⃣ Install Redux Toolkit

```
npm install @reduxjs/toolkit react-redux
```

### 3️⃣ Run the Development Server

```
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

# 🌐 Deployment

The project is deployed using **Vercel**.

Deployment link format:

```
{uid}-5-college-management.vercel.app
```

Example:

```
23BAI70429-5-college-management.vercel.app
```

---

# 📸 Screenshots

Screenshots of the application are included in the following folder:

```
screenshots/
```

Example images:

Home Page
Analytics Page
Reports Page
Pricing Page

---

# 📚 Learning Outcomes

Through this experiment, the following concepts were learned:

• Implementing scalable state management using Redux Toolkit
• Using Context API for global application state
• Optimizing React applications using useMemo
• Structuring large React applications with modular folders
• Managing navigation in multi-page React apps using React Router

---

# 👤 Author

Name: **Surya**
UID: **23BAI70429**
Course: **B.Tech CSE (AIML)**
Experiment: **Experiment 5 – Advanced State Management**

---

# ✅ Conclusion

Experiment 5 successfully enhances the College Management System by integrating Redux Toolkit for structured state management, Context API for global state handling, and useMemo for optimized derived calculations. The application now demonstrates a scalable and maintainable architecture suitable for real-world React projects.
