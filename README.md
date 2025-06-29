# codealpha_tasks


```markdown
# 🛒 E-commerce Cart Backend

This project is a simple e-commerce backend built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**, featuring user sessions, a shopping cart system, and basic product/cart operations.

## 🚀 Features
- User session-based shopping cart
- Add products to cart
- Remove products from cart
- View cart contents
- MongoDB for product storage
- EJS templating support for views
- Middleware setup (JSON, URL-encoded, sessions)
- Organized route structure

## 🗂️ Project Structure
```

project/
├─ backend/
│  ├─ models/
│  │  └─ product.js
│  ├─ routes/
│  │  └─ cartRoutes.js
│  ├─ views/
│  │  └─ cart.ejs
│  ├─ server.js
├─ public/
├─ .env
├─ package.json
├─ package-lock.json

````

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo/backend
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of your project and add your MongoDB URI:

   ```
   MONGO_URI=your-mongodb-connection-string
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Visit your app at [http://localhost:3000](http://localhost:3000).

---

## 📋 API Endpoints

| Method | Route                     | Description              |
| ------ | ------------------------- | ------------------------ |
| POST   | `/cart/add/:productId`    | Add product to cart      |
| GET    | `/cart/add/:productId`    | Add product via link     |
| GET    | `/cart`                   | View cart contents       |
| POST   | `/cart/remove/:productId` | Remove product from cart |

---

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **express-session**
* **dotenv**
* **EJS** (for views)

---

## 📦 Scripts

In your `package.json`, you can add a start script for easier execution:

```json
"scripts": {
  "start": "node server.js"
}
```

Then simply run:

```bash
npm start
```

---

## ✅ Notes

* Make sure your MongoDB database is running and accessible at the URI you provide in `.env`.
* Always commit your `package.json` and `package-lock.json`, but **do not commit `node_modules/`** — keep it in `.gitignore`.


---

✅ **What to do next:**  
1. Replace `https://github.com/your-username/your-repo.git` with your real GitHub repo URL.  
2. Replace `Your Name` and GitHub profile link in the Author section.  
3. Add a `LICENSE` file if you want an open-source license (e.g., MIT, Apache).

```
