# Project Management Tool

A full-stack Project Management application designed to help teams organize projects, track tasks, and manage team collaboration efficiently. Built using the MERN stack (MongoDB, Express, React, Node.js) and modern UI libraries.

## 🚀 Features

* **User Authentication:** Secure Login and Registration using JWT and Bcrypt.
* **Dashboard:** Real-time overview of project summaries, recent activities, and task statuses.
* **Task Management:** Create, read, update, and delete tasks to keep projects moving.
* **Drag & Drop:** Interactive task organization using `@hello-pangea/dnd`.
* **Team Collaboration:** Manage team members and view team overviews.
* **Modern UI:** Responsive and accessible design built with Tailwind CSS, Shadcn UI, and Headless UI.

## 🛠️ Tech Stack

### Frontend
* **Framework:** React (Vite)
* **Styling:** Tailwind CSS, PostCSS, Autoprefixer
* **UI Components:** Shadcn UI, Headless UI
* **Icons:** Lucide React, Heroicons, React Icons
* **HTTP Client:** Axios
* **Routing:** React Router DOM
* **Drag & Drop:** @hello-pangea/dnd

### Backend
* **Environment:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (with Mongoose)
* **Authentication:** JSON Web Token (JWT), Bcryptjs
* **CORS:** Cross-Origin Resource Sharing enabled

## 📂 Project Structure

```bash
├── backend/            # Node.js/Express Server
│   ├── src/
│   │   ├── config/     # Database Configuration
│   │   ├── controllers/# Business logic for Auth, Projects, Tasks
│   │   ├── models/     # Mongoose Models (User, Task, Project)
│   │   ├── routes/     # API Routes definitions
│   │   └── middleware/ # Authentication Middleware
│   └── server.js       # Entry point for the backend
│
└── frontend/           # React/Vite Application
    ├── src/
    │   ├── components/ # Reusable UI components (Forms, Lists, UI elements)
    │   ├── context/    # Global state management (AuthContext)
    │   ├── layouts/    # Page layouts (Dashboard, Auth)
    │   ├── pages/      # Main application pages (Login, Dashboard, Tasks)
    │   └── utils/      # Helper functions and API instances

```
⚙️ Installation & Setup
Follow these steps to run the project locally.

Prerequisites
Node.js (v14+ recommended)

MongoDB Account (Atlas) or a local MongoDB instance

1. Clone the Repository
   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
   ```
2. Backend Setup
Navigate to the backend directory and install dependencies:
  ```bash
  cd backend
  npm install
  ```
Create a .env file in the backend folder with:
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_secure_jwt_secret

Start the backend server:
  ```bash
  npm run dev
  ```
The server will start at: http://localhost:5000

3) Frontend setup
Open a new terminal, then:
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
The app will be available at: http://localhost:5173

🔌 API Endpoints

| Method | Endpoint             | Description                             |
| ------ | -------------------- | --------------------------------------- |
| POST   | `/api/auth/register` | Register a new user                     |
| POST   | `/api/auth/login`    | Log in and receive a JWT                |
| GET    | `/api/projects`      | Get all projects for the logged-in user |
| POST   | `/api/projects`      | Create a new project                    |
| GET    | `/api/tasks`         | Get all tasks                           |
| POST   | `/api/tasks`         | Create a new task                       |
| PUT    | `/api/tasks/:id`     | Update a specific task                  |
| DELETE | `/api/tasks/:id`     | Delete a specific task                  |


   
