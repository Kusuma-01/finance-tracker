# 💰 AI Finance Tracker

**AI Finance Tracker** is a full-stack financial management application designed to help users **track expenses, manage transactions, analyze spending patterns, and predict future expenses using machine learning**.

The project combines a **React.js frontend** with a **Flask backend**, along with **Docker containerization** and **Jenkins CI/CD automation** to support a streamlined development and deployment workflow.

---

## 🚀 Features

* 🔐 User registration and login
* 💳 Expense tracking and management
* 🗂️ Transaction categorization
* 📊 Spending pattern analysis
* 🤖 Machine learning-based expense prediction
* 🔗 RESTful API communication
* 📱 Responsive and user-friendly interface
* 🧪 Automated backend testing using Pytest
* 🐳 Docker containerization
* ⚙️ Jenkins CI/CD pipeline
* ☁️ Cloud deployment

---

## 🏗️ Project Architecture

```text
                         ┌───────────────┐
                         │     User      │
                         └───────┬───────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │   React.js    │
                         │    Frontend   │
                         └───────┬───────┘
                                 │
                            REST APIs
                                 │
                                 ▼
                         ┌───────────────┐
                         │     Flask     │
                         │    Backend    │
                         └───────┬───────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
             ┌───────────────┐       ┌────────────────┐
             │    Expense    │       │    Machine     │
             │   Management  │       │    Learning    │
             └───────────────┘       │     Model      │
                                     └───────┬────────┘
                                             │
                                             ▼
                                     ┌────────────────┐
                                     │ Future Expense │
                                     │   Prediction   │
                                     └────────────────┘
```

---

## 🛠️ Tech Stack

| Category             | Technologies                                  |
| -------------------- | --------------------------------------------- |
| **Frontend**         | React.js, JavaScript, HTML, CSS, Tailwind CSS |
| **Backend**          | Python, Flask, RESTful APIs                   |
| **Machine Learning** | Python, Machine Learning, Expense Prediction  |
| **Testing**          | Pytest                                        |
| **DevOps**           | Docker, Jenkins, GitHub                       |
| **Deployment**       | Vercel, Render                                |

---

## 📂 Project Structure

```text
AI-Finance-Tracker/
│
├── backend/
│
├── frontend/
│
├── Dockerfile.jenkins
│
├── Jenkinsfile
│
├── docker-compose.yml
│
├── render.yaml
│
└── README.md
```

---

## 🤖 Machine Learning

The application integrates machine learning to analyze historical expense data and predict future spending patterns.

### Prediction Workflow

```text
Historical Expense Data
          │
          ▼
    Data Processing
          │
          ▼
  Feature Preparation
          │
          ▼
    ML Prediction
          │
          ▼
 Future Expense Forecast
```

The prediction functionality helps users understand their spending behavior and supports better financial planning and budgeting decisions.

---

## 🔗 Backend

The Flask backend provides RESTful APIs that connect the frontend with the application's business logic.

### Backend Responsibilities

* User-related operations
* Expense management
* Transaction processing
* Financial data handling
* Machine learning prediction requests
* Frontend-backend communication

---

## 🧪 Testing

Automated testing is implemented using **Pytest** to validate backend functionality and API behavior.

### Run Tests

```bash
pytest
```

Automated testing helps identify issues during development and improves the reliability and stability of the application.

---

## 🐳 Docker

Docker is used to containerize the application and provide a consistent environment across development and deployment.

### Build the Application

```bash
docker-compose build
```

### Start the Containers

```bash
docker-compose up
```

### Stop the Containers

```bash
docker-compose down
```

---

## ⚙️ Jenkins CI/CD

Jenkins is used to automate the application's build, testing, and deployment workflow.

### CI/CD Workflow

```text
Developer
    │
    ▼
  GitHub
    │
    ▼
Jenkins Pipeline
    │
    ├── Checkout
    │
    ├── Build
    │
    ├── Test
    │
    ├── Docker
    │
    └── Deployment
```

The Jenkins pipeline helps automate the software development lifecycle, reduce manual effort, and improve deployment consistency.

---

## ☁️ Deployment

The application uses cloud platforms for deployment.

| Component            | Platform |
| -------------------- | -------- |
| **Frontend**         | Vercel   |
| **Backend**          | Render   |
| **Source Code**      | GitHub   |
| **CI/CD**            | Jenkins  |
| **Containerization** | Docker   |

---

## 💻 Local Setup

### 1. Clone the Repository

```bash
git clone <https://github.com/Kusuma-01/finance-tracker>
cd AI-Finance-Tracker
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install the required dependencies according to the backend configuration and start the Flask application.

### 3. Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

---

## 🎯 Project Objectives

* Simplify personal expense management
* Track and organize financial transactions
* Analyze user spending behavior
* Predict future expenses using machine learning
* Provide a user-friendly financial management platform
* Implement automated testing
* Apply Docker containerization
* Implement CI/CD using Jenkins
* Deploy the application using cloud platforms

---

## 📚 Key Learning Outcomes

This project provided practical experience in:

* Full-stack web development
* React.js development
* Flask backend development
* REST API development
* Machine learning integration
* Automated testing with Pytest
* Docker containerization
* Jenkins CI/CD
* Git and GitHub
* Cloud deployment

---

## 👩‍💻 Author

**Kusuma Adari**
