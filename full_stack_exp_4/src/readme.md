📘 Experiment–4: Advanced React State Management & Analytics Dashboard
📌 Project Title

College Management System – Advanced Multi-Page React Application

🎯 Objective

This experiment extends the Experiment-3 multi-page React application by implementing:

Global state management using useContext

Structured state updates using useReducer

Performance optimization using useMemo

Adding a new analytics/reporting page

Maintaining consistent UI/UX across all pages

🔄 Extension of Experiment-3

This project is an enhancement of Experiment-3.

Previously implemented:

Multi-page navigation using React Router

Home Page

Departments Page

Analytics Page

In Experiment-4, advanced React hooks and state management techniques were added.

🛠️ Technologies Used

React.js (Vite Setup)

React Router DOM

Bootstrap

React Icons

Context API

useReducer

useMemo

HTML5

CSS3

JavaScript (ES6)

🚀 New Features Added in Experiment-4
✅ 1. useContext (Global State Management)

Created a global context provider:

Theme (Light/Dark Mode)

User Profile (Mock User)

Task Data (Reducer state)

Context is used in multiple components:

Navbar

ThemeToggle

Analytics Page

Reports Page

✅ 2. useReducer (Structured State Management)

Reducer implemented for task management system.

Actions Implemented:

ADD_TASK

TOGGLE_TASK

DELETE_TASK

CLEAR_COMPLETED

SET_FILTER

This ensures structured and scalable state transitions.

✅ 3. useMemo (Performance Optimization)

useMemo is used for optimizing derived calculations such as:

Filtered task list (filter + search)

Total task count

Active task count

Completed task count

Completion percentage

Derived values are recomputed only when dependencies change.

✅ 4. New Page Added – Reports Page

A new page named Reports was added.

This page demonstrates:

Context usage (User profile display)

Reducer data access (Task state)

useMemo optimized analytics

Dashboard-style summary cards

📄 Pages in the Application

Home

Departments

Analytics

Reports

Total Pages After Experiment-4: 4

📁 Folder Structure
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── CardComponent.jsx
│   ├── ThemeToggle.jsx
│
├── context/
│   └── AppContext.jsx
│
├── reducer/
│   └── appReducer.js
│
├── pages/
│   ├── Home.jsx
│   ├── Departments.jsx
│   ├── Analytics.jsx
│   └── Reports.jsx
│
├── App.jsx
├── main.jsx
└── index.css
🎨 UI & Design

Responsive layout (Mobile + Desktop)

Dark / Light mode toggle

Sticky Navbar

Dashboard-style analytics cards

Filter + Search functionality

Clean and modern UI

⚙️ Installation & Setup

Clone the repository:

git clone <repository-url>

Navigate into project folder:

cd your-project-name

Install dependencies:

npm install

Start development server:

npm run dev
🌐 Deployment

Deployment done using Vercel

Deployment Link Format:
{uid}-exp4-college.vercel.app

Example:

23BAI70429-exp4-college.vercel.app
📸 Screenshots

Screenshots are added inside:

/screenshots

Includes:

Home Page

Analytics Page

Reports Page

Dark Mode View

📚 Learning Outcomes

Understanding global state using Context API

Managing complex state transitions with useReducer

Optimizing derived computations with useMemo

Building scalable multi-page React applications

Applying modern UI/UX principles

🎤 Viva Highlights

Context prevents prop drilling

useReducer handles complex state logic

useMemo optimizes expensive derived calculations

React Router enables client-side navigation

Application follows modular folder structure

👤 Author

Name: Surya
UID: 23BAI70429
Course: B.Tech CSE (AIML)
Experiment: 4

✅ Conclusion

Experiment-4 successfully enhances the College Management System by integrating advanced React hooks such as useContext, useReducer, and useMemo.

The project demonstrates scalable state management, optimized analytics computation, and professional multi-page application structure.