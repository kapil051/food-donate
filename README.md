# Blessed Baskets

## Project Description

Blessed Baskets is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to donate food as well as request for donated food.It provides an unique verification for both food donor and the request sender so that the food is distributed properly following all safety procedures.

## Problem Statement 
In India, 40% of the food wasted is equivalent to nearly 92,000 crore/year. This is equivalent to nearly 1% of the GDP which is depleted in the form of food wastage in India. Each person in India wastes 55 kg of food per year as per UN Environment Programme's report.On the other hand according to the UN's Food and Agricultural Organisation (FAO) 'The State of Food Security and Nutrition in the World, 2022 Report', 224.3 million people, or 16 per cent of India's population, are undernourished.

The challenge is to bridge the gap between excessive food wastage and the millions of undernourished individuals, ensuring that surplus food is efficiently redistributed to those in need. This initiative aims to reduce food wastage and provide free, healthy meals to the underprivileged population.

## Technologies Used

- **Frontend:**
  - React.js
  - Axios
  - Tailwind CSS
  - React Router

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - Nodemailer
  - JSON Web Tokens (JWT)

- **Deployment:**
  - Netlify (Frontend)
  - Vercel (Backend)

###  Data Flow Diagram

![dd](https://github.com/user-attachments/assets/f943021c-a551-4714-b0bc-1c943298857a)

### Screenshots 

- **Donate Food Page:**

<img width="947" alt="donateForm" src="https://github.com/user-attachments/assets/6a28194b-501c-4cbf-a5c8-63268eaac379">

- **Available Foods Page:**

<img width="942" alt="availableFood" src="https://github.com/user-attachments/assets/ff9ca556-f854-4be5-987d-a8f41c49ac66">

- **MyFood Page:** Donated food history

<img width="950" alt="fooddonated_history" src="https://github.com/user-attachments/assets/5ec018ff-70ec-496b-a3d4-578722b8ccae">

- **MyFoodRequest Page:** Requested food history

<img width="959" alt="foodrequest_history" src="https://github.com/user-attachments/assets/5b6fa840-9c95-4b24-b549-75855ae29d32">

- **Food requested email to donor:**

<img width="949" alt="foodrequest_email" src="https://github.com/user-attachments/assets/977daca5-3345-4a99-82ee-65a1a597c7f9">

- **Requested food confirmation email to request sender:**

<img width="957" alt="requestConfirm_email" src="https://github.com/user-attachments/assets/7f9422bc-f644-4655-8c8a-446dcadf4053">

## Setup Instructions for Running the Project Locally

### Prerequisites

- Node.js installed
- MongoDB installed and running
- Git installed

### Backend Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Sreejita2023/college-project.git
   cd college-project/backend


2. **Install the Required Packages:**

   ```bash
   npm install
   ```

3. **Create a `.env` File:**

   Create a `.env` file in the `backend` directory with the following content:

   ```env
   MONGODB_URI= 
   JWT_SECRET= 
   ```

4. **Start the Backend Server:**

   ```bash
   node index.js
   ```

### Frontend Setup

1. **Navigate to the Frontend Directory:**

   ```bash
   cd college-project/backend
   ```

2. **Install the Required Packages:**

   ```bash
   npm install
   ```

3. **Start the Frontend Development Server:**

   ```bash
   npm start
   ```

### Running the Application

- **Backend:** The server will run on `http://localhost:5000`.
- **Frontend:** The client will run on `http://localhost:3000`.



