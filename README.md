# Hotel Management System - Frontend

This is the frontend of the Hotel Management System, providing an intuitive and responsive interface for customers, receptionists, and admins to manage hotel operations including reservations, check-ins, check-outs, and more.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)

---

## Features
- User authentication and role-based views for customer, receptionist, and admin
- Room reservation and cancellation management
- Payment interface with status updates
- Real-time room and service availability updates
- Admin reporting dashboard for managing hotel performance
- Responsive design for cross-device compatibility

## Technologies Used
- **React.js** - Frontend library
- **Redux** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **Bootstrap / Material-UI** - UI component libraries
- **SCSS** - Styling

## Getting Started

### Prerequisites
- **Node.js** 14 or above
- **npm** or **yarn**

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/hotel-management-system-frontend.git
    ```
2. Navigate to the frontend directory:
    ```bash
    cd hotel-management-system-frontend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables as described in the next section.

5. Start the application:
    ```bash
    npm start
    ```

### Environment Variables
Create a `.env` file in the project root to configure environment variables:

```dotenv
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_AUTH_TOKEN_SECRET=your_jwt_token_secret
```
### Project structure

    hotel-management-system-frontend/
    ├── public/                 # Public assets
    ├── src/
    │   ├── assets/             # Images, icons, and fonts
    │   ├── components/         # Reusable UI components
    │   ├── features/           # Feature-based components
    │   ├── pages/              # Pages for each route
    │   ├── services/           # API service functions
    │   ├── store/              # Redux store and slices
    │   ├── styles/             # Global and component-specific SCSS
    │   ├── App.js              # Main app component
    │   └── index.js            # Entry point
    └── .env                    # Environment variables

### Available Scripts
    In the project directory, you can run:

        npm start: Runs the app in development mode on http://localhost:3000.
        npm test: Launches the test runner.
        npm run build: Builds the app for production.

### Contributing
    Fork the repository.
    Create a feature branch (git checkout -b feature/your-feature).
    Commit changes (git commit -m 'Add your feature').
    Push to the branch (git push origin feature/your-feature).
    Create a Pull Request.