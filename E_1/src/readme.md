React Navigation Website:
This is a simple React application demonstrating page navigation using React Router.
The application includes a navigation bar with Home, About, and Contact pages.
When a user clicks on a navigation link, the corresponding page loads below the navbar without reloading the entire website.

Features:
• Responsive Navigation Bar
• Client-side routing using React Router
• Home, About, and Contact pages
• Common layout using Layout + Outlet
• URL updates on navigation
• Page content loads below the navigation bar
• Clean and scalable folder structure

Technologies Used:
• React JS
• React Router DOM
• JavaScript (ES6)
• HTML5
• CSS3

Project Folder Structure:
E_1
│
├── node_modules
├── public
│
├── src
│   ├── components
│   │   └── NavBar.jsx
│   │
│   ├── layout
│   │   └── mainLayout.jsx
│   │
│   ├── pages
│   │   ├── home.jsx
│   │   ├── about.jsx
│   │   └── contact.jsx
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
│
├── package.json
├── package-lock.json
└── README.md

Navigation Flow Explanation:
1.NavBar.jsx
  Displays navigation links:
    -Home
    -About
    -Contact
2.React Router handles routing using <BrowserRouter>, <Routes>, and <Route>.
3.MainLayout.jsx
    -Contains the NavBar
    -Uses <Outlet /> to render page content below the navbar
4.Pages
    -home.jsx → Home page content
    -about.jsx → About page content
    -contact.jsx → Contact page content
5.When a navigation link is clicked:
    -URL updates
    -Page content loads below the navbar
    -Application does NOT fully reload

nstallation & Setup:

Step 1: Clone the Repository
git clone <repository-url>

Step 2: Install Dependencies
npm install

Step 3: Install React Router
npm install react-router-dom

Step 4: Run the Application
npm start

Learning Outcomes:
• Understanding React folder structure
• Using React Router for navigation
• Creating reusable components
• Implementing layout-based routing
• Improving single-page application (SPA) concepts

Author

Surya Vakalapudi
23BAI70429
B.Tech CSE (AIML)
Chandigarh University