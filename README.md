# 🚀 Full Stack Task Manager

## 📌 Project Overview

The **Task Manager** is a full stack web application that allows users to manage their daily tasks efficiently. Users can register, log in, and perform task operations such as adding and deleting tasks.

This project demonstrates the implementation of a complete full stack system using **React (Frontend)**, **PHP (Backend)**, and **MySQL (Database)**.

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* Axios
* React Router DOM
* CSS (Custom Styling)

### Backend:

* PHP (Core PHP APIs)

### Database:

* MySQL

---

## ✨ Features

* 🔐 User Registration & Login (Authentication)
* ➕ Add Tasks
* ❌ Delete Tasks
* 📋 View Tasks (Dashboard)
* 🔒 Protected Routes (Only logged-in users can access dashboard)
* 🎨 Responsive and Clean UI

---

## 📂 Project Structure

```
task-manager/
│
├── backend/
│   ├── add_task.php
│   ├── db.php
│   ├── delete_task.php
│   ├── get_tasks.php
│   ├── login.php
│   ├── register.php
│   └── update_task.php
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup (XAMPP)

1. Install XAMPP

2. Move `backend` folder to:

   ```
   C:/xampp/htdocs/task-manager/backend
   ```

3. Start:

   * Apache
   * MySQL

4. Create Database in phpMyAdmin:

   ```
   task_manager
   ```

5. Create Tables:

### Users Table:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255)
);
```

### Tasks Table:

```sql
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    task_title VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending'
);
```

---

### 🔹 Frontend Setup

1. Open terminal:

```
cd frontend
```

2. Install dependencies:

```
npm install
```

3. Run project:

```
npm start
```

---

## 🌐 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | /login.php       | User Login        |
| POST   | /register.php    | User Registration |
| GET    | /get_tasks.php   | Fetch Tasks       |
| POST   | /add_task.php    | Add Task          |
| GET    | /delete_task.php | Delete Task       |
| POST   | /update_task.php | Update Task       |

---

## 📸 Screens

* Login Page
* Register Page
* Dashboard (Task List)
* Home Page

---

## 🚀 Future Improvements

* ✔ Task completion toggle (Done/Not Done)
* ✔ Edit tasks
* ✔ Better UI/UX
* ✔ Deployment (Live hosting)

---

## 👨‍💻 Author

* Developed by: *Your Name*
* Course: AIML / Full Stack Project

---

## 📢 Conclusion

This project successfully demonstrates a full stack application with authentication, CRUD operations, and proper frontend-backend integration.

---

⭐ If you like this project, give it a star on GitHub!
