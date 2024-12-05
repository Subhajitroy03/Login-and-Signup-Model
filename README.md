# Login and Signup Page  

## Project Overview  
This project is a **Login and Signup Page** built with **Node.js**, **Express.js**, **MongoDB**, and **EJS**. It allows users to register, log in, and manage their accounts securely. The system uses a structured database schema to store user information and features like session management and flash messages to enhance the user experience.  

## Features  
- **User Authentication**  
  - Signup: Create a new account with unique credentials.  
  - Login: Securely access an existing account.  

- **Session Management**  
  - Maintain user state during interactions.  

- **Flash Messages**  
  - Display success or error messages for actions like login, signup, etc.  

- **Dynamic Rendering**  
  - Pages are rendered using EJS templates for a seamless experience.  

## Database Schema  
The project uses MongoDB to store user details. Below is the schema:  

| Field      | Type   | Description                      | Required | Unique |  
|------------|--------|----------------------------------|----------|--------|  
| Roll       | String | Unique roll number of the user   | Yes      | Yes    |  
| Name       | String | Full name of the user            | Yes      | No     |  
| Department | String | User's department                | Yes      | No     |  
| Semester   | String | Current semester of the user     | Yes      | No     |  
| Gender     | String | User's gender                    | No       | No     |  
| Mail       | String | Email address of the user        | Yes      | No     |  
| Password   | String | User's password                  | Yes      | No     |  

## Technologies Used  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose  
- **Templating Engine**: EJS  
- **Middleware**:  
  - `express-session` for session handling.  
  - `connect-flash` for flash messaging.  


## Prerequisites  
- **Node.js**: Installed on your system.  
- **MongoDB**: Running locally or on a server.  

## Installation and Setup  
1. Clone this repository:  
   ```bash  
   git clone <repository-url>
   cd <project-folder>
   ```  

2. Install dependencies:  
   ```bash  
   npm install
   ```  

3. Start MongoDB:  
   Ensure MongoDB is running on `mongodb://127.0.0.1:27017/student`.  

4. Run the server:  
   ```bash  
   node server.js
   ```  

5. Access the app:  
   Open your browser and navigate to `http://localhost:4000/user`.  

## Usage  
- **Signup**:  
  Navigate to `/user/signup` to register a new account.  
- **Login**:  
  Navigate to `/user/login` to log in.  

## Future Improvements  
- **Edit User Details**:  
  Add functionality to allow users to update their profiles (e.g., name, email, password).  
- **Forgot Password System**:  
  Implement a secure password recovery feature.  
- **UI Enhancements**:  
  Design a more intuitive and visually appealing interface.  
- **Data Validation**:  
  Include robust client-side and server-side validation.  

## Contact  
For questions or feedback, feel free to reach out:  
- **Email**: roysubhajit2003@gmail.com  
