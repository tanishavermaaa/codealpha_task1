# codealpha_tasks


```markdown
# 🛒 E-Commerce Cart Project

This project is a simple e-commerce backend built with Node.js, Express, MongoDB, Mongoose, HTML, and CSS, featuring user sessions, a shopping cart system, and basic product/cart operations.

## 🚀 Features
- User session-based shopping cart
- Add products to cart
- Remove products from cart
- View cart contents
- MongoDB for product storage
- EJS templating support for views
- Middleware setup (JSON, URL-encoded, sessions)
- Organized route structure

---

backend/
├── config/
│ └── db.js
├── middleware/
│ └── authmiddleware.js
├── models/
│ ├── order.js
│ ├── product.js
│ └── user.js
├── routes/
│ ├── authRoutes.js
│ ├── cartRoutes.js
│ ├── mainRoute.js
│ ├── orderRoute.js
│ └── productRoute.js
├── views/
│ ├── home.ejs
│ ├── login.ejs
│ ├── product.ejs
│ ├── cart.ejs
│ ├── orderConfirmation.ejs
│ ├── productDetails.ejs
│ ├── product.ejs
│ └── register.ejs
└── server.js
.env

---

Visit app at [http://localhost:3000](http://localhost:3000).

---

## 📋 API Endpoints

| Method | Route                     | Description              |
| ------ | ------------------------- | ------------------------ |
| POST   | `/cart/add/:productId`    | Add product to cart      |
| GET    | `/cart/add/:productId`    | Add product via link     |
| GET    | `/cart`                   | View cart contents       |
| POST   | `/cart/remove/:productId` | Remove product from cart |

---

📌 Usage

Visit /auth/register to create an account
Login via /auth/login
Browse products at /products
View product details via /products/:id
Place orders via /orders/place

---

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **express-session**
* **dotenv**
* **EJS** (for views)


