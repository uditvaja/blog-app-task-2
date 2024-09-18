"# blog-app-task-2" 
fornt-end url=https://blog-app-frontend-eight-sand.vercel.app
backe-end url =  https://blog-app-backend-henna-eta.vercel.app/

Setup Instructions
Follow the steps below to set up the project on your local machine:

Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repo.git
cd your-repo/backend
Install backend dependencies:

bash
Copy code
npm install
Create .env file in the backend directory and add the following:

env
Copy code
MONGODB_URL=mongodb://localhost:27017/your-db-name
JWT_SECRET=your_jwt_secret
PORT=3000
Run the backend server:

bash
Copy code
node index.js
The backend server will be running at http://localhost:3000.

Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd ../frontend
Install frontend dependencies:

bash
Copy code
npm install
Create .env file in the frontend directory with the following content:

env
Copy code
REACT_APP_API_URL=http://localhost:3000/api
Run the frontend server:

bash
Copy code
npm run dev
The frontend will be running at http://localhost:3000.

Environment Variables
Make sure you add these environment variables in their respective .env files:

Backend .env:
MONGODB_URL: MongoDB connection string
JWT_SECRET: Secret key for JWT
PORT: Port number for the backend
Frontend .env:
REACT_APP_API_URL: URL for backend API
Deployment
This section explains how to deploy both frontend and backend to Vercel.

Vercel Deployment
Create Vercel Accounts: If you don’t have one, create an account at Vercel.

Connect GitHub Repository: In the Vercel dashboard, connect your GitHub repository.

Frontend Deployment on Vercel
Navigate to the frontend folder in your project.
Push the code to GitHub:
bash
Copy code
git add .
git commit -m "Deploy frontend"
git push origin main
Deploy: Vercel will automatically build and deploy your frontend once the repository is connected.
Backend Deployment on Vercel
Navigate to the backend folder in your project.

Push the code to GitHub:

bash
Copy code
git add .
git commit -m "Deploy backend"
git push origin main
Set Environment Variables: On Vercel, go to the Environment Variables section and set the same environment variables from your .env file.

MONGODB_URL
JWT_SECRET
PORT
