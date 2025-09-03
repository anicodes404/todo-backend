Todo Task Backend

Follow these steps to run project locally. 

1. Clone repository
   git clone https://github.com/your-username/todo-backend.git
   cd todo-backend

2. Install dependencies
   npm install

3. Configure environment

Create a .env file in the root:

DATABASE_URL="mysql://username:password@localhost:3306/todo_db"
PORT=4000

4. Set up the database
Option A: Local MySQL

Make sure you have MySQL running locally and create a database:

CREATE DATABASE todo_db;

Option B: Docker

Run MySQL using Docker:

docker run --name todo-mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=todo_db -p 3306:3306 -d mysql:8

5. Run Prisma migrations
npx prisma migrate dev --name init

6. Start the development server
npm run dev


API will be available at 👉 http://localhost:4000

🤝 Contributing

Fork the project

Create a feature branch (git checkout -b feature/awesome-feature)

Commit changes (git commit -m 'Add awesome feature')

Push branch (git push origin feature/awesome-feature)

Open a Pull Request

📜 License

This project is licensed under the MIT License.
