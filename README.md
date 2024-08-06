# EventPlanner360

EventPlanner360 is an all-in-one event management platform that enables users to plan, organize, and oversee diverse events such as conferences, weddings, and parties. This full-stack application is built using the MERN (MongoDB, Express.js, React, Node.js) stack.

## Features

- User authentication (registration and login)
- Event creation and management
- Guest list management
- Budget tracking
- Vendor coordination
- Personalized event pages
- Invitation management and RSVP tracking
- Integration with payment gateways for ticket sales

## Project Structure

```
EventPlanner360/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   └── components/
│   │       ├── HomePage/
│   │       ├── RegisterPage/
│   │       ├── LoginPage/
│   │       └── Dashboard/
│   ├── package.json
│   └── .env
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0.0 or later)

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/EventPlanner360.git
   cd EventPlanner360
   ```

2. Set up the backend:
   ```
   cd backend
   npm install
   ```
   Create a `.env` file in the backend directory and add the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

3. Set up the frontend:
   ```
   cd ../frontend
   npm install
   ```
   Create a `.env` file in the frontend directory and add:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the backend server:
   ```
   cd ../backend
   npm start
   ```

5. In a new terminal, start the frontend development server:
   ```
   cd ../frontend
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Usage

1. Register a new account or log in with existing credentials.
2. Once logged in, you'll be directed to the dashboard where you can create and manage events.
3. Use the various features to plan your event, manage guests, track budgets, and coordinate with vendors.

## API Endpoints

- POST /api/users/register - Register a new user
- POST /api/users/login - Log in a user
- GET /api/events - Get all events for the logged-in user
- POST /api/events - Create a new event
- PUT /api/events/:id - Update an event
- DELETE /api/events/:id - Delete an event

(Add more endpoints as they are implemented)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JSON Web Tokens](https://jwt.io/)
