# Cheshbonait – Smart Bookkeeping System

A full-stack **TypeScript** application designed for small businesses and freelancers to simplify financial management.  
The system focuses on **clarity, usability, and reliability**, providing both a seamless user experience and a high-quality, maintainable codebase.

---

## 🌟 Highlights

- **End-to-End TypeScript**: Both backend (Node.js + Express) and frontend (React) are implemented with TypeScript for type safety and scalability.  
- **User-Friendly Dashboard**: Visualize income and expenses with **tables, charts, and filters**. Compare data across **months, years, or custom time ranges** for better insights.  
- **Data Export & Import**: Generate professional PDF reports (via jsPDF), upload files (via Multer), and store structured data in MongoDB.  
- **Secure Authentication**: Role-based access with **JWT tokens** for safe data handling.  
- **Code Quality**:  
  - Consistent formatting with **Prettier**  
  - Static analysis with **ESLint**  
  - Modular, generic, and clean code practices  
- **Testing**: High test coverage (target 93%) with **Jest**, ensuring reliability and stability.  
- **Documentation**: API endpoints documented with **Swagger** for developers’ convenience.  

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript  
- **Backend**: Node.js + Express + TypeScript  
- **Database**: MongoDB  
- **Version Control**: Git & GitHub  
- **Development Tools**:  
  - **Nodemon + ts-node** – fast dev workflow  
  - **Prettier + ESLint** – code formatting & linting  
  - **Jest** – testing framework  
- **Additional Libraries**:  
  - Multer – file uploads  
  - jsPDF – document generation  
  - D3.js – data visualization  
  - Swagger – API documentation  

---

## 🚀 Getting Started

```bash
# Clone repository
git clone https://github.com/YuD1020/Cheshbonait.git

# Install dependencies (server)
cd server
npm install

# Install dependencies (client)
cd ../client
npm install

# Run backend
cd ../server
npm run dev

# Run frontend
cd ../client
npm start
```

---

📂 Project Structure

```code
project-root
│── client/         # React + TypeScript frontend
│── server/         # Node.js + Express + TypeScript backend
│── docs/           # API documentation (Swagger)
│── tests/          # Unit & integration tests
│── README.md
```

---

🎯 Project Goals

Deliver a professional-grade bookkeeping tool tailored for small businesses.

Maintain clean, scalable, and well-tested code to ensure long-term stability.

Provide a smooth user experience through clear UI, quick insights, and flexible reporting.

Continuously evolve with new features and improvements.

🤝 Contributions

The project is under active development. Contributions, issues, and feature requests are welcome!
Feel free to fork the repo, open pull requests, or share ideas for improvements.
