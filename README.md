# ESG-WEBSITE

![ESG Logo](https://via.placeholder.com/150) <!-- Optional: Add your project logo here -->

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Overview
**ESG-WEBSITE** is a MERN full-stack, user-friendly platform designed for sharing ESG (Environmental, Social, and Governance) data. Built with JavaScript and React, the project was developed between January and February 2022. It features secure user authentication, CRUD operations, pagination, and search functionalities, enabling users to contribute to and access ESG data for companies. This fosters greater transparency and accessibility of crucial ESG information.

The application is deployed on Vercel, offering a robust client-server architecture.  
[View the live site »](https://esg-website-ten.vercel.app/)  
[Source Repository »](https://github.com/JoeyChuang1/ESG-WEBSITE) :contentReference[oaicite:0]{index=0}

## Features
- **User Authentication:** Secure registration and login for users.
- **CRUD Operations:** Create, read, update, and delete ESG data entries.
- **Pagination:** Easy navigation through extensive datasets.
- **Search Functionality:** Efficiently query ESG information by company or other criteria.
- **Responsive Design:** Intuitive UI built with React for a seamless experience.
- **Client-Server Architecture:** Robust backend and frontend integration.

## Technologies Used
- **Frontend:** JavaScript, React
- **Backend:** Node.js, Express, MongoDB
- **Deployment:** Vercel
- **Additional Tools:** JWT for authentication, Axios for API calls, and more.

## Getting Started

### Prerequisites
Before running the project locally, ensure you have installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- A MongoDB instance (local or cloud-based)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/JoeyChuang1/ESG-WEBSITE.git
   
2. **Installation Setup:**
   - **Navigate to the project directory:**
     ```bash
     cd ESG-WEBSITE
     ```
   - **Install dependencies for the client:**
     ```bash
     cd client
     npm install
     ```
   - **Install dependencies for the server:**
     ```bash
     cd ../server
     npm install
     ```
   - **Configure Environment Variables:**

     In the server directory, create a `.env` file and add the following variables (adjust as needed):
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     JWT_SECRET=your_jwt_secret
     ```


bash
複製
cd server
npm start
Start the frontend application:

bash
複製
cd client
npm start
Access the application:

Open your browser and navigate to http://localhost:3000.

Deployment
The project is deployed on Vercel. You can view the live application here:
https://esg-website-ten.vercel.app/

Contributing
Contributions are welcome! To contribute:

Fork the repository.

Create a new branch for your feature or bug fix.

Commit your changes.

Push to your fork and open a pull request.

For major changes, please open an issue first to discuss your ideas.

License
Distributed under the MIT License. See the LICENSE file for more information.

Contact
For further information or inquiries, please contact:

Joey Chuang – GitHub Profile

Email: your-email@example.com

Acknowledgements
Placeholder Logo

[Other acknowledgements if applicable]
