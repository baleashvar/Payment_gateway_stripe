
<strong>**Payment Gateway Using Stripe**</strong>

This repository contains the code for a payment gateway implementation using Stripe. The project is built using Express.js, EJS, Node.js, and Nodemon for development. The application allows users to make payments using the Stripe payment platform.

**Features**

Secure payment processing through Stripe.
User-friendly interface built with EJS templates.
Node.js and Express.js for server-side logic.
Nodemon for easy development server management.

**Getting Started**

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

**Prerequisites**

Make sure you have the following tools installed:

Node.js: Download and Install Node.js
npm (Node Package Manager): This comes bundled with Node.js installation.
**Installation**
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/baleashvar/Payment_gateway_stripe.git
Navigate to the project directory:

bash
Copy code
cd payment-gateway-stripe
Install the required dependencies:

Copy code
npm install

**Configuration**
Before running the application, you need to set up your Stripe API keys. Rename the .env.example file to .env and provide your Stripe API keys.

env
Copy code
STRIPE_SECRET_KEY=your_stripe_secret_key_here
STRIPE_PUBLIC_KEY=your_stripe_public_key_here

**Running the Application**
Start the application using the following command:

arduino
Copy code
npm run devStart
Visit http://localhost:3000 in your web browser to access the application.

**Screenshots**
Here are some screenshots of the application:

![](<Images/Screenshot from 2023-08-27 00-37-00.png>)
![](<Images/Screenshot from 2023-08-27 00-39-31.png>)
![](<Images/Screenshot from 2023-08-27 00-39-59.png>)


**Contributing**
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

Fork the repository.
Create a new branch.
Make your changes and commit them.
Push your changes to your forked repository.
Create a pull request describing your changes.
