# AgriMart

AgriMart revolutionizes the way you buy and sell agricultural products. Connect directly with farmers, access fresh produce, and enjoy a seamless shopping experience. Empowering farmers, enhancing access. AgriMart – your farm-to-table solution.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

AgriMart is a MERN stack project aimed at connecting consumers directly with farmers to buy and sell agricultural products. This platform enhances access to fresh produce and empowers farmers by providing a direct sales channel.

## Features

- **Direct Farmer Connections:** Connect directly with local farmers to purchase fresh agricultural products.
- **Seamless Shopping Experience:** User-friendly interface for browsing and purchasing products.
- **Enhanced Access:** Improved access to fresh produce for consumers and direct market access for farmers.

## Technologies Used

- **MongoDB:** Database for storing user and product information.
- **Express.js:** Backend framework for building the server and API.
- **React:** Frontend library for building the user interface.
- **Node.js:** Runtime environment for server-side JavaScript execution.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/menavipandey/Agri-Mart.git
   ```

2. **Navigate to the project directory:**
   ```sh
   cd Agri-Mart
   ```

3. **Install server dependencies:**
   ```sh
   cd server
   npm install
   ```

4. **Install client dependencies:**
   ```sh
   cd ../client
   npm install
   ```

5. **Set up environment variables:**
   Create a `.env` file in the `server` directory and add the following:
   ```env
   MONGO_URI ="use_your_Mongodb_url"
   JWT_SECRET=use_you_jwt_secret_key
   ```

6. **Start the server:**
   ```sh
   cd ../server
   npm start
   ```

7. **Start the client:**
   Open a new terminal window and navigate to the `client` directory:
   ```sh
   npm start
   ```

## Usage

- Visit `http://localhost:3000` to view the AgriMart frontend.
- Register as a user to start buying or selling agricultural products.
- Browse available products, add items to your cart, and complete your purchase.
- Farmers can add new products to sell directly to consumers.

## Project Structure

```
Agri-Mart/
│
├── client/                # React frontend
│   ├── public/            # Public assets
│   └── src/               # React components and application logic
│       └── ...
│
├── server/                # Express backend
│   ├── config/            # Configuration files
│   ├── controllers/       # Request handlers
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   └── ...
│
└── README.md              # This README file
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact us at:
- **Email:** navipandey67@gmail.com

Thank you for using AgriMart – your farm-to-table solution!
