# Kooponcraft

Kooponcraft is a web application designed to facilitate coupon management, item collections, and user interactions through a seamless and intuitive interface. The platform allows users to manage their collections, initiate coupon swaps, explore items, and much more.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Authentication**: Secure login and registration system.
- **Coupon Management**: Create, view, and manage coupons.
- **Item Collections**: Explore and manage collections and items.
- **Coupon Swaps**: Initiate and manage coupon swaps between users.
- **Leaderboards**: View rankings and compete with other users.
- **Store Management**: Manage your store and transactions.
- **Responsive Design**: Fully optimized for desktop and mobile devices.

---

## Technologies Used

- Next.JS 15
- Typescript
- Axios
- Bootstrap
- React bootstrap
- SCSS

---

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend server running locally

### Steps

1. Fork and clone the repository:
    ```bash
    git clone https://github.com/your-username/kooponcraft-Frontend.git
    cd kooponcraft-Frontend
    ```

2. Install dependencies:
    ```bash
    yarn install
    ```

3. Start the development server:
    ```bash
    yarn dev
    ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000/
NEXT_PUBLIC_API_URL=http://localhost:5500/api
```

Replace the values with your actual configuration.

---

## Usage

1. Register or log in to your account.
2. Explore the dashboard to manage coupons, collections, and swaps.
3. Use the leaderboards to track your progress and compete with others.
4. Manage your store and transactions seamlessly.

---

## API Endpoints

Refer to the [API Documentation](https://github.com/kooponcraft/kooponcraft) for detailed information on available endpoints.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.