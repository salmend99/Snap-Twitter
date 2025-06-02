# 🐦 Fake Twitter (Capstone Project)

A mini Twitter-style app built using **JavaScript (Node.js)**, **Express**, and **EJS** for the front-end templating. Users can create, edit, and delete short posts — like tweets — all in a clean, minimal interface.

## 🚀 Features
- Create a new post
- Edit existing posts
- Delete posts

## 🧰 Technologies Used

### Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for routing and handling form submissions
- **body-parser** – Middleware to handle form data

### Frontend
- **EJS** – Template engine for server-rendered HTML
- **CSS** – Custom styles served from a public directory
- **JavaScript** – Adds dynamic year in footer

## 🛠 How It Works
- Server routes are handled in `index.js`
- Views are rendered with `EJS` templates located in the `views/` folder
- Static CSS is served from the `public/` directory
- Posts are stored in-memory using a simple JavaScript array
- Forms use standard HTML `POST` requests to submit, edit, and delete data
